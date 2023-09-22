import { useState,useEffect } from "react";
import { fetching_menu } from "../constants";
const useRestaurant =(id)=>{
    const [restaurant,setRestaurant]=useState(null);
    const [menu,setMenu]=useState({});
 
     useEffect(()=>{
         getRestaurantInfo();
     },[]);
 
     async function getRestaurantInfo(){
         const data=await fetch(
             fetching_menu+id
         );
         const json=await data.json();
         setRestaurant(json?.data?.cards[0]?.card?.card?.info);
         setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
         
     }
     return [restaurant,menu];     //return as array
}

export default useRestaurant;