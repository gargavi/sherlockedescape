import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Password from "./components/password";
import Story from "./components/story"
class App extends Component {
    constructor(props) { 
        super(props) 
        this.state = { 
            entered: false, 
            minutes: 15, 
            seconds: 0, 
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

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }
    render() {
        if (!this.state.entered) { 
            return ( 
                <Button className = "enterB" variant = "primary" onClick = {this.enteredRoom} > Dare to Enter..?</Button>
            )
        }  else if (minutes == 0 && seconds == 0) { 
            return ( 
                <h1> Failure! </h1> 
            )
        
        } else {
            return (
                <div class = "container">
                    <div class = "row topmargin"> 
                        <BrowserRouter>
                        <div class = "col-md-9"> 
                            <Switch>
                                <Route path="/" exact> <Home onclick = {this.acceptChallenge} /> </Route>
                                <Route path = "/password" component = {Password} /> 
                                <Route path = "/story" component = {Story} />
                            </Switch>
                        </div> 
                        <div class = "col-md-3">
                            <div class = "timer"> 
                                <h1> {this.state.minutes} : {this.state.seconds < 10 ? `0${this.state.seconds}` : this.state.seconds} </h1> 
                            </div>
                            <Navigation />
                        </div>
                        </BrowserRouter>
                    </div> 
                 
                </div>
              );
        }
    }
}
 
export default App;
