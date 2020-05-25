import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import Navigation from './components/Navigation';
import Password from "./components/password";
import Story from "./components/story";
import Stageone from "./components/stageone";
import Polygraph from "./components/polygraph";
import Suspects from "./components/suspects";
import Starting from "./components/starting";
import Killer from "./components/killer";
import Motive from "./components/motive";
import How from "./components/how";


if (!String.prototype.trim) {
    String.prototype.trim = function () {
      return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    };
  }

class App extends Component {
    constructor(props) { 
        super(props) 
        this.state = { 
            entered: false, 
            minutes: 60, 
            seconds: 0,
            success: null,
            stages: [false, false, false, false, false, false, false, false, false], 
            home: {
                accepted: false
            },
            password: { 
                who: "",
                why: "",
                how: "",
                name: "",
                tries: 12
            }, 
            stageone: { 
                first: "", 
                second: "", 
                third: "",
                fourth: "",
                first_guess: "",
                second_guess: "",
                third_guess: "",
                fourth_guess: "", 
                solved: false
            }, 
            suspects: {
                tries: 0,
                correct: false,
                first: "",
                second: ""
            },
            motive: { 
                correct: false,
                guesses: ["", "", "", "", ""]
            }
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
        temp_stages[2] = true;
        temp_stages[3] = true;
        var new_home = Object.assign({}, this.state.home);
        new_home.accepted = true;
        this.setState({
            stages: temp_stages,
            home: new_home    
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

    setsuccess = (arranum) => { 
        var temp_stages = this.state.stages.slice(); 
        for (var index = 0; index < arranum.length; index ++ ) {
            temp_stages[arranum[index]] = true;
        }
        this.setState({ 
            stages: temp_stages
        })
    }
    successfulmetric = (succ) => {
        this.setState({
            success: succ
        })
        clearInterval(this.myInterval);
    }
    validatekiller = (name) => { 
        if (name.toLowerCase().trim() === "arnav") { 
            this.setsuccess([7]);
        } else {
            this.setState({
                success: false
            })
        }
    }
    componentWillUnmount() {
        clearInterval(this.myInterval)
    }
    handlevalueChange = (stage, attribute, value) => { 
        var temp_new = this.state[stage];
        temp_new[attribute] = value;
        var obj = {};
        obj[stage] = temp_new
        this.setState(obj);
    }


    render() {
        if (!this.state.entered) { 
            return ( 
                <Button className = "enterB" variant = "primary" onClick = {this.enteredRoom} > Dare to Enter..?</Button>
            )
        }  else if (this.state.minutes === 0 && this.state.seconds === 0) { 
            return (
                <div class = "container"> 
                    <div class = "row topmargin"> 
                        <div class = "letter"> 
                            <h3> Sorry, you ran out of time! </h3>
                            
                            <p> P.S You can easily try again by just hard refreshing the page (Ctrl-Shift-R on Windows
                                or (Cmd-Shift-R on Mac).</p>
                        </div>
                    </div> 
                </div> 
            )   
        } else if (this.state.success === true) { 
            return (
                <div class = "container"> 
                    <div class = "row topmargin"> 
                        <div class = "letter"> 
                            <h3> Congrats! You have solved the puzzle! </h3> 

                            <p> We hope you guys enjoyed the puzzle! </p>

                            <p> It took you {60 - this.state.minutes - 1} minutes and {60 - this.state.seconds}  seconds. </p>
                        </div>
                    </div> 
                </div> 
            )    
        }else if (this.state.success === false) { 
            return (
                <div class = "container"> 
                    <div class = "row topmargin"> 
                        <div class = "letter"> 
                            <h3> Sorry, you ran out of guesses! </h3>
                            
                            <p> P.S You can easily try again by just hard refreshing the page (Ctrl-Shift-R on Windows
                                or (Cmd-Shift-R on Mac).</p>
                        </div>
                    </div> 
                </div>
            )   
        }else {
            return (
                <div class = "container">
                    <div class = "row topmargin"> 
                        <BrowserRouter>
                        <div class = "col-md-9"> 
                            <Switch>
                                <Route path="/" exact render ={(props) => <Home {...props} vals = {this.state.home} onclick = {this.acceptChallenge}/>}/> 
                                <Route path = "/story" render = {(props) => <Story {...props} active = {this.state.stages[0]} />}/>
                                <Route path = "/password" render = {(props) => <Password {...props} vals = {this.state.password} succmet = {this.successfulmetric} change = {this.handlevalueChange} active = {this.state.stages[1]}/>}/>     
                                <Route path = "/starting" render = {(props) => <Starting {...props} active = {this.state.stages[2]}/>}/> 
                                <Route path = "/todo" render = {(props) => <Stageone {...props} active = {this.state.stages[3]} solved = {this.setsuccess} vals = {this.state.stageone} change = {this.handlevalueChange}/>}/>
                                <Route path = "/suspects" render = {(props) => <Suspects {...props} vals = {this.state.suspects} active = {this.state.stages[4]} solved = {this.setsuccess} change = {this.handlevalueChange}/>}/> 
                                <Route path = "/polygraph" render = {(props) => <Polygraph {...props} active = {this.state.stages[5]} solved = {this.setsuccess}/>}/>
                                <Route path = "/killer" render = {(props) => <Killer {...props} active = {this.state.stages[6]} validate = {this.validatekiller}/>} />
                                <Route path = "/motive" render = {(props) => <Motive {...props} active = {this.state.stages[7]} solved = {this.setsuccess} vals = {this.state.motive} change = {this.handlevalueChange} />}/>
                                <Route path = "/how" render = {(props) => <How {...props} active = {this.state.stages[8]} />} />
                            </Switch>
                        </div> 
                        <div class = "col-md-3">
                            <div class = "timer"> 
                                <h1> {this.state.minutes} : {this.state.seconds < 10 ? `0${this.state.seconds}` : this.state.seconds} </h1> 
                            </div>
                            <Navigation active = {this.state.stages}/>
                        </div>
                        </BrowserRouter>
                    </div> 
                 
                </div>
              );
        }
    }
}




 
export default App;
