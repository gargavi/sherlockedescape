import React, {Component} from 'react';
import "./css/motive.css";
import Webpage from "./webpage.js";
import Background from "./photos/computerback.png";
import Image from "./photos/motiveaid.png";
import Hint from "./hints";

class Motive extends Component { 
    constructor(props) { 
        super(props)
        this.state = { 
            correct: ["m", "o", "n", "e", "y"]
        }
    }
    handleInputChange = (event) => {
        var temp_guess = this.props.vals.guesses;
        temp_guess[Number(event.target.name) - 1] = event.target.value.toLowerCase();
        this.props.change("motive", "guesses", temp_guess);
        this.checkCorrect(temp_guess);
    }
    checkCorrect = (given) => { 
        var correct = true;
        for (var i = 0; i < given.length; i++) { 
            if (!(given[i]=== this.state.correct[i] )) { 
                correct = false; 
            }
        }
        if (correct) {
            this.props.change("motive", "correct", true);
            this.props.solved([8]);
        }
    }

    render() {
        if (this.props.active) {
            if (this.props.vals.correct) { 
                return ( 
                    <div class = "motive"> 
                        <div class = "head"> 
                            <p> On your intuition, we were able to get the following SSH access to Arnav's computer. We were hoping you 
                                could get some hard core evidence off of it by cracking the passcode.</p>
                        
                        </div> 

                        <div class = "screen" style = {{backgroundImage: `url(${Background})`}}>
                            <div class = "evidence">

                                <h2> Diary Entry </h2>
                                <h5> I'm worried about the <b> MONEY </b> </h5> 

                                <div className = "explanation"> 
                                    I'm worried that Andrew's research is going to ruin me. I've convinced the board that the quarantine will last 
                                    for months, and now with the vaccine coming so soon because of Andrew, it may just be a matter of days. Our stock 
                                    price will tank with this news and there's a good chance I will be fired because of it. I have to put a stop to this 
                                    research somehow, it doesn't matter how long I've known Andrew, I have kids and a family now. I wonder if he's still 
                                    taking those pills for his condition, I think I have some that look exactly like them....
                                </div> 
                            </div> 
                        </div>
                    </div> 
                )
            } else { 
                const hinters = [
                    {
                        num: "0", 
                        title: "Black Text", 
                        body: "Calendar"}, 
                    {
                        num: "1", 
                        title: "Red Text", 
                        body: "Look at the instructions once again."},
                    {
                        num: "2", 
                        title: "Gold Text",
                        body: "Look at the stating letters. See anything that looks familiar?" 
                    }, 
                    {
                        num: "3", 
                        title: "Gold Text pt.2",
                        body: "U.S.A, U.S.A, U.S.A" 
                    }, 
                    {
                        num: "4", 
                        title: "Purple Text",
                        body: "periodic" 
                    }, 
                    {
                        num: "5", 
                        title: "General ",
                        body: "There are only 5 letters but 6 graphics? Maybe one of them doesn't give you a clue but IS a clue.." 
                    }
                ]
                const hints = <Hint
                    values = {hinters}
                /> 
                return ( 
                    <div class = "largest">
                    <div class = "motive">
                        <div class = "head"> 
                            <p> On your intuition, we were able to get the following SSH access to Arnav's computer. We were hoping you 
                                could get some hard core evidence off of it by cracking the passcode.</p>
                            
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
                                    paragraphs = {[ "0, 1, 1, 2, 3, 5, 8, 13 ..."]}
                                /> 
                            </div> 
                            <div class = "graphic4"> 
                                <Webpage 
                                    title = "Shopping List"
                                    paragraphs = {[
                                    "Diced Tomatoes", "Blood Oranges", "Great Beans", "Blue Cheese", "Grain Bread" ]}
                                /> 
                            </div> 
                            <div class = "graphic5"> 
                                <Webpage 
                                    paragraphs = {[
                                    "Neptumium: No Problem", 
                                "Copper: ??? ??? "]}
                                /> 
                            </div> 
                            <div class = "graphic6" style = {{backgroundImage: `url(${Image})`}}>
                            </div>
                            <div class = "password"> 
                                <input
                                    name = "1"
                                    className = "first"
                                    maxLength = "1"
                                    type = "text"
                                    value = {this.state.first}
                                    onChange = {this.handleInputChange}
                                />
                                <input
                                    name = "2"
                                    className = "second"
                                    maxLength = "1"
                                    type = "text"
                                    value = {this.state.second}
                                    onChange = {this.handleInputChange}
                                /> 
                                <input
                                    name = "3"
                                    className = "third"
                                    maxLength = "1"
                                    type = "text"
                                    value = {this.state.third}
                                    onChange = {this.handleInputChange}
                                /> 
                                <input
                                    name = "4"
                                    className = "fourth"
                                    maxLength = "1"
                                    type = "text"
                                    value = {this.state.fourth}
                                    onChange = {this.handleInputChange}
                                /> 
                                <input
                                    name = "5"
                                    className = "fifth"
                                    maxLength = "1"
                                    type = "text"
                                    value = {this.state.fifth}
                                    onChange = {this.handleInputChange}
                                /> 
                                
                            </div> 

                        </div>

                    </div> 
                    {hints}
                    </div>
                )
            }
        } else { 
            return (
            <div class = "reject">  
                <h3> You must pass earlier stages! </h3> 
            </div> 
            )
        }
    }
}

export default Motive;