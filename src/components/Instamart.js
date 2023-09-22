import { useState } from "react"

const Section=({title,description,isVisible,setIsVisible})=>{

    return(
        <>
        <div className=" border border-slate-600 p-1 m-3">
           <h1 className=" font-bold text-xl">{title}</h1>
    
           {
            isVisible ? 
           
             (<button className=" underline"
             onClick={()=>{setIsVisible("")}}>Hide
            </button>) : (<button 
              className=" underline" 
              onClick={()=>{setIsVisible()}}>Show
            </button>) 
           }
           
           {isVisible && <p>{description}</p>}
        </div>
          
        </>
    )
}

//Instamart is parent component and section is child component
const Instamart=()=>{
   const [secConfig,setSecConfig]=useState();
  return(
    <>
      <Section 
        title={"InstamartAbout"}
        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!"}
        isVisible={secConfig ==="About"}
        setIsVisible={()=>setSecConfig("About")}
       />

      <Section 
        title={"InstamartCard"}
        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!"}
        isVisible={secConfig==="card"}
        setIsVisible={()=>setSecConfig("card")}
        />

      <Section 
        title={"InstamartCareer"}
        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!"}
        isVisible={secConfig==="Career"}
        setIsVisible={()=>setSecConfig("Career")}
        />
    </>
  )
}

export default Instamart;