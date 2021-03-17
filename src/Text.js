import React from "react";
import './Gif.scss';
import scott from './img/scott.png';

function Text() {

    return (
        <div className="text">
            <h2>You think your day couldn't get better?</h2>
            <p>Well, have you seen your gif of the day?</p>
            <p>Was it a gif from The Office?</p>
            <p>Exactly!</p>
            <p><strong>Click the button to get your office gif of the day</strong></p>
            <img src={scott}></img>
        </div>
    );
}

export default Text;