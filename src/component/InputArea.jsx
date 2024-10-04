import React from "react";
import "./../App.css";

function InputArea(props){
    const [text,setText] = React.useState("");

    function handleChange(event){
           let value= event.target.value;
           setText(value);
           
    }
    return <div className="form"> 
            <textarea onChange={handleChange} className="input" value ={text} placeholder="Type your message here..." />
            <button onClick={()=>{
                props.addOn(text)
                setText("");
            }} className="send-button">Send</button>
    </div>
}

export default InputArea;