import React, {Component} from 'react';
import "./css/how.css";
import Hint from "./hints";

function How(props){ 
    if (props.active) {
        const hinters = [
            {
                num: "0", 
                title: "Hint 1", 
                body: "The pills have to look the exact same, and each one only owns so many pills"}, 
            {
                num: "1", 
                title: "Hint 2", 
                body: "You can only buy pills in whole numbers, and Arnav bought a certain amount of them extra."},
            
        ]
        const hints = <Hint
            values = {hinters}
        /> 
        return (   
            <div class = "larger">
                <div class = "how"> 
                <div class = "finale"> 
                    <p> The last thing we need is to figure out which pill, the <b> HOW </b> that Arnav switched out. 
                        We've compiled the following information and know that he bought some amount extra of the pill supply. Put 
                        the number of the list in the letter.
                    </p> 
                </div> 
                <div class = "healthprob"> 
                    <h5> Prescriptions under Arnav's Name</h5>
                    <ul>
                        <li> High Cholesterol </li> 
                        <li> Nausea </li>
                        <li> Diarrhea </li>
                        <li> Erectile Dysfunction</li>
                        <li> Heart Disease </li> 
                    </ul>
                </div> 
                <div class = "healthprob">
                    <h5> Money Spent on Prescriptions </h5>    
                    <ul> 
                        <li> Total Spent on Prescriptions Last Month: 450 </li>
                        <li> Total Spent on Prescription This Month: 459 </li> 
                    </ul> 
                </div> 
                <div class = "descriptions"> 
                    <h5> Common Medication Descriptions </h5> 
                    <ol> 
                        <li> <b>Knee Pain: </b> Oval, marked B,  <b> $4.00</b> </li> 
                        <li> <b>Addy: </b> White, Square, <b> $2.50 </b> </li> 
                        <li> <b>Early Balding Treatment:</b> Small, marked B, <b> $3.50 </b> </li> 
                        <li> <b> Diarrhea relieve: </b> White, Circular, marked B, <b> $1.50 </b> </li> 
                        <li> <b> High Blood Pressure: </b> Gray, Large, marked A, <b> $1.40 </b> </li> 
                        <li> <b> High Cholesterol: </b> Gray, marked C, <b> $9.00 </b> </li> 
                        <li> <b> Nause Medication: </b> Medium, marked A, <b>$3.00 </b>  </li> 
                        <li> <b> Hearing Loss ailment: </b> Square, Medium, <b>$4.00 </b> </li> 
                        <li> <b> Viagra: </b> Square, Small, <b> $5.00 </b> </li> 
                        <li> <b> Type 1 Diabetes: </b>  Red, Large, marked A, <b> $7.00 </b> </li> 
                        <li> <b> Type 2 Diabetes: </b> Red, Medium, <b>$3.00 </b> </li>
                        <li> <b> Heart Disease prevention: </b> Red, Large, marked A,<b>$3.00 </b> </li> 
                        <li> <b> Vicodin: </b> White, Circular, marked A, <b> $6.00</b> </li> 
                    </ol> 

                </div> 

            </div> 
            {hints}
            </div>
        )
    } else { 
        return (
            <div class = "reject"> 
                <h3> Finish earlier levels!! </h3> 
            </div>
        )
    }
}

export default How;