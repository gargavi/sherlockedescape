import React, {Component} from 'react';
import "./css/stageone.css";
import Background from "./photos/notepad.png";
import Button from 'react-bootstrap/Button';

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
        if (this.state.first_guess.toLowerCase() === "arnav" 
        && this.state.second_guess.toLowerCase() === "sam" 
        && this.state.third_guess.toLowerCase() === "ibis"
        && this.state.fourth_guess.toLowerCase() === "sheila"){
            this.setState({ 
                solved: true
            })
            this.props.solved([4]);
        } else { 
            this.setState({ 
                first_guess: "",
                second_guess: "",
                third_guess: "",
                fourth_guess: ""
            })
        }
    }

    handleAnyChange = (event) => { 
        this.props.change("stageone", event.target.name, event.target.value);
    }

    render() {
        let button1; 
        if (this.state.solved) { 
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

            return (
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
                                    <td className = "stageonetd"> Cwb Qnrr</td> 
                                    <td className = "stageonetd" style = {{textDecoration: 'none'}}> Buy Milk </td> 
                                </tr>
                                <tr> 
                                    <td className = "stageonetd"> Mwqgm c/ Hzwkg </td> 
                                    <td className = "stageonetd"> 
                                    <input
                                        name = "first"
                                        value = {this.props.vals.first}
                                        onChange = {this.handleAnyChange}
                                    />     
                                    </td> 
                                </tr>
                                <tr> 
                                    <td className = "stageonetd"> Dcop Xgt  &amp; Qksd nnqz </td> 
                                    <td className = "stageonetd"> 
                                    <input
                                        name = "second"
                                        value = {this.props.vals.second}
                                        onChange = {this.handleAnyChange}
                                    />     
                                    </td> 
                                </tr>
                                <tr> 
                                    <td className = "stageonetd"> Sgvtttk bx Ssqvzp </td> 
                                    <td className = "stageonetd"> 
                                    <input
                                        name = "third"
                                        value = {this.props.vals.third}
                                        onChange = {this.handleAnyChange}
                                    />     
                                    </td> 
                                </tr>
                                <tr> 
                                    <td className = "stageonetd"> Qkfo zv tmmc </td> 
                                    <td className = "stageonetd"> 
                                    <input
                                        name = "fourth"
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
                            value = {this.state.first_guess}
                            onChange = {(event) => {this.setState({first_guess: event.target.value})}}
                            /> 
                            <input 
                                name = "second_guess"
                                value = {this.state.second_guess}
                                onChange = {(event) => {this.setState({second_guess: event.target.value})}}
                            /> 
                            <input
                                name = "third_guess"
                                value = {this.state.third_guess}
                                onChange = {(event) => {this.setState({third_guess: event.target.value})}}
                            />
                            <input
                                name = "fourth_guess"
                                value = {this.state.fourth_guess}
                                onChange = {(event) => {this.setState({fourth_guess: event.target.value})}}
                                />
                            {button1}
                        </div> 
                    </div> 
                )
        }
    }
}

export default Stageone;