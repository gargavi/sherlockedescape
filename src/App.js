import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import Navigation from './components/Navigation';
import Password from "./components/password";
import Story from "./components/story";
import Stageone from "./components/stageone";

class App extends Component {
    constructor(props) { 
        super(props) 
        this.state = { 
            entered: false, 
            minutes: 60, 
            seconds: 0,
            success: null,
            stages: [false, false, false, false]
        }
    }
    enteredRoom = () => { 
        this.setState({ 
            entered: true
        })
    }
    acceptChallenge = () => {
        var temp_stages = this.state.stages.slice(); 
        temp_stages[0] = true;
        temp_stages[1] = true;
        this.setState({
            stages: temp_stages
        })
        if (!this.state.stages[0]) { 
            this.myInterval = setInterval(() => {
                const { seconds, minutes } = this.state

                if (seconds > 0) {
                    this.setState(({ seconds }) => ({
                        seconds: seconds - 1
                    }))
                }
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(this.myInterval)
                    } else {
                        this.setState(({ minutes }) => ({
                            minutes: minutes - 1,
                            seconds: 59
                        }))
                    }
                } 
            }, 1000)
        }
    }

    successfulmetric = (succ) => {
        this.setState({
            success: succ
        })
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }
    render() {
        if (!this.state.entered) { 
            return ( 
                <Button className = "enterB" variant = "primary" onClick = {this.enteredRoom} > Dare to Enter..?</Button>
            )
        }  else if (this.state.minutes == 0 && this.state.seconds == 0) { 
            return (
                <div class = "letter"> 
                    <h3> Sorry! </h3>
                    
                    <p> You can easily try again by just hard refreshing the page (Ctrl-Shift-R on Windows
                        or (Cmd-Shift-R on Mac).</p>
                </div>
            )   
        } else if (this.state.success == true) { 
            return (
                <div class = "letter"> 
                    <h3> Congrats! You have solved the puzzle! </h3> 

                    <p> We hope you guys enjoyed the puzzle! </p>
                </div>
            )    
        }else if (this.state.success == false) { 
            return (
                <div class = "letter"> 
                    <h3> Sorry! </h3>
                    
                    <p> You can easily try again by just hard refreshing the page (Ctrl-Shift-R on Windows
                        or (Cmd-Shift-R on Mac).</p>
                </div>
            )   
        }else {
            return (
                <div class = "container">
                    <div class = "row topmargin"> 
                        <BrowserRouter>
                        <div class = "col-md-9"> 
                            <Switch>
                                <Route path="/" exact> <Home onclick = {this.acceptChallenge} /> </Route>
                                <Route path = "/story"> <Story active = {this.state.stages[0]} /> </Route> 
                                <Route path = "/password" > <Password succmet = {this.successfulmetric} active = {this.state.stages[1]}/> </Route>  
                                <Route path = "/starting" > <Stageone active = {this.state.stages[2]}/> </Route>
                            </Switch>
                        </div> 
                        <div class = "col-md-3">
                            <div class = "timer"> 
                                <h1> {this.state.minutes} : {this.state.seconds < 10 ? `0${this.state.seconds}` : this.state.seconds} </h1> 
                            </div>
                            <Navigation/>
                        </div>
                        </BrowserRouter>
                    </div> 
                 
                </div>
              );
        }
    }
}
 
export default App;
