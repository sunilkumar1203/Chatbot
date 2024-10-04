import React from "react";
import "./../App.css";

function BotMessage(props) {
    
    return (
        <div  className="message-box">
            <p className="message">{props.value}</p>
        </div>
    );
}

export default BotMessage;
