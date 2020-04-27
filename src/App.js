import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import io from 'socket.io-client';
import Card from './components/Card';
const PORT = process.env.PORT || 8001;
const socket = io(`localhost:${PORT}`);

function App() {
  const [t1, setTemp1] = useState();   const [t2, setTemp2] = useState();
  const [t3, setTemp3] = useState();   const [t4, setTemp4] = useState();

  useEffect(()=>{
    socket.on("temp", (data) => {
      const time = 5000;
      if(data.sensorID && data.temp){ //checks if exist the keys sensorID and temp 
        const key = data.sensorID.toString();
        switch (key) {
          case "1":
            setTemp1(data.temp);
            setTimeout(() => setTemp1(null), time);
            break;
          
          case "2":
            setTemp2(data.temp); 
            setTimeout(() => setTemp2(null), time);
            break;

          case "3":
            setTemp3(data.temp); 
            setTimeout(() => setTemp3(null), time);
            break;
          
          case "4":
            setTemp4(data.temp); 
            setTimeout(() => setTemp4(null), time);
            break;

          default:
            console.log("POST ARRIVED: Something wrong in sensorID Probably ");
            console.log(data);
        }
      }else{
        console.log("POST ARRIVED: Wrong Key name in object sended");
        console.log(data);
      }
    })
  },[])

  return (
    <div className="App" >
      <Grid container  direction="row" style={{ padding:10 }}>
        <Card temp={t1} sensorID={1} />
        <Card temp={t2} sensorID={2} />
        <Card temp={t3} sensorID={3} />
        <Card temp={t4} sensorID={4} />
      </Grid>
    </div>
  );
}

export default App;
