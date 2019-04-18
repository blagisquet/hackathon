import React, { Component } from 'react';
import { Button } from 'reactstrap';
import ReactPlayer from 'react-player';
import './Home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      url: "",
      volume: 1,
      controls: false,
      playing: true,
    };
  }
    render() {
      return (
        <div> 
          <h1>C'est l'heure du dudududuDUEL!</h1>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=LEUGPEVRDmU"
              volume={this.state.volume}
              controls={this.state.controls}
              playing={this.state.playing}
            />
             <Button className="button" color="danger">Wanna play bruh???</Button>{' '}
        </div>
      );
    }
  }
  
  export default Home;
