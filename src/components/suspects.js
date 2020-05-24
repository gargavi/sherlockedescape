import React, {Component} from 'react';
import {Button, Nav, Row, Col, Tab} from 'react-bootstrap';
import './css/suspects.css';


class Suspects extends Component { 
    constructor(props) { 
        super(props)
        this.state = {
            first: "", 
            second: ""
        }
    }
    
    handleClick = () =>  { 
        if ((this.state.first.toLowerCase() === "arnav" && this.state.second.toLowerCase() === "ibis") ||(this.state.first.toLowerCase() === "ibis" && this.state.second.toLowerCase() === "arnav") ){
            this.props.solved([5, 6]);
            
            this.props.change("suspects", "correct", true);
        } else {
            this.props.change("suspects", "tries", this.props.vals.tries + 1)
            this.setState({ 
                first: "",
                second: ""
            })
        }
    }
    render() { 
        const companies = ["Amazon", "Goldman", "Google", "Gibson", "Zoom"].map(elem => {return(
            <tr> 
                <td className = "tabletitlesuspect"> <b> {elem} </b> </td>
                <td> <input /> </td> 
                <td> <input/> </td>
                <td> <input/> </td> 
                <td> <input /> </td>
                <td> <input/> </td>
            </tr>
            )}
        
        )
        const pants = ["Plaid", "Stripes", "Pajamas", "Sweats", "Dress"].map(elem => { return (
            <tr> 
                <td> <b> {elem} </b> </td>
                <td> <input /> </td> 
                <td> <input/> </td>
                <td> <input/> </td> 
                <td> <input /> </td>
                <td> <input/> </td>
            </tr>
        )})
        let button1;
        if (this.props.vals.correct) { 
            button1 = <h5>  Solved! </h5>;
        } else { 
            button1 = <Button className="suspectanswerbutt" onClick = {this.handleClick}>  Submit? </Button>;
        }

        if (this.props.active ) { 
            return ( 
                <div class = "suspectinfo">
                    <h4> Suspect Information </h4>  
                    <Tab.Container className = "container" defaultActiveKey="general">
                    <Row>
                    <Col sm={3}>
                        <Nav variant="tabs" className="flex-column">
                        <Nav.Item className = "suspectitem">
                            <Nav.Link eventKey="general" className = "suspectlink"> General Info </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className = "suspectitem">
                            <Nav.Link eventKey="first" className = "suspectlink"> Arnav </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className = "suspectitem">
                            <Nav.Link eventKey="fourth" className = "suspectlink"> Sheila </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className = "suspectitem">
                            <Nav.Link eventKey="fifth" className = "suspectlink"> Paul </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className = "suspectitem">
                            <Nav.Link eventKey="second" className = "suspectlink"> Samantha </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className = "suspectitem">
                            <Nav.Link eventKey="third" className = "suspectlink"> Ibis </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className = "suspectitem">
                            <Nav.Link eventKey="chart" className = "suspectlink"> Chart </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className = "suspectitem">
                            <Nav.Link eventKey="answer" className = "suspectlink"> Answer: </Nav.Link>
                        </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                        <Tab.Pane eventKey="first">
                                <SuspectProfile 
                                name = "Arnav"
                                alibi = "I was out of town on vacation for the entirety of last night. I was driving up to a beach resort and got stuck in traffic on the way back."
                                relationship = "I'm a high school friend with Andrew. We've actually been best friends since we were 7 and I still can't believe anyone would do this."
                                wardrobe = {["Hawaiian Shirt", "No striped or dress pants", "Rolex Watch (fake)"]} 
                                /> 
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                                <SuspectProfile 
                                    name = "Samantha"
                                    alibi = "I've been stuck indoors since I broke my leg ice-skating. I haven't been able to go to the hospital because I can't drive the car!"
                                    relationship = "I went to high school with Andrew and Arnav. They were both so annoying when it came to any classes they had together."
                                    wardrobe = {["45 unique scrunchies", "No dress pants", "Gucci belt"]} 
                                /> 
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                                <SuspectProfile 
                                    name = "Ibis"
                                    alibi = "Taking my dog for a walk at the nearby park, Generic Park. He's a big golden retriever, real friendly!"
                                    relationship = "I'm a close work friend of his wife."
                                    wardrobe = {["A really cool cowboy hat", "No striped or pajama pants", "flip flops"]} 
                                /> 
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth">
                                <SuspectProfile 
                                    name = "Sheila"
                                    alibi = "I was helping my sister move out of college at Cal (Go Bears) all of yesterday. I just got back today from the airport, and I've just been napping the whole day."
                                    relationship = "I've been helping Andrew with some finance stuff. I got a degree from NYU Stern in business and he saw it on Linkedin and asked about it."
                                    wardrobe = {["Business Blazer", "No striped, dress or sweat pants", "A grey ski mask"]} 
                                /> 
                        </Tab.Pane>
                        <Tab.Pane eventKey="fifth">
                                <SuspectProfile 
                                    name = "Paul"
                                    alibi = "I was working on my garden for the entire evening. I had a really tough time trying to reach the top branches of my orange tree."
                                    relationship = "I'm his neighbor, have been for about 2 years. He said he wanted to ask about some advice."
                                    wardrobe = {["Some dope glasses", "No sweats or pajamas", "A weird scarf"]} 
                                /> 
                        </Tab.Pane>
                        <Tab.Pane eventKey="general">
                                <div class = "generalinfo"> 
                                    <p> 
                                        Unfortunately, due to our system errors, we were unable to get all 
                                        the information from the suspects you identified. What information we did 
                                        manage to get is displayed In the tabs above. We also were able to get information 
                                        from other sources about where some of these people worked. Finally, we know that they each work at one of the 5 companies:
                                        <b> Goldman, Gibson Law, Google, Amazon or Zoom, </b> which each have separate mandatory dresss codes.
                                    </p>
                                    <li> Sheila doesn't work at Amazon. </li>
                                    <li> The person who works at Amazon wears pajamas.</li>
                                    <li> Neither Arnav or Sheila works at Gibson. </li>
                                    <li> If Paul is wearing stripes he works at Gibson. </li> 
                                    <li> Whoever works at Google owns either dress or stripe pants. </li> 
                                    <li> If Arnav works at Amazon, then Ibis is wearing dress pants.</li> 
                                    <li> Sam doesn't work at Zoom. </li> 
                                    <li> The Zoom employee was wearing sweats. </li> 
                                </div> 
                        </Tab.Pane>
                        <Tab.Pane eventKey = "chart"> 
                            <div className = "charter">
                                <h5> Not required to complete, just an aid.</h5>
                                <table > 
                                    <thead> 
                                        <tr>
                                            <th> -- </th>
                                            <th> Arnav </th>
                                            <th> Sheila </th> 
                                            <th> Paul </th> 
                                            <th> Sam </th>
                                            <th> Ibis </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {companies}
                                        <tr> 
                                            <td> </td>
                                            <td> </td>
                                            <td> </td>
                                            <td> </td>
                                            <td> </td>
                                            <td> </td>
                                        </tr>
                                        {pants}
                                    </tbody> 
                                </table> 
                            </div> 
                        </Tab.Pane>
                        <Tab.Pane eventKey = "answer">
                            <div className = "putanswer"> 
                                <label> Suspect 1: </label>  <input type = "text" onBlur = {(event) => {this.setState({first: event.target.value})}}/> 
                                
                                <label> Suspect 2: </label>  <input type = "text" onBlur = {(event) => {this.setState({second: event.target.value})}} /> 
                                <div> 
                                {button1}
                                </div> 
                            </div>  
                        </Tab.Pane>
                        </Tab.Content>
                    </Col>
                    </Row>
                </Tab.Container>
            </div> 
            )
        } else { 
            return (
                <div class = "reject"> 
                        <h3> You must first pass the previous stages! </h3>
                </div> 
            )
        }
    }

}

function SuspectProfile(props){ 
    const wardro = props.wardrobe.map(elem => <li>{elem} </li> )
    return ( 
        <div className = "suspectprofile"> 
        <h3> {props.name} </h3>
            <table>
                <tbody> 
                    <tr> 
                        <td className = "suspectprofilelabel">  Alibi:  </td> 
                        <td> {props.alibi} </td>
                    </tr> 
                    <tr>
                        <td className = "suspectprofilelabel"> Relationship: </td>
                        <td> {props.relationship}</td>
                    </tr>
                    <tr> 
                        <td className = "suspectprofilelabel"> Wardrobe: </td>
                        <td> {wardro} </td> 
                    </tr>
                    <tr> 
                        <td className = "suspectprofilelabel"> Company: </td>
                        <td> <b> ????? </b>  </td> 
                    </tr>
                </tbody>       
            </table>
        
        </div>
    )
}


export default Suspects;