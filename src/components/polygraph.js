import React, {Component} from 'react';
import {Accordion, Card, Button} from 'react-bootstrap';
import emails from "./data/emails.json";
import "./css/polygraph.css";
class Polygraph extends Component { 
    constructor(props) { 
        super(props) 
    }
    renderWeb = (previous) => { 
        var email = Object.assign({}, previous);
        const closing = email.closer.map(elem => <p> {elem} </p> );
        const paras = email.paragraphs.map(para => <p> {para} </p>);
        return (
            <Card>
                <Card.Header className = "emailhead" >
                    <Accordion.Toggle as={Button} className = "emailtitle" variant="link" eventKey= {email.number}> SUBJECT: {email.title}</Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={email.number}>
                    <Card.Body> 
                        <div class = "email">
                            <h5> From: {email.from} </h5> 
                            <h5> To: {email.to} </h5>

                            {paras}

                            <div class = "closing">
                                {closing}
                            </div>
                        </div>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        )
    }
    render() {
        const email_web = emails.map(email => this.renderWeb(email));
        if (this.props.active) { 
            return ( 
                <div class = "inbox"> 
                <Accordion defaultActiveKey="1">
                    <Card> 
                        <Card.Header style = {{backgroundColor: "white", borderStyle: "solid", borderColor: "black", borderWidth: "3px"}}>
                            <h2 style = {{color: "rgb(85, 7, 7)"}}> Andrew's Inbox </h2> 
                        </Card.Header>
                    </Card> 
                    {email_web}
                </Accordion>
                </div> 
            )
        } else { 
            return ( 
                <div class = "reject"> 
                        <h3> You must first pass the earlier stages! </h3>
                </div> 
            )
        }

        
    }

}
export default Polygraph;

