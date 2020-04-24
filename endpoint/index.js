const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');

app.use(bodyParser.json());

io.on('connection', ()=>{
    console.log('user connected')
})

app.get('/', (req, res)=>{
    res.json({
        title:"Welcome to the temperature endpoint", 
        message:"The POST request should have the following format",
        example:{
            temp:45,
            sensorID:2
        },
        space:"",
        message2:"The following routes are available:",
        routes:["/temp", "/dummy"]
    })
});

app.post('/temp', (req, res) => {
    io.sockets.emit("temp", req.body)

    setTimeout(()=>{
        io.sockets.emit("temp", {temp:null,sensorID:null})
    },5000);

    res.status(200).json({ message: "success" });
})

app.post('/temp2', (req, res) => {
    ///this is only tryout, later will delete :vv
    io.sockets.emit("temp2", req.body)

    setTimeout(()=>{
        io.sockets.emit("temp2", {temp:null,sensorID:null})
    },5000);

    res.status(200).json({ message: "success" });
})

app.post('/temp3', (req, res) => {
    io.sockets.emit("temp3", req.body)

    setTimeout(()=>{
        io.sockets.emit("temp3", {temp:null,sensorID:null})
    },5000);

    res.status(200).json({ message: "success" });
})

app.post('/temp4', (req, res) => {
    io.sockets.emit("temp4", req.body)

    setTimeout(()=>{
        io.sockets.emit("temp4", {temp:null,sensorID:null})
    },5000);

    res.status(200).json({ message: "success" });
})
            
http.listen( 8001, () => {
    console.log('Server on localhost:8001')
})