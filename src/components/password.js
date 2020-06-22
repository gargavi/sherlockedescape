import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';

class Password extends Component { 
    
    handleAnyChange = (event) => { 
        this.props.change("password", event.target.name, event.target.value);
    }

    submitAnswer = () => { 
        if (this.props.vals.who.toLocaleLowerCase().trim() === "jerry" && this.props.vals.how.toLocaleLowerCase().trim() === "nausea" && this.props.vals.why.toLocaleLowerCase().trim() === "money") { 
            this.props.solved([9]);
            this.props.change("password", "solved", true);
            
        } else {
            if (this.props.vals.tries === 1) { 
                this.props.succmet(false);
            }
            this.props.change("password", "tries", this.props.vals.tries - 1);
        }
    }
    
    
    render () { 
        if (this.props.active) { 
            
            let button1;
            if (this.props.vals.solved) { 
                button1 = <h4> Solved! </h4> 
            } else { 
                button1 = <Button type = "submit" id = "submitanswer" onClick = {this.submitAnswer}> Submit </Button>;

            }

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

                    <select name={"how"} value = {this.props.vals.how} onChange = {this.handleAnyChange}> 
                        <option value = "">  </option>
                        <option value = "Diarrhea"> Diarrhea </option> 
                        <option value = "Cholesteroal"> High Cholesterol </option> 
                        <option value = "Nausea"> Nausea </option> 
                        <option value = "Viagra"> Viagra </option> 
                        <option value = "Heart"> Heart Disease PRevention </option> 
                        
                    </select> 

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
                        {button1}
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
