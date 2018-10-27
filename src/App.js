import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import io from 'socket.io-client';

class App extends Component {

  componentDidMount = () => {
    const socket = io('http://localhost:8000/');
    socket.on('connect', function () { console.log('socket connected') });
    socket.on('tags', function (data) { console.log(data) });
    socket.on('disconnect', function () { console.log('socket disconnected') });
  }

  render() {

    return (
      <div className="App">
        <h4>Hello</h4>
      </div>
    );
  }
}

export default App;
