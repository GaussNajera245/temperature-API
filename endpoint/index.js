const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');
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
        }
    })
});

app.post('/temp', (req, res) => {
    if(req.body.temp && req.body.sensorID){
        const {temp, sensorID} = req.body;

        if ( typeof(temp) !== "number" || typeof(sensorID) !== "number"){
            res.status(200).json({ message: "all values must be number type" })
        }else{
            (sensorID > 4 || sensorID < 1)
                ? res.status(200).json({ message: "wrong sensorID value, acepted values are [1,2,3,4]" })
                : res.status(200).json({ message: "success" })
        }

    }
    else(
        res.status(200).json({message: "post sended, something wrong in key names or value is zero"})
    )
    io.sockets.emit("temp", req.body);
})

http.listen( PORT, () => {
    console.log('Server on localhost:8001')
})
