import React, { Component } from 'react';
import Game from './Components/Game/Game';
import './App.css';
import { Button } from 'reactstrap';
import ReactPlayer from 'react-player';


class App extends Component {
  constructor() {
    super();
    this.state = {
      url: "",
      volume: 1,
      controls: false,
      playing: true,
      startGame: false
    }
  }
  handleButton = () => {
    this.setState({ startGame: true})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.startGame ?
            <Game />
            : <div>
            <h1>C'est l'heure du dudududuDUEL!</h1>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=LEUGPEVRDmU"
              volume={this.state.volume}
              controls={this.state.controls}
              playing={this.state.playing}
            />
            <Button onClick={() => this.handleButton()} className="button" color="danger">Wanna play bruh???</Button>
          </div>
          }
        </header>
      </div>
    );
  }
}

export default App;
