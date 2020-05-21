import React, {Component} from 'react';
import "./story.css"

class Story extends Component { 
    constructor(props) { 
        super(props) 
        this.state = { 
            guessed_password: " "
        }
    }

    render () { 
        return ( 
            <div class = "letter" id = "storyletter"> 
                <h3>  THE CASE? </h3> 

                <p> We got a call, late last night, that a prominent researcher for an emerging forerunner 
                    of a COVID-19 vaccine was found at this desk dead. Normally, Scotland Yard wouldn't have been
                    brought into such a case unless it was important, and the government is anxious to solve this 
                    case quickly and quietly. He was found by his wife, who recently tested positive for the virus, 
                    and has been remaining isolated in her bedroom for the past 8 days. She came to check in for dinner
                    and found her husband at his desk. 
                    </p> 

                <p> Because of the virus and the government mandated social distancing, our policeman 
                    can't go to investigate the crime in person; our entire deduction has to be conducted 
                    remotely. We were able to grab information off of his computer, his social media, some details 
                    about his company, and some other miscellaenous stuff. We're hoping that you can help us piece it 
                    all together. You only have an hour to do this before the company has to give a press conference, 
                    and we need it wrapped up by then. You can find a return letter on the next page.  </p> 
                <div class = "closing"> 
                    <p> Sincerely, </p> 
                    <p> Scotland Yard</p>
                </div>
                
            
            </div>
        )
    }


}

export default Story;
