import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Report from './photos/report.png';
import './css/starting.css';

const Starting = (props) => { 
    if (props.active) { 
        return ( 
            <Row> 
                <Col md = {8}> 
                    <div class = "autopsy" style = {{backgroundImage: `url(${Report})`}}> 
                        <h3> Office of the Medical Examiner </h3> 
                        <h5> County of Fauci, CA </h5>
                        <Row> 
                            <table> 
                            <tbody> 
                                <tr> 
                                    <td style = {{paddingLeft: "25%"}}> <b> Name:</b> </td> 
                                    <td> Professor Andrew Garg </td>         
                                </tr> 
                                <tr> 
                                    <td  style = {{paddingLeft: "25%"}}> <b> Age: </b> </td> 
                                    <td> 47 years old</td> 
                                </tr>
                                <tr> 
                                    <td  style = {{paddingLeft: "25%"}}> <b> C.O.D: </b> </td> 
                                    <td> Poison? </td> 
                                </tr>
                                <tr> 
                                    <td  style = {{paddingLeft: "25%"}}> <b> Health: </b> </td> 
                                    <td> 
                                        <li> Type 1 Diabetes </li> 
                                        <li> Replaced Knee </li> 
                                        <li> Type 2 Diabetes </li> 
                                        <li> Early Balding </li>
                                        <li> High Blood Pressue </li> 
                                    </td> 
                                </tr> 
                            </tbody> 
                            </table> 
                            
                        </Row> 
                    </div> 
                </Col> 
                <Col md = {4}> 
                    <div className = "postit"> 
                        <p> 
                            The order of hints are preset, so they will start with most basic to
                            complete solutions, so a complete solution will "cost you" more. Clues 
                            can be anywhere, even on other pages.
                        </p>
                    </div>
                    <div className = "postit"> 
                        <p> The wife said that she saw someone with either 
                            dress or sweat pants running away moments after 
                            finding her husband.</p> 
                    </div>
                </Col>
            </Row>             
        )
    } else { 
        return (
            <div class = "reject"> 
                    <h3> You must first accept the challenge! </h3>
            </div> 
        )
    }
}

export default Starting;