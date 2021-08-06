// server.js
const express = require('express');
const app = express();
 
const server = app.listen(8000, () =>
  console.log('The server is all fired up on port 8000')
);
 
// To initialize the socket, we need to
// invoke the socket.io library
// and pass it our Express server
const io = require('socket.io')(server, { cors: true });
io.on("connection",socket =>
{
    console.log("Nice to meet you.(Shake hand)")
    socket.emit("Welcome",{data:"Welcome!"})//{data:"Welcome!"} : new
    socket.broadcast.emit("Hi",{data2:"Hi!"})//all but this : any selected browser windows and is just refreshed
   io.emit("Hello",{data3:"Hello!"})//overrides the ones before

});