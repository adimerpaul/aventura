const express = require('express');
const { createServer } = require('http');
const { join } = require('path');
const app = express();
const server = createServer(app);
// env
require('dotenv').config();

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});

port=process.env.PORT || 3000
server.listen(port, () => {
    console.log('http://localhost:'+port);
});