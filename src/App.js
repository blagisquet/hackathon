import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Game from './Components/Game/Game';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <Home />
         <Game />
        </header>
      </div>
    );
  }
}

export default App;
