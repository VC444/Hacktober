import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Websocket from 'react-websocket';
import io from 'socket.io';

class App extends Component {

  componentDidMount = () => {
    const socket = io('http://localhost:3000/');
    socket.on('connect', function () { console.log('socket connected') });
    socket.on('tags', function (data) { console.log('socket tags') });
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
