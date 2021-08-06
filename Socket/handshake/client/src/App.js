import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './App.css';
//import Chat from './components/Chat'
 
function App() {
  const [value, setValue]=useState("");
  const [value2, setValue2]=useState("");
  const [socket] = useState(() => io(':8000'));
  // notice that we pass a callback function to initialize the socket
  // we don't need to destructure the 'setSocket' function since we won't be updating the socket state
  useEffect(() => {
    // we need to set up all of our event listeners
    // in the useEffect callback function
    //console.log('Is this running?');
    socket.on('Welcome', data => {
      //console.log(data.data)
      // alert(data.data);
      setValue(data.data)});

      socket.on('Hi', data2 => {
        //console.log(data.data)
        // alert(data.data);
        setValue2(data2.data2)});
  
        // socket.on('Hello', data3 => {
        //   //console.log(data.data)
        //   // alert(data.data);
        //   setValue(data3.data3)});
    // note that we're returning a callback function
    // this ensures that the underlying socket will be closed if App is unmounted
    // this would be more critical if we were creating the socket in a subcomponent
    return () => socket.disconnect(true);
  }, [socket]);
  return (
    <div className="App">
      <h1>Socket Test</h1>
      {value}
      {value2}
      
    </div>
  );
}
 
export default App;