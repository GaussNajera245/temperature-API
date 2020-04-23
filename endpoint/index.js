const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser')

app.use(bodyParser.json());

io.on('connection', ()=>{
    console.log('user connected')
})

app.get('/', (req, res)=>{
    res.send("hello")
});
    
app.post('/temp', (req, res) => {
    io.sockets.emit("temp", req.body)

    res.status(200).json({
        message: "success"
    })
})
            
http.listen( 8001, () => {
    console.log('Server on localhost:8001')
})