import {Link} from "react-router-dom";
// import { useContext } from "react";
// import userContext from "../utils/userContext"
import { useSelector } from "react-redux";

const Heading1 = () => {
  // const {user}=useContext(userContext);

  const cartItems=useSelector((store)=>store.cart.items);
  // console.log(cartItems);

    return (
      <>
        <div className="flex justify-between bg-red-500 shadow-neutral-700">
          <img
            className="h-20 p-2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7yCRVk5lgbxXopBVitKNvkXpb4Vh8VNIg9Q&usqp=CAU"
            alt=""
          />
    
          {/* <div>
            <span>{user.name}</span>
          </div> */}
          
          <div className="nav-items py-8 px-5">
            <ul className="flex space-x-2">
              <Link to="/">
                <li className="text-white">Home</li>
              </Link>
              
              <Link to="/about">
                 <li className="text-yellow-400">About</li>
              </Link>

              <Link to="/contact">
                 <li className="text-white">Contact</li>
              </Link>

              <Link to="/instamart">
                 <li className="text-white">Instamart</li>
              </Link>
              <Link to="/cart">
                 <li className="text-yellow-400">Cart {cartItems.length}</li>
              </Link>
              
            </ul>
          </div>
        </div>
      </>
    );
  };

  export default Heading1;