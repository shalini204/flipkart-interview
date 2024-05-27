import React , {useState} from "react";
import styled from "styled-components";
import '../App.css';

const FlexComponent=styled.div`
    display: flex;
    justify-content: start;
    flex-direction: row;
    align-items: center;
    width: '300px';
`;
    



const ChatList = ({chats, setSelectedChat}) =>{
    const [filterVal,setFilterVal] = useState('');
    const filteredChat = chats.filter(chat=> chat.title.toLowerCase().includes(filterVal) || chat.orderId.toLowerCase().includes(filterVal));

    return(
        <div className="chat-list">
            <div style={{textAlign: 'left'}}>
            <h3> Filter By Title or Order Id</h3>
            <input type="text" value={filterVal} onChange={e=>setFilterVal(e.target.value)}/>
            </div>
            <ul style={{style: 'none'}}>
                {
                    filteredChat.map(chat => (
                        <li key={chat.id} onClick={()=>setSelectedChat(chat)}>
                            <div style={{width: 'fit-content'}}>
                            <FlexComponent >
                                <img src={chat.imageURL} alt={chat.title} height={'20px'} width={'20px'}/>
                                <div style={{marginLeft: "20px" , textAlign: 'left' , width:'200px'}} >
                                    <h5 style={{margin: 0}}>{chat.title}</h5>
                                    <h6 style={{margin: 0}}>Order {chat.orderId}</h6>
                                </div>
                                <div style={{marginLeft: "20px", textAlign: 'right'}}>
                                    <h6 style={{color: 'grey'}}>{new Date(chat.latestMessageTimestamp).toLocaleDateString()}</h6>
                                </div>
                                
                            </FlexComponent>
                            <hr style={{height: '1px', color: 'grey'}}/>
                            </div>
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}

export default ChatList;