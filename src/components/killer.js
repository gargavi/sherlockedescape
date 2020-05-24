import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import './css/killer.css';
function Killer (props) { 
    const [killer, changeKiller] = useState("");

    if (props.active) {
        return (
            <div class = "killer"> 
                <label> Who is the killer? </label> 
                <p> You only get one guess, so make sure you know! </p> 
                <input
                    type = "text"
                    value = {killer}
                    onChange = {(event) => changeKiller(event.target.value)}
                />
                <div class = "buttonhold"> 
                <Button type = "submit" onClick = {() => props.validate(killer)}> Guess! </Button>
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
