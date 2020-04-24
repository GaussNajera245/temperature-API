import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import './App.css';
import io from 'socket.io-client';
import Card from './components/Card';
const socket = io('http://localhost:8001');


function App() {
  const [t1, setTemp1] = useState();
  const [t2, setTemp2] = useState();
  const [t3, setTemp3] = useState();
  const [t4, setTemp4] = useState();

  useEffect(()=>{
    socket.on("temp", (data) => setTemp1(data) );
    socket.on("temp2", (data) => setTemp2(data) );
  },[])

  return (
    <div className="App" >
      <Grid container  direction="row" style={{ padding:10 }}>
        <Card temp={t1} />
        <Card temp={t2} />
        <Card temp={t3} />
        <Card temp={t4} />
      </Grid>
    </div>
  );
}

export default App;
