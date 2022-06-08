import React from "react";

import './greenbutton.css';

/**
 * A large green button with text.
 * @param {Function} func the function executed by the button's onClick attribute
 * @param {String} text the text to appear on the button 
 */
const GreenButton = ({ func, text }) => {
    return (
        <div className="green-button__border">
            <button className="green-button" onClick={func ? null : func} >{text}</button>
        </div>
    )
}

export default GreenButton