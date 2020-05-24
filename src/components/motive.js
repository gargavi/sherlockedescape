import React, {Component} from 'react';
import "./css/motive.css";
import Webpage from "./webpage.js";
import Background from "./photos/computerback.png";


class Motive extends Component { 
    constructor(props) { 
        super(props)
        this.state = { 
            correct: "Majnma"
        }
    }
    render() { 
        return ( 
            <div class = "motive">
                <div class = "head"> 
                    <p> On your intuition, we were able to get the following SSH access to Arnav's computer. </p> 
                </div> 

                <div class = "screen" style = {{backgroundImage: `url(${Background})`}}>
                    <div class = "graphic1"> 
                        <Webpage 
                            paragraphs = {["J. Jason", "DJ", "FM/AM"]}
                        /> 
                        
                    </div> 
                    <div class = "graphic2"> 
                        <Webpage 
                            paragraphs = {[ "2, 4, 9, 2, 4, 4, 2, 3, 3, 9, _"]}
                        /> 
                    </div> 
                    <div class = "graphic3"> 
                        <Webpage 
                            paragraphs = {["What you own, but others use it more?", "0, 1, 1, 2, 3, 5, 8, 13 ..."]}
                        /> 
                    </div> 
                    <div class = "graphic4"> 
                        <Webpage 
                            paragraphs = {["Shopping List",
                            "Tomatoes", "Oranges", "Beans", "Cheese", "Bruchetta" ]}
                        /> 
                    </div> 

                </div>

            </div> 
        )
    }
}

export default Motive;