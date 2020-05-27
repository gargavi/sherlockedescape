import React from "react";


function Congrats(props) {
    if (props.active) { 
    return (
        <div class = "container"> 
            <div class = "row topmargin"> 
                <div class = "letter"> 
                    <h3> Congrats {props.name} ! You have solved the puzzle! </h3> 

                    <p> We hope you guys enjoyed the puzzle! </p>

                    <p> It took you {45 - props.minutes - 1} minutes and {60 - props.seconds}  seconds. </p>
                
                    <div class = "promo"> 
                        <p> If you want to check out some of the other projects we're doing, check out our websites below. </p> 
                        <ul>    
                            <li> <a href = "https://www.andrewtacozhang.com">Andrew Zhang </a> </li> 
                            <li> <a href = "https://www.avigarg.me"> Avi Garg</a></li> 
                            <li> <a href = "https://www.youtube.com/andrewtacozhang"> Andrew's Youtube (plug) </a> </li>
                        </ul> 
                        <p> If you enjoyed the game and want to help us pay for hosting costs or just want to express 
                            your gratitude via monetary compensation you can Venmo us at <b> @Avi_Garg </b>. We're hoping to bring you 
                            some more escape rooms in the future, so if you like it, feel free to share it around and let us know 
                            by reaching out to us (contact info on websites). 
                        </p> 
                    </div> 
                </div>
                <div> 
                    
                </div>
            </div> 
        </div> 
    )    
    } else { 
        return ( 
            <div class = "reject"> 
                <h3> Complete the stages! </h3> 
            </div> 
        )
    }   
}
export default Congrats;