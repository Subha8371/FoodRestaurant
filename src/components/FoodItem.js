
import { IMG_CDN_URL } from "../constants.js";

const FoodItem = ({imageId, name, price}) => {
      
    return (
      
      <>
      <div>
        <div className="h-60 w-48  p-1 m-2 shadow-xl shadow-slate-300 border-solid border-2 border-slate-400 rounded-md">
         
            <img className=" h-36 w-48 p-2 rounded-2xl"
              src={IMG_CDN_URL + imageId}
              alt="Domino's"
            />
         
  
          <div className=" h-16 ">
            <h4 className=" text-xs font-bold text-red-500 ">{name}</h4>
            <h4 className="text-xs font-bold ">{price/100} rs</h4>
          </div>
        </div>

        
        </div>

      </>
    );
  };

  export default FoodItem;