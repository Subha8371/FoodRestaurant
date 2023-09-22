import Profile from "./ProfileClass";
import { Component } from "react";
import userContext from "../utils/userContext";

class About extends Component{
  constructor(props){
    super(props);
    // console.log("parent-constructor");
  }

  componentDidMount(){
    // console.log("parent-componentDidMount");
    const name = "amirban"
    console.log(`Hi ${name}`)
  }
 
  render(){
    // console.log("parent-render");
    return(
        <div>
            <h1>About Us</h1>
            <p>I am about page </p>
            <userContext.Consumer>
            {({user})=>(<h4>{user.name} {user.email}</h4>)}
            </userContext.Consumer>
           
            <Profile name={"First child"} xyz="abc"/>
            <Profile name={"Second child"} xyz="abc"/>
        </div>
    );
  }
}
export default About;