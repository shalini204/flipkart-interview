import React , {useState} from "react";
import styled from "styled-components";
import '../App.css';

const ChatInput = ({onSendMessage}) =>{

    const [text, setText] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(text.trim()){
            onSendMessage(text);
            setText('');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
             <input type="text" value={text} onChange={e=>setText(e.target.value)}/>
             <button type="submit" > Send</button>
        </form>
    )
}

export default ChatInput;