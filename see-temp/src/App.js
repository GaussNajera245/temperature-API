import React, { useState, useEffect } from 'react';
import './App.css';
import io from 'socket.io-client';
const socket = io('http://localhost:8001');


function App() {
  const [state, setState] = useState('no timestamp yet');

  useEffect(()=>{
    socket.on("temp", (data) => setState(data.temp) );
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <h3>Temperature: {state}</h3>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
