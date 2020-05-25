import React from 'react';
import "./css/webpage.css";

function Webpage(props) {
    const paras = props.paragraphs.map(para => <p> {para} </p>);
    let title;
    if (props.title) { 
        title = <div class = "webtitle"> {props.title} </div>
    }
    return (
        <div class = "container">
            <div class = "row"> 
                <div class = "webpage"> 
                    <div class = "top"> 
                        <div class = "dots"> 
                            <span class = "dot red"> </span> 
                            <span class = "dot yellow"> </span> 
                            <span class = "dot green"> </span> 
                        </div>
                    </div> 
                    <div class = "webcontent"> 
                        {title}
                        {paras}
                    </div>
                </div> 
            </div> 
        </div>
    )

}

export default Webpage;