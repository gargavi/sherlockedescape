import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';


class Home extends Component { 
    constructor(props) { 
        super(props)
        this.state = { 
            accepted: false
        }
        
    }
    acceptClick = () => { 
        this.setState({ 
            accepted: true
        })
        this.props.onclick();
    }
    render () { 
        let button1; 
        if (this.state.accepted){ 
            button1 = <p> <u> Accepted! </u> </p> 
        } else { 
            button1 = <Button className = "accept" onClick = {this.acceptClick}> Accept the Case? </Button>;
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
                        <p> A.G, A.Z </p>     
                       
                    </div>  
                </div> 

            </div>


        )
    }

}

export default Home;