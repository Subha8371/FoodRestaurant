import { useState,useEffect,useContext } from "react";
import RestaurantCard from "./Restaurantcard.js";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline.js";
import userContext from "../utils/userContext";

const Body = () => {


  function filterData(searchTxt,allRestaurants) {
    const filterData = allRestaurants?.filter((restaurant) =>
      restaurant?.info?.name?.includes(searchTxt)
    );
    return filterData;
  }

  
  const [searchTxt, setSearchTxt] = useState("");
     
  const [filterRes, setFilterRes] = useState([]);    //here filterres copy to allres
  const [allRestaurants, setAllRestaurants] = useState(null);
  const [x,setX]=useState(0);
  
  //what happen before we type bttn and after we type bttn 
    if(x===0){
      xyz=allRestaurants;
    }else{
     xyz=filterRes;
    }

  useEffect(()=>{
     getRestaurants();
  },[]);

  async function getRestaurants(){
    const data=await fetch(
         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.466045&lng=88.3911618&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json=await data.json();
    setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
  }

  ///online or not?
  const isOnline=useOnline();

  if(!isOnline){
    return <h1>please check your internet connection</h1>
  }
  

  
  //context
  const {user,setUser}=useContext(userContext);

  return (!allRestaurants) ? (
    
    <>
     <Shimmer/>
    </>
  ) : (
       <>
        <div className="py-2 bg-red-500 my-2">
          <input className="mx-2 p-1 rounded-md"
           type="text"
           placeholder="search"
           value={searchTxt}
           onChange={(e) => {
             setSearchTxt(e.target.value);
           }}
          />
          <button
           className="border-2 p-1 rounded-lg bg-yellow-300 hover:bg-white focus:outline-none focus:ring focus:ring-violet-500 ..."
            onClick={() => {
            const data = filterData(searchTxt,allRestaurants);
            setAllRestaurants(allRestaurants); 
            setFilterRes(data); 
            setX(1);
           }}
          >
          search
         </button>

         {/* <input className=" p-2 m-2"  type="text" value={user.name} onChange={e=>setUser({...user,name:e.target.value})}/>
         <input className=" p-2 m-2"  type="text" value={user.email} onChange={e=>setUser({...user,email:e.target.value})}/> */}
        </div>
        <div className=" p-2 flex flex-wrap">
         {/* <RestaurantCard {...restaurantList[0].info} />
         <RestaurantCard {...restaurantList[1].info} />
         <RestaurantCard {...restaurantList[2].info} />
         <RestaurantCard {...restaurantList[3].info} />
         <RestaurantCard {...restaurantList[4].info}/>
         <RestaurantCard {...restaurantList[5].info} />
         <RestaurantCard {...restaurantList[6].info} /> */}

         {/* <RestaurantCard {...restaurantList[7].info} />
         <RestaurantCard {...restaurantList[8].info} />    */}
         
         {
          xyz?.map((restaurant) => {
           return (
            <Link to={"/restaurant/"+restaurant?.info?.id} key={restaurant?.info?.id}>
              
              <RestaurantCard {...restaurant?.info}/>
            </Link>
  
          );
      })
    }
        </div>
       </>
     );
};
export default Body;
