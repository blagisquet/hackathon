import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import Home from './Components/Home/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <Home />
        </header>
      </div>
    );
  }
}

export default App;
