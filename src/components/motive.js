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
            correct: ["o", "y", "n", "m", "e"]
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
            this.props.solved([7, 8]);
        }
    }

    render() {
        if (this.props.active) {
            if (this.props.vals.correct) { 
                return ( 
                    <div class = "motive"> 
                        <div class = "head"> 
                            <p> On your intuition, we were able to get the following SSH access to Jerry's computer. We were hoping you 
                                could get some hard core evidence off of it by cracking the passcode.</p>
                        
                        </div> 

                        <div class = "screen" style = {{backgroundImage: `url(${Background})`}}>
                            <div class = "evidence">

                                <h2> Diary Entry:   <b> (WHY) </b> I did it </h2>
                                <h5>  Password <b> "oynme" </b> was successful </h5> 

                                <div className = "explanation"> 
                                    I'm worried that Andrew's research is going to ruin me. I've convinced the board that the quarantine will last 
                                    for months, and now with the vaccine coming so soon because of Andrew, it may just be a matter of days. Our stock 
                                    price will tank with this news and there's a good chance I will be fired because of it. I'll lose all my life savings, 
                                    all my <b> money </b>. I have to put a stop to this 
                                    research somehow, it doesn't matter how long I've known Andrew, I have kids and a family now. I wonder if he's still 
                                    taking those pills for his condition, I think I have some that look exactly like them....
                                </div> 
                            </div> 
                        </div>
                    </div> 
                )
            } else { 
                const hinters = [
                    {   num: "-1", 
                        title: "Freebie Hint",
                        body: "Each webpage gives a SINGLE WORD either by a pattern it demonstrates or by completing the ? or _. The roman numeral gives the position of the letter in the word that the passcode uses. "
                    },
                    {
                        num: "2",
                        title: "Hint Gold Text ", 
                        body: "Disney Movies"
                    },
                    {
                        num: "3", 
                        title: "Hint: Black Text", 
                        body: "Calendar"}, 
                    {
                        num: "4", 
                        title: "Hint: Red Text", 
                        body: "Look at the instructions once again."
                    },
                    {
                        num: "5", 
                        title: "Hint: Purple Text",
                        body: "periodic" 
                    }, 
                    {
                        num: "6", 
                        title: "Final Hint: Everything ",
                        body: "Black: Months, Red: Three, Gold: Princesses, Green: Fibonaaci, Purple: See You; " 
                    }
                ].slice(0, this.props.vals.hints)
                const hints = <Hint
                    values = {hinters}
                    num = {this.props.hints}
                    click = {() => {this.props.change("motive", "hints", this.props.vals.hints + 1); this.props.change("hints", "hints", this.props.hints - 1)}}
        
                /> 
                return ( 
                    <div class = "largest">
                    <div class = "motive">
                        <div class = "head"> 
                            <p> On your intuition, we were able to get the following SSH access to Jerry's computer. We were hoping you 
                                could get some concrete evidence off of it by cracking the passcode.</p>
                            
                        </div> 

                        <div class = "screen" style = {{backgroundImage: `url(${Background})`}}>
                            <div class = "graphic1"> 
                                <Webpage 
                                    paragraphs = {["J. JASON", "DJ", "FM/AM"]}
                                /> 
                                
                            </div> 
                            <div class = "graphic2"> 
                                <Webpage 
                                    paragraphs = {[ "2, 4, 9, 2, 4, 4, 2, 3, 3, 9, _"]}
                                /> 
                            </div> 
                            <div class = "graphic3"> 
                                <Webpage 
                                    paragraphs = {[ "0, 1, 1, 2, 3, 5, 8, 13, 21"]}
                                /> 
                            </div> 
                            <div class = "graphic4"> 
                                <Webpage 
                                    title = "Jas, Mul, Ari, Els are _ if "
                                    paragraphs = {[
                                   "Jas from A", "Mul from M", "Ari from LM", "Els from F" ]}
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