
import axios from 'axios';
import ChatList from './Components/ChatList';
import ChatWindow from './Components/ChatWindow';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  useEffect(()=>{
    axios.get('https://my-json-server.typicode.com/codebuds-fk/chat/chats')
    .then(response => {setChats(response.data); console.log(response.data)})
    .catch(err=> console.log(err));
  },[])
  return (
    <div className="app">
      <div>
        hello
      </div>
      <ChatList chats={chats} setSelectedChat={setSelectedChat}/>
      {selectedChat && <ChatWindow chat={selectedChat}/>}
    </div>
  );
}

export default App;
