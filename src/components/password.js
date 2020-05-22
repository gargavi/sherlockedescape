import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';

class Password extends Component { 
    constructor(props) { 
        super(props) 
        this.state = { 
            who_guess: " ",
            why_guess: " ", 
            how_guess: " ",
            name: " ", 
            correct: false,
            tries: 12
        }
    }
    handleWho = (event) => { 
        var temp_who = event.target.value;
        this.setState({ 
            who_guess: temp_who
        })
    }
    handleWhy = (event) => { 
        var temp_why = event.target.value;
        this.setState({ 
            why_guess: temp_why
        })
    }
    handleHow = (event) => { 
        var temp_how = event.target.value;
        this.setState({
            how_guess: temp_how
        })

    }
    handleName = (event) => { 
        var temp_name = event.target.value; 
        this.setState({
            name: temp_name
        })
    }

    submitAnswer = () => { 
        if (this.state.who_guess.toLocaleLowerCase() == "mooz" && this.state.how_guess.toLocaleLowerCase() == "poison" && this.state.why_guess.toLocaleLowerCase() == "revenge") { 
            this.props.succmet(true);
            this.setState({ 
                correct: true
            })
        } else {
            if (this.state.tries == 1) { 
                this.props.succmet(false);
            }
            this.setState({ 
                tries: this.state.tries - 1
            })
        }
    }
    
    
    render () { 
        if (this.props.active) { 
            return ( 
                <div class = "letter" id = "passwordletter"> 
                    <h3> We know who done it!  </h3> 
                
                    <h4> Who? </h4> 
                    <input 
                        name = "who"
                        value = {this.state.who_guess}
                        onChange = {this.handleWho}
                    />
                    
                    <h4> Why? </h4> 
                    <input 
                        name = "why"
                        value = {this.state.why_guess}
                        onChange = {this.handleWhy}
                    />
                    
                    <h4> How? </h4> 
                    <input 
                        name = "how"
                        value = {this.state.how_guess}
                        onChange = {this.handleHow}
                    />

                    <div class = "closing"> 
                        <p> Sincerely, </p>  
                        <input
                            id = "namesig"
                            name = "name"
                            value = {this.state.name}
                            onChange = {this.handleName}
                        /> 
                    </div> 
                    <div id = "remaining"> 
                        <p> You have {this.state.tries} tries remaining. </p> 
                        <Button type = "submit" id = "submitanswer" onClick = {this.submitAnswer}> Submit </Button>

                    </div> 
                  
                </div> 
                
            )
        } else { 
            return (
                <div class = "reject"> 
                        <h3> You must first accept the challenge! </h3>
                </div> 
            )
        }
    }


}

export default Password;
