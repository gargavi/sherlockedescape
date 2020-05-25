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

    return (
        <div class = "hints">
        <Accordion> 
            {hinters}
        </Accordion>
        </div>

    )
}

export default Hint;
