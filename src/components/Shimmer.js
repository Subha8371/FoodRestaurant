const Shimmer = () =>{
    return(
        <>
          <div className=" bg-gray-400 my-2 py-2">
            <input className="mx-2 p-1  bg-slate-400 rounded-md"/>
            
         </div>

          <div className=" flex flex-wrap">
           {
              Array(20).fill(" ").map((e,index)=>(<div key={index} className="h-60 w-48  mt-9 ml-6 bg-gray-400 rounded-md"></div>))
           }

          </div>
        </>
        
    );
   
  
};
export default Shimmer;