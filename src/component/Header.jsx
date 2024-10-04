import React from "react";
import "./../App.css";

function Header() {
    return (
        <div className="navbar">
            <img 
                src="https://i.pinimg.com/564x/8a/8a/5e/8a8a5ee572879e28915233bb31cbc885.jpg" 
                alt="chatBotImg" 
                className="chatBotImg" 
            />
            <h1 className="navbar-title">Chatbot</h1>
        </div>
    );
}

export default Header;
