const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');
const empty = { temp:null, sensorID:null };
const PORT = process.env.PORT || 8001;

app.use( bodyParser.json());

io.on('connection', ()=>{
    console.log('user connected')
})

app.get('/*', (req, res)=>{
    res.json({
        title:"Welcome to the temperature endpoint", 
        message:"The POST request should have the following format",
        example:{
            temp:45,
            sensorID:2
        },
        space:"",
        message2:"The following routes are available:",
        routes:["/temp", "/temp2", "/temp3", "/temp4"]
    })
});

app.post('/temp', (req, res) => {
    io.sockets.emit("temp", req.body)

    setTimeout(()=>{
        io.sockets.emit("temp", empty)
    },5000);

    res.status(200).json({ message: "success" });
})

app.post('/temp2', (req, res) => {
    io.sockets.emit("temp2", req.body)

    setTimeout(()=>{
        io.sockets.emit("temp2", empty)
    },5000);

    res.status(200).json({ message: "success" });
})

app.post('/temp3', (req, res) => {
    io.sockets.emit("temp3", req.body)

    setTimeout(()=>{
        io.sockets.emit("temp3", empty)
    },5000);

    res.status(200).json({ message: "success" });
})

app.post('/temp4', (req, res) => {
    io.sockets.emit("temp4", req.body)

    setTimeout(()=>{
        io.sockets.emit("temp4", empty)
    },5000);

    res.status(200).json({ message: "success" });
})
            
http.listen( PORT, () => {
    console.log('Server on localhost:8001')
})
