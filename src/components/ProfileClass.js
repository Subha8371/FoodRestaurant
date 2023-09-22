import React from "react";
class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
            count2:0,
        };
        console.log("child - constructor "+this.props.name);
    }

    componentDidMount(){
        console.log("child-componentDidmount"+this.props.name)
    }

    render(){
        const {count}=this.state;
        console.log("child-render"+this.props.name);
        return(
            <div>
                
            </div>
        )
    }
}
export default Profile;