import React from 'react';
import "./css/navigation.css";
import { NavLink } from 'react-router-dom';
//import lock from "./photos/lock-icon.png";


const Navigation = (props) => {
    const names = ["STORY",  "STARTING POINT", "TODO", "SUSPECTS", "EMAILS", "KILLER", "SEARCH", "HOW", "PASSWORD", "CONGRATS"];
    const links = ["/story", "/starting","/todo", "/suspects", "/polygraph", "/killer", "/motive", "/how",  "/password", "/congrats"];
    const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const pages = nums.map((num) => { 
        if (props.active[num]) {  
            return (<li> 
                {/*<img alt= "lock" src = {lock} className = "whiteback" style = {{height: "20px"}} />*/}
                <NavLink activeStyle = {{color: 'white'}} className = "links" to={links[num]}> {names[num]} </NavLink>
            </li>
            )
        }
    })

    return (
        <div className = "navigation"> 
            <ul> 
                <li> 
                    {/*<img alt= "lock" src = {lock} className = "whiteback" style = {{height: "20px"}} /> */}
                    <NavLink exact activeStyle = {{color: 'white'}} className = "links" to= "/"> HOME </NavLink>
                </li>
                {pages}
               
            </ul>
       </div> 
    );
}   

 
export default Navigation;