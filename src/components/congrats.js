import React from "react";
import {Link} from "react-router-dom";

function Congrats(props) {
    if (props.active) { 
    return (
        <div class = "container"> 
            <div class = "row topmargin"> 
                <div class = "letter"> 
                    <h3> Congrats {props.name} ! You have solved the puzzle! </h3> 

                    <p> We hope you guys enjoyed the puzzle! </p>

                    <p> It took you {props.minutes - 1} minutes and {60 - props.seconds}  seconds. </p>
                
                    <div class = "promo"> 
                        <p> If you want to check out some of the other projects we're doing, check out our websites below. </p> 
                        <ul>    
                            <li> <a href = "https://www.andrewtacozhang.com" target="_blank" rel = "noopener noreferrer">Andrew Zhang </a> </li> 
                            <li> <a href = "https://www.avigarg.me" target="_blank" rel = "noopener noreferrer"> Avi Garg</a></li> 
                            <li> <a href = "https://www.youtube.com/andrewtacozhang" target="_blank" rel = "noopener noreferrer"> Andrew's Youtube (plug) </a> </li>
                            <li><a href = "https://www.youtube.com/watch?v=4ylh6lG-45g" target="_blank" rel = "noopener noreferrer"> Behind the Scenes </a>  </li> 
                            <Link to = "/solutions"> SOLUTIONS </Link> 
                        </ul> 
                        <p> If you enjoyed the game and want to help us pay for hosting costs or just want to express 
                            your gratitude via monetary compensation you can Venmo us at <b> @Avi_Garg </b>. We'll be donating all 
                            profits to the <a href = "https://secure.givelively.org/donate/the-bail-project" target="_blank" rel = "noopener noreferrer"> The Bail Project</a> to help 
                            the protestors around the country. You can also donate directly to them and we urge you to check out the resources 
                            below to learn more about how you can help. 
                        </p> 
                        <ul> 
                            <li> <a href = "https://www.change.org/p/mayor-jacob-frey-justice-for-george-floyd?utm_source=brand_us&utm_medium=media" target="_blank" rel = "noopener noreferrer"> Petition for George Floyd</a> </li> 
                            <li> <a href = "https://secure.actblue.com/donate/ms_blm_homepage_2019" target="_blank" rel = "noopener noreferrer"> Black Lives Matter Donation Link </a> </li> 
                            <li> <a href = "https://blacklivesmatter.com" target="_blank" rel = "noopener noreferrer"> Black Lives Matter Main Page</ a> </li>
                            <li> <a href = "https://www.justiceforbigfloyd.com/" target="_blank" rel = "noopener noreferrer"> justiceforbigfloyd.com </a> </li> 
                            <li> <a href = "https://sojo.net/articles/our-white-friends-desiring-be-allies" target="_blank" rel = "noopener noreferrer"> How to be an Ally </a> </li> 
                            
                        </ul>
                        <p> 
                            We're hoping to bring you 
                            some more escape rooms in the future, so if you like it, feel free to share it around and give us feedback 
                        </p>
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfzzeK-SgM7AiRkoELCzUR0-l5K_1oqRM25fLMUD-zvM-0KwA/viewform?embedded=true" width="640" height="1619" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
                        <p>
                        If you have any projects you would like to work with us on, 
                            also reach out and we can talk about collaborating!
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
            <div className = "reject"> 
                <h3> Complete the stages! </h3> 
            </div> 
        )
    }   
}
export default Congrats;