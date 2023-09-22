import { useContext } from "react";
// import userContext from "../utils/userContext";
import { IMG_CDN_URL } from "../constants.js";

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  // const {user}=useContext(userContext);
    return (
      <>
        <div className="h-60 w-48  p-1 m-2 shadow-xl shadow-slate-300 border-solid border-2 border-slate-400 rounded-md">
         
            <img className=" h-36 w-48 p-2 rounded-2xl"
              src={IMG_CDN_URL + cloudinaryImageId}
              alt="Domino's"
            />
         
  
          <div className=" h-16 ">
            <h4 className=" text-xs font-bold text-red-500 ">{name}</h4>
            <h4 className="text-xs font-bold ">{cuisines?.join(", ")}</h4>
            <h4 className="text-xs font-bold ">{avgRating}</h4>
          </div>
        </div>
      </>
    );
  };

  export default RestaurantCard;