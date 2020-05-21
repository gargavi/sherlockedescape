import React from 'react';
import "./navigation.css";
import { NavLink } from 'react-router-dom';
import lock from "./lock-icon.png";
const Navigation = () => {
    return (
        <div className = "navigation"> 
            <ul> 
                <li>
                    <img src = {lock} className = "whiteback" style = {{height: "20px"}} />
                    <NavLink activeStyle = {{color: 'white'}} className = "links" exact to="/"> HOME </NavLink>
                </li>
                <li>
                    <img src = {lock} className = "whiteback" style = {{height: "20px"}} />
                    <NavLink activeStyle = {{color: 'white'}} className = "links" exact to="/story"> STORY </NavLink>
                </li>
                <li> 
                    <img src = {lock} className = "whiteback" style = {{height: "20px"}} />
                    <NavLink activeStyle = {{color: 'white'}} className = "links" to="/password"> PASSWORD </NavLink>
                </li> 
                <li> 
                    <img src = {lock} className = "whiteback" style = {{height: "20px"}} />
                    <NavLink activeStyle = {{color: 'white'}} className = "links" to="/contact"> STARTING POINT </NavLink>
                </li>
                <li> 
                    <img src = {lock} className = "whiteback" style = {{height: "20px"}} />
                    <NavLink activeStyle = {{color: 'white'}} className = "links" to="/contact"> STARTING POINT 2 </NavLink>
                </li>

            </ul>
       </div> 
    );
}   

 
export default Navigation;