import React from 'react';
import "./css/webpage.css";

function Webpage(props) {
    const paras = props.paragraphs.map(para => <p> {para} </p>);

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
                        {paras}
                    </div>
                </div> 
            </div> 
        </div>
    )

}

export default Webpage;