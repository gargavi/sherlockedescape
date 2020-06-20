import React, {Component} from 'react';


class Story extends Component { 
    constructor(props) { 
        super(props) 
        this.state = { 
            guessed_password: " "
        }
    }

    render () { 
        if (this.props.active) { 
            return ( 
                <div class = "row"> 
                    <div class = "letter" id = "storyletter"> 
                        <h3>  THE CASE? </h3> 

                        <p> We got a call late last night that a prominent researcher for an emerging vaccine 
                            was found at his desk dead. This virus has caused the entire world to come to a standstill and normally, Scotland Yard wouldn't have been
                            brought into such a case but the government is anxious to solve this 
                            case quickly and quietly. He was found by his wife, Karen , who recently tested positive for the virus, 
                            and has been remaining isolated in her bedroom for the past 8 days. She came to check on dinner
                            and found her husband.
                        </p> 

                        <p> Because of the virus and the government mandated social distancing, our policeman 
                            can't go to investigate the crime in person; our entire deduction has to be conducted 
                            remotely. We were able to grab information off of his computer, his emails, some details 
                            about his company, and some other miscellaenous stuff. We're hoping that you can help us piece it 
                            all together. You only have about an hour to do this before the company has to give a press conference, 
                            and we need it wrapped up by then.</p> 
                        <div class = "closing"> 
                            <p> Sincerely, </p> 
                            <p> Scotland Yard</p>
                        </div>
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

export default Story;
