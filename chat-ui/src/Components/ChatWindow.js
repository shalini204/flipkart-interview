import React , {useEffect, useState} from "react";
import Message from './Message';
import ChatInput from './ChatInput';
import styled from "styled-components";
import '../App.css';

const FlexComponent=styled.div`
    display: flex;
    justify-content: start;
    flex-direction: row;
    align-items: center;
    width: '300px';
`;
    
const ChatWindow = ({chat}) => {
    const [messages, setMessages] = useState(chat.messageList);
    console.log(chat);
    console.log(messages);
    useEffect(()=>{
        setMessages(chat.messageList)
    }, [chat]);

    const handleSendMessage = (text)=>{
        const newMessage = {
            messageId:Date.now(),
            message: text,
            timestamp: Date.now(),
            sender: "USER",     
            messageType: "text"
        }
        setMessages([...messages, newMessage]);
    }

    return(
        <div className="chat-window">
            <ul>
                {messages.map(message=> (
                    <Message key={message.id} message={message}/>
                ))}
            </ul>
            <ChatInput onSendMessage={handleSendMessage}/>

        </div>
    )
}

export default ChatWindow ;