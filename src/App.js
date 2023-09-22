import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Heading1 from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Body from "./components/Body";
import Instamart from "./components/Instamart";
import Error from "./components/Error"
import { createBrowserRouter,Outlet,RouterProvider,Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";


const AppLayout = () => {
  const [user,setUser]=useState({
      name:" ",
      email:" ", 
  })
  return (
    <Provider store={store}>   
      <userContext.Provider 
        value={{user:user,setUser:setUser}}
    >
        <Heading1 />
        <Outlet/>
        <Footer/>
       </userContext.Provider>
    </Provider>
  );
};

const appRouter= createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>,
        errorElement:<Error/>
      },
      {
        path:"/About",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/instamart",
        element:<Instamart/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/restaurant/:id",
        element:<RestaurantMenu/>
      }
    ]
  }
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
