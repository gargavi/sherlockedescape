import React, {Component} from 'react';
import {Button, Nav, Row, Col, Tab} from 'react-bootstrap';
import './css/suspects.css';
import Hint from "./hints";

class Suspects extends Component { 
    constructor(props) { 
        super(props)
        this.state = {
            first: "", 
            second: ""
        }
    }
    
    handleClick = () =>  { 
        if ((this.props.vals.first.toLowerCase().trim() === "hasan" && this.props.vals.second.toLowerCase().trim() === "morgan") ||(this.props.vals.first.toLowerCase().trim() === "morgan" && this.props.vals.second.toLowerCase().trim() === "hasan") ){
            this.props.solved([4, 5]);
            
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
            button1 =
            <div> 
                <Button className="suspectanswerbutt" onClick = {this.handleClick}>  Submit? </Button>
                <h5> You've taken {this.props.vals.tries} tries</h5>
            </div> ;
        }

        if (this.props.active ) { 
            const hinters = [
                {
                    num: "0", 
                    title: "Hint 1", 
                    body: "https://www.brainzilla.com/logic/zebra/einsteins-riddle/"}, 
                {
                    num: "1", 
                    title: "Hint 2: Additional Attribute ", 
                    body: "Hasan works at Zoom"},
                {
                    num: "2", 
                    title: "Hint 3: Additional Attribute ", 
                    body: "Morgan wears Dress pants"},
                {
                    num: "3", 
                    title: "Fina Hint: Full Solution",
                    body: "Hasan: Zoom, sweats, Sam: Amazon, Pajamas, Morgan: Google, Dress, Claire: Goldman, Plaid, Spencer: Gibson, Striped "
                }
            ].slice(0, this.props.vals.hints)
            const hints = <Hint
                values = {hinters}
                num = {this.props.hints}
                click = {() => {this.props.change("suspects", "hints", this.props.vals.hints + 1); this.props.change("hints", "hints", this.props.hints - 1)}}
            /> 
            return ( 
                <div className = "largest">
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
                            <Nav.Link eventKey="chart" className = "suspectlink"> Chart </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className = "suspectitem">
                            <Nav.Link eventKey="fourth" className = "suspectlink"> Claire  </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className = "suspectitem">
                            <Nav.Link eventKey="third" className = "suspectlink"> Morgan  </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className = "suspectitem">
                            <Nav.Link eventKey="second" className = "suspectlink"> Samantha </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className = "suspectitem">
                            <Nav.Link eventKey="fifth" className = "suspectlink"> Spencer  </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className = "suspectitem">
                            <Nav.Link eventKey="first" className = "suspectlink"> Hasan </Nav.Link>
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
                                name = "Hasan"
                                alibi = "I was out of town on vacation for the entirety of last night. I was driving up to a beach resort up North and got stuck in traffic on the way back."
                                relationship = "I'm a high school friend with Andrew. We've actually been best friends since we were 7 and I still can't believe anyone would do this."
                                wardrobe = {["Hawaiian Shirt", "No striped or dress pants", "Rolex Watch (fake)"]} 
                                /> 
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                                <SuspectProfile 
                                    name = "Samantha"
                                    alibi = "I've been stuck indoors since I broke my leg ice-skating. I haven't been able to go to the hospital because I can't drive the car!"
                                    relationship = "I went to high school with Andrew and Hasan. They were both so annoying when it came to any classes they had together."
                                    wardrobe = {["45 unique scrunchies", "No dress pants", "Gucci belt"]} 
                                /> 
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                                <SuspectProfile 
                                    name = "Morgan"
                                    alibi = "Taking my dog for a walk at the nearby park, Generic Park. He's a big golden retriever, real friendly!"
                                    relationship = "I'm a close work friend of his wife."
                                    wardrobe = {["A really cool cowboy hat", "No striped or pajama pants", "flip flops"]} 
                                /> 
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth">
                                <SuspectProfile 
                                    name = "Claire"
                                    alibi = "I was helping my sister move out of college at Cal (Go Bears) all of yesterday. I just got back today from the airport, and I've just been napping the whole day."
                                    relationship = "I've been helping Andrew with some finance stuff. I got a degree from NYU Stern in business and he saw it on Linkedin and asked about it."
                                    wardrobe = {["Business Blazer", "No striped, dress or sweat pants", "A grey ski mask"]} 
                                /> 
                        </Tab.Pane>
                        <Tab.Pane eventKey="fifth">
                                <SuspectProfile 
                                    name = "Spencer"
                                    alibi = "I was working on my garden for the entire evening. I had a really tough time trying to reach the top branches of my orange tree."
                                    relationship = "I'm his neighbor, have been for about 2 years. He said he wanted to ask about some advice."
                                    wardrobe = {["Some dope glasses", "No sweats or pajamas", "A weird scarf"]} 
                                /> 
                        </Tab.Pane>
                        <Tab.Pane eventKey="general">
                                <div class = "generalinfo"> 
                                    <p> 
                                        Unfortunately, due to our system errors, we were unable to get all 
                                        the information from the suspects you identified. We also pulled some information on Spencer, their neighbor 
                                        who Karen said has just recently been talking to Andrew. What information we did 
                                        manage to get is displayed in the tabs above. We also were able to get information 
                                        from other sources about where some of these people worked shown below. Finally, we know that they each work at one of the 5 companies:
                                        <b> Goldman, Gibson Law, Google, Amazon or Zoom, </b> which each have separate mandatory dress codes.
                                    </p>
                                    <li> Claire doesn't work at Amazon. </li>
                                    <li> The person who works at Amazon wears pajamas.</li>
                                    <li> Neither Hasan or Claire works at Gibson. </li>
                                    <li> If Spencer is wearing stripes he works at Gibson. </li> 
                                    <li> Whoever works at Google owns either dress or stripe pants. </li> 
                                    <li> If Hasan works at Amazon, then Morgan is wearing dress pants.</li> 
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
                                            <th> Hasan </th>
                                            <th> Claire </th> 
                                            <th> Spencer </th> 
                                            <th> Sam </th>
                                            <th> Morgan </th>
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
                                <label> Suspect 1: </label>  <input type = "text" name = "first" value = {this.props.vals.first} onChange = {(event) => {this.props.change("suspects", "first", event.target.value)}}/> 
                                
                                <label> Suspect 2: </label>  <input type = "text" name = "second" value = {this.props.vals.second} onChange = {(event) => {this.props.change("suspects", "second", event.target.value)}} /> 
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
                {hints}
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