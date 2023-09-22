import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const RestaurantMenu = () => {
  const { id } = useParams();

  const [restaurant, menu] = useRestaurant(id); //take as an array
  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <>
      <Shimmer />
    </>
  ) : (
    <div className=" flex">
      <div className="p-2 m-2">
        <h1 className=" text-xl font-bold">{restaurant?.name}</h1>
        <h1 className=" text-sm">restaurantId:{id}</h1>

        <img
          className=" h-96 w-96"
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
        />
        <h1>{restaurant?.area}</h1>
        <h1 className=" font-semibold">{restaurant?.city}</h1>
        <h1 className=" font-extrabold">{restaurant?.avgRating}</h1>
        <h1>{restaurant?.costForTwoMsg}</h1>
      </div>

      <div className=" p-4 m-3">
        <h1 className=" font-extrabold underline-offset-2">Menu</h1>
        <ul>
          {Object?.values(menu)?.map((item) => (
            <li className=" text-sm" key={item?.card?.info?.id}>
              {item?.card?.info?.name} <br/> {item?.card?.info?.price / 100}  
              <div>
                <button
                  className=" m-2 py-1 px-1 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                  onClick={() => {
                    addFoodItem(item);
                  }}
                >
                  Add Item
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
