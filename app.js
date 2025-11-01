
const express = require('express');
const { Server } = require('socket.io');
const http = require('http');
const path =  require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname,'public')));



io.on('connection',(socket)=>{

    console.log('user was connected',socket.id);

    socket.on('chat-message',(data)=>{
        io.emit('chat-message',data);
    })

    socket.on('disconnect',()=>{
        console.log('user was a disconnected',socket.id);
        
    })
    
})



server.listen(3000)