import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import './css/killer.css';
function Killer (props) { 
    const [killer, changeKiller] = useState("Jerry");

    if (props.active) {
        let button1; 
        let value;
        if (!props.vals.entered) {
            button1 =  <Button type = "submit" onClick = {() => props.validate(killer)}> Guess! </Button>;
            value = killer;
        } else { 
            button1 = <h3> Solved </h3> 
            value = "Jerry"
        }


        return (
            <div class = "letter"> 
                <div class = "killer"> 
                    <label> Who is the killer? </label> 
                    <p> You only get one guess, so make sure you know! </p> 
                    <select value = {value} onChange = {(event) => changeKiller(event.target.value)}> 
                        <option value = "Jerry" > Jerry </option> 
                        <option value = "Morgan"> Morgan </option> 
                    </select> 
                    
                    
                    {/* <input
                        type = "text"
                        value = {value}
                        onChange = {(event) => changeKiller(event.target.value)}
                    /> */}
                    <div class = "buttonhold"> 
                        {button1}
                    </div> 
                </div>
            </div> 
        )
    } else { 
        return ( 
            <div class = "reject"> 
                <h3> You must complete earlier stages first.</h3>
            </div>
        )
    }
    
}
export default Killer;
