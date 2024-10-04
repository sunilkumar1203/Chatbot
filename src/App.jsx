import React ,{useEffect, useState} from "react";
import "./App.css";
import Header from "./component/Header";
import BotMessage from "./component/BotMessage";
import UserMessage from "./component/UserMessage";
import InputArea from "./component/InputArea";
import BotRandomMessage from "./RandomMessage";

function App() {
    const [message,setMessage] = useState([{type : "bot", message : BotRandomMessage[0]}]);
    const [count,setCount] = useState(1);
    function addMessage(text) {
        setMessage((prevMessages) => {
            const newmessage = [
                ...prevMessages, 
                { type: "user", message: text }
            ];

            if (count < BotRandomMessage.length) {
                setTimeout(() => {
                newmessage.push({ type: "bot", message: BotRandomMessage[count] });
                setCount(count+1);h
                
                }, 1000);
            }
                
            
            return newmessage;
        });
    
    }
    
    function deleteMessage(limit) {
        setMessage(message.filter((text, idx) => idx < limit));
    }
    
    
    return (   
        <div className="app-container">
            <Header />
            <div className="chat-container">
                
                 {message.map((value,idx)=>{
                       if (value.type ==="user"){
                       return  <UserMessage del={()=>{deleteMessage(idx)}} key={idx} usertext={value.message} /> 
                       }       
                       else if(value.type ==="bot"){
                        return <BotMessage key={idx} value={value.message} /> 
                        
                       } 
                       
                 })
                 }
                
            </div>
            <InputArea addOn={addMessage}/>
        </div>
    );
}

export default App;
