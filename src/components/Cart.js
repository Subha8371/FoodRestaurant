import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearcart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearcart());
  };
  const handleClearCart2 = (id) => {
    dispatch(removeItem(id));
  };
  
  return (
    <>
      <div>
        <button
          className=" m-2 py-1 px-1 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 "
          onClick={() => handleClearCart()}
        >
          ClearCart
        </button>
        <div className=" flex flex-wrap">
          {cartItems.map((item,index_id) => (
            
            <>
            <div >
            <FoodItem key={item?.card?.info?.id} {...item?.card?.info} index_id={index_id} />

              
              <button className=" ml-14 m-2 py-2 px-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75  w-20 " onClick={()=>handleClearCart2(index_id)}>remove</button>
            </div>
            </>
          ))}
          
        </div>
      </div>
    </>
  );
};

export default Cart;
