import React, {Component} from 'react';
import "./css/stageone.css";
import Background from "./photos/notepad.png";
import Button from 'react-bootstrap/Button';
import Hint from './hints';

class Stageone extends Component { 
    constructor(props) { 
        super(props) 
        this.state = { 
            first_guess: "",
            second_guess: "",
            third_guess: "",
            fourth_guess: "",
            solved: false
        }
    }
    handleSubmit = () => { 
        if (this.props.vals.first_guess.toLowerCase().trim() === "jerry" 
        && this.props.vals.second_guess.toLowerCase().trim() === "sam" 
        && this.props.vals.third_guess.toLowerCase().trim() === "morgan"
        && this.props.vals.fourth_guess.toLowerCase().trim() === "claire"){
            this.props.change("stageone", "solved", true);
            this.props.solved([3]);
        } else { 
            this.props.change("stageone", "first_guess", "");
            this.props.change("stageone", "second_guess", "");
            this.props.change("stageone", "third_guess", "");
            this.props.change("stageone", "fourth_guess", "");
        }
    }

    handleAnyChange = (event) => { 
        this.props.change("stageone", event.target.name, event.target.value);
    }

    render() {
        let button1; 
        if (this.props.vals.solved) { 
            button1 = <h5 style = {{marginTop: "3%"}}> Solved! </h5>
        }else {
            button1 = <Button id = "submitsuspects" onClick = {this.handleSubmit}> Submit </Button>
        }
        if (!this.props.active) { 
            return (
                <div class = "reject"> 
                        <h3> You must first accept the challenge! </h3>
                </div> 
            )
        } else {
            const hinters = [
                {
                    num: "0", 
                    title: "Hint 1", 
                    body: "Asv Idfd -> Buy Milk"}, 
                {
                    num: "1", 
                    title: "Hint 2: Full Cipher", 
                    body: "You translate every letter to x numbers in the alphabet after it where x is its position. (u is the second letter in Buy so you move it two spaces to s, y is the third letter so its becomes v"},
                {
                    num: "2", 
                    title: "Final Hint: Full Decryption",
                    body: "Lunch with jerry, Call Sam & Morgan Back, Respond to Claire, Pick up meds"
                }
            ].slice(0, this.props.vals.hints)
            const hints = <Hint
                values = {hinters}
                num = {this.props.hints}
                click = {() => {this.props.change("stageone", "hints", this.props.vals.hints + 1); this.props.change("hints", "hints", this.props.hints - 1)}}
            /> 
            return (
                    <div className = "largest"> 
                    <div class = "instructions">
                    <p> Only the word back was decrypted, but we think decrypting the rest of Andrew's todo list might 
                        hold keys for the suspects.  
                    </p>
                    </div>
                   <div class = "todo" style = {{backgroundImage: `url(${Background})`}}> 
                        <h3>  To-Do List </h3> 
                        <table className = "todotable">
                            <thead>
                                <tr> 
                                    <th class = "encrypt"> 
                                        Encrypted
                                    </th>
                                    <th class = "decrypt">
                                        Decrypyted    
                                    </th> 
                                </tr>
                            </thead>
                            <tbody>
                                
                                <tr> 
                                    <td className = "stageonetd"> Kskyc Q Cwihn </td> 
                                    <td className = "stageonetd"> 
                                    <input
                                        name = "first"
                                        type = "text"
                                        value = {this.props.vals.first}
                                        onChange = {this.handleAnyChange}
                                    />     
                                    </td> 
                                </tr>
                                <tr> 
                                    <td className = "stageonetd"> Byih Nuf &amp; Efhvoa nlmt</td> 
                                    <td className = "stageonetd"> 
                                    <input
                                        name = "second"
                                        type = "text"
                                        className = "longerbox"
                                        value = {this.props.vals.second}
                                        onChange = {this.handleAnyChange}
                                    />
                                    <label style = {{textDecorationLine: "underline"}}> back  </label>
                                    </td> 
                                </tr>
                                <tr> 
                                    <td className = "stageonetd"> Qcpljhw lf Saovdp </td> 
                                    <td className = "stageonetd"> 
                                    <input
                                        name = "third"
                                        type = "text"
                                        className = "longerbox"
                                        value = {this.props.vals.third}
                                        onChange = {this.handleAnyChange}
                                    />     
                                    </td> 
                                </tr>
                                <tr> 
                                    <td className = "stageonetd"> Ogzg pj Fwui </td> 
                                    <td className = "stageonetd"> 
                                    <input
                                        name = "fourth"
                                        type = "text"
                                        value = {this.props.vals.fourth}
                                        onChange = {this.handleAnyChange}
                                    />     
                                    </td> 
                                </tr>
                            </tbody>
                        </table>
                        <div className = "suspects"> 
                            <h5> Suspects? (in order) </h5>
                            <input 
                            name = "first_guess"
                            type = "text"
                            value = {this.props.vals.first_guess}
                            onChange = {this.handleAnyChange}
                            /> 
                            <input 
                                name = "second_guess"
                                type = "text"
                                value = {this.props.vals.second_guess}
                                onChange = {this.handleAnyChange}
                            /> 
                            <input
                                name = "third_guess"
                                type = "text"
                                value = {this.props.vals.third_guess}
                                onChange = {this.handleAnyChange}
                            />
                            <input
                                name = "fourth_guess"
                                type = "text"
                                value = {this.props.vals.fourth_guess}
                                onChange = {this.handleAnyChange}
                                />
                            {button1}
                        </div> 
                    </div> 
                    
                        {hints}
                    
                    </div>
                )
        }
    }
}

export default Stageone;