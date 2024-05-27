import React , {useState} from "react";
import '../App.css';
const Message = ({message})=>{
    const messageClass = message.sender === 'BOT'? 'bot-message': 'user-message';

    

    return(
        <li className={`message ${messageClass}`}>
            {message.messageType === 'text' ? (
                <p>{message.message}</p>
            ) : (
                <div>
                    <p>{message.message}</p>
                    {message?.options?.map((option, index)=>(
                        <button key={index}>{option.optionText}</button>
                    ))}
                </div>
            )}
            <span>{new Date(message.timestamp).toLocaleDateString()}</span>
        </li>
    )
}

export default Message;