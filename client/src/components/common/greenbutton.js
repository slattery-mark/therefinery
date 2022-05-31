import React from "react";
import './greenbutton.css';

const GreenButton = ({ text }) => {
    return (
        <div className="green-button__border">
            <button className="green-button">{text}</button>
        </div>
    )
}

export default GreenButton