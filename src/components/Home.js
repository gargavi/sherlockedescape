import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import "./home.css";

class Home extends Component { 
    constructor(props) { 
        super(props)
        
    }
    render () { 
        return ( 
            <div class = "row"> 
                <div class = "letter" id = "introletter"> 
                    <h3> Welcome to the Web Escape Room! </h3>
                    <p> The Web Escape Room works in the same fashion that a regular 
                        escape room works. Find the clues, piece them together, and <b>beat the 
                        puzzle </b> in the web browser!
                    </p>
                    <p> You can check how much time you have left 
                        in the top right corner and use the right sidebar to navigate. We recommend
                        that you play with other people using screen sharing in order to help you 
                        complete the challenge and simulate what a real game would be like! 
                    </p>
                    <div class = "buttonhold">  
                    <Button className = "accept" onClick = {this.props.onclick}> Accept the Case? </Button> 
                    </div> 
                    <div class = "closing">
                        <p> Best of Luck, </p> 
                        <p> A.G, A.Z </p>     
                       
                    </div>  
                </div> 

            </div>


        )
    }

}

export default Home;