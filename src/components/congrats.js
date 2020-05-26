import React from "react";


function Congrats(props) {
    if (props.active) { 
    return (
        <div class = "container"> 
            <div class = "row topmargin"> 
                <div class = "letter"> 
                    <h3> Congrats! You have solved the puzzle! </h3> 

                    <p> We hope you guys enjoyed the puzzle! </p>

                    <p> It took you {60 - props.minutes - 1} minutes and {60 - props.seconds}  seconds. </p>
                
                    <div class = "promo"> 
                        <p> If you want to check out some of the other projects we're doing, check out our websites below. </p> 
                        <ul>    
                            <li> <a href = "https://www.andrewtacozhang.com">Andrew Zhang </a> </li> 
                            <li> <a href = "https://www.avigarg.me"> Avi Garg</a></li> 
                        </ul> 
                        <p> If you enjoyed the game and want to help us pay for server costs or just want to express 
                            your gratitude via monetary compensation you can Venmo us at @Avi_Garg. We're hoping to bring you 
                            some more escape rooms in the future, so if you enjoyed this, feel free to share it around and let us know 
                            by reaching out to us (contact info on websites)! We hope you had a fun time! 
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
                <h3> Complete the stages to unlock this! </h3> 
            </div> 
        )
    }   
}
export default Congrats;