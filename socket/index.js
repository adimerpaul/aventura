const express = require('express');
const { createServer } = require('http');
const { join } = require('path');
const {Server} = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server);
// env
require('dotenv').config();

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });
    socket.broadcast.emit('hi');
});

port=process.env.PORT || 3000
server.listen(port, () => {
    console.log('http://localhost:'+port);
});