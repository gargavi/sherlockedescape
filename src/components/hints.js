import React from 'react';
import {Accordion, Card, Button} from 'react-bootstrap';
import "./css/hints.css";

function Hint(props){ 
    const hinters = props.values.map((elem) => { 
        return (
            
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} className = "hinttitle" variant="link" eventKey={elem.num}>
                    {elem.title}
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={elem.num}>
                <Card.Body> {elem.body} </Card.Body>
                </Accordion.Collapse>
             </Card>
            
        )
    })
    let button1;
    if (props.num > 0) { 
        button1 = <Button className = "adder" onClick = {props.click}> Add Hints  </Button> ;
    } else { 
        button1 = <h1> No hints left </h1> 
    }

    return (
        <div class = "hints">
        {button1}
        <Accordion> 
            {hinters}
        </Accordion>
        </div>

    )
}

export default Hint;
