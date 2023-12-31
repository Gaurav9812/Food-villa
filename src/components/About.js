import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import ProfileFunctionalComponent from './Profile';
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
    constructor(props) {
            super(props);
        console.log("Parent-constructor");

    }
    
    componentDidMount() {
        console.log("Parent-componentDidMount");
    }

    render() {
        console.log("Parent-render");
        return (
            <div>

        <h1>About us</h1>
        <h2>This is about us page </h2>
          <UserContext.Consumer >
            {({user})=> <h4 className="font-bold">{user.name} - {user.email}</h4>}
            </UserContext.Consumer>  
        <ProfileClass name="gaurav class" />
        {/* <ProfileClass name="gaurav class 2" /> */}

        </div>
        ) ;
    }
}

const About1 = function() {
    return (
        <div>
        <h1>About us</h1>
        <h2>This is about us page </h2>
        <ProfileFunctionalComponent name ="Gaurav" />
        <ProfileClass name="gaurav class" />
        </div>
        )
}

export default About;