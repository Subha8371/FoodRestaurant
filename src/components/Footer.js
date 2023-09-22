import userContext from "../utils/userContext";
import { useContext } from "react";
const Footer=()=>{
  const {user}=useContext(userContext);   //destructuring
    return(
        <>
           
          <h1>Foooooooter {user.name} {user.email}</h1>
        </>
    )
}

export default Footer;