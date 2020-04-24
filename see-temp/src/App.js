import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import './App.css';
import io from 'socket.io-client';
import Card from './components/Card';
const socket = io('http://localhost:8001');


function App() {
  const [t1, setTemp1] = useState('no timestamp yet');

  useEffect(()=>{
    socket.on("temp", (data) => setTemp1(data.temp) );
  },[])

  return (
    <div className="App" >
      <Grid container  direction="row" style={{ padding:10 }}>
        <Card id="1" temp={t1} />
        <Card />
        <Card />
        <Card />
      </Grid>
    </div>
  );
}

export default App;
