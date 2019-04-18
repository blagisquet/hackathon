import React, { Component } from 'react';
import './Game.css';
import Enemy from './Enemy/Enemy';
import Player from './Player/Player';
import Eggs from './Eggs/Eggs';


const Game = () => {
    return (  
      <div className="gameArea">  
        <Enemy />
        <Player />
        <Eggs />
      </div>
    );
  }

export default Game;
