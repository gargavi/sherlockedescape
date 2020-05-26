import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';

class Password extends Component { 
    
    handleAnyChange = (event) => { 
        this.props.change("password", event.target.name, event.target.value);
    }

    submitAnswer = () => { 
        if (this.props.vals.who.toLocaleLowerCase().trim() === "arnav" && this.props.vals.how.toLocaleLowerCase().trim() === "7" && this.props.vals.why.toLocaleLowerCase().trim() === "money") { 
            this.props.solved([9]);
            
        } else {
            if (this.props.vals.tries === 1) { 
                this.props.succmet(false);
            }
            this.props.change("password", "tries", this.props.vals.tries - 1);
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
                        type = "text"
                        value = {this.props.vals.who}
                        onChange = {this.handleAnyChange}
                    />
                    
                    <h4> Why? </h4> 
                    <input 
                        name = "why"
                        type = "text"
                        value = {this.props.vals.why}
                        onChange = {this.handleAnyChange}
                    />
                    
                    <h4> How? </h4> 
                    <input 
                        name = "how"
                        type = "text"
                        maxLength = "2"
                        value = {this.props.vals.how}
                        onChange = {this.handleAnyChange}
                    />

                    <div class = "closing"> 
                        <p> Sincerely, </p>  
                        <input
                            id = "namesig"
                            name = "name"
                            type = "text"
                            value = {this.props.vals.name}
                            onChange = {this.handleAnyChange}
                        /> 
                    </div> 
                    <div id = "remaining"> 
                        <p> You have {this.props.vals.tries} tries remaining. </p> 
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
