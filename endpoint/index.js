const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser')

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('hello')
})

http.listen( 8001, () => {
    console.log('Server on localhost:8001')
})