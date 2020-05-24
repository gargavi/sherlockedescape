import React from 'react';
import Button from 'react-bootstrap/Button';
import "./css/home.css";

function Home(props){ 
       let button1; 
        if (props.vals.accepted){ 
            button1 = <p> <u> Accepted! </u> </p> 
        } else { 
            button1 = <Button className = "accept" onClick = {props.onclick}> Accept the Case? </Button>;
        }
        return ( 
            <div class = "row"> 
                <div class = "letter" id = "introletter"> 
                    <h3> Welcome to the Web Escape Room! </h3>
                    <p> The Web Escape Room works in the same fashion that a regular 
                        escape room works. Find the clues, piece them together, and <u> beat the 
                        puzzle </u> in the web browser!
                    </p>
                    <p> You can check how much time you have left 
                        in the top right corner and use the right sidebar to navigate. We recommend
                        that you play with other people using screen sharing in order to help you 
                        complete the challenge and simulate what a real game would be like! 
                    </p>
                    <div class = "buttonhold">  
                        {button1}
                    </div> 
                    <div class = "closing">
                        <p> Best of Luck, </p> 
                        <p> A.Z, A.G </p>     
                       
                    </div>  
                </div> 

            </div>


        )
    }


export default Home;