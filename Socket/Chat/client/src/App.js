import React,{useEffect,useState} from 'react';
import './App.css';
import io from 'socket.io-client';
import Chat from './components/Chat';

function App() {
  const [name, setName] = useState("");
  const [socket] = useState(()=> io(":8000"));
  const [input,setInput]=useState("");
  const [messages,setMaessages]=useState([]);
    useEffect(()=>{
        
      socket.on('Welcome', data => console.log(data));
      // socket.on('updatingMessages', data=>setMaessages(oldMessages => [...oldMessages].concat(data)))
      socket.on('joined', data=>console.log(data))//must obey a specific order
      socket.on('sent', data=>console.log(data));
      socket.on('updatingMessages', data=>setMaessages(data))//all is stored in data
      
      return () => socket.disconnect(true);
    },[socket])//we knew socket was missing here after checking the console
  const sendToServer=e=>{ 
    e.preventDefault();
    socket.emit("addToChat",`${name} says: ${input}`);
    setInput("");
  }
    return (

    <div className="App">
      <header className="App-header">
      <h2>MERN Chat</h2>
      </header>
     <form onSubmit={sendToServer}>
      <label>Name</label>
     <input 
      type ="text"
      value={name}
      onChange={(e)=> setName(e.target.value)} />

<label>Send a message</label>
     <input 
      type ="text"
      value={input}
      onChange={(e)=> setInput(e.target.value)} />
        <input type="submit" value="send"/>
        
     </form>
     <ul>
       {
         messages.map((msg,Idx2)=><li key="Idx2">{msg}</li> )
       }
     </ul>
      <Chat />
    </div>
  );
}

export default App;
