import React, { useState, useEffect } from 'react';
import './Game.css';
import Enemy from './Enemy/Enemy';
import Player from './Player/Player';
import Eggs from './Eggs/Eggs';
import { Button } from 'reactstrap';


const Game = () => {
  const [player, setPlayer] = useState('');
  const [enemy, setEnemy] = useState('');
  const [eggs, setEggs] = useState('');


  useEffect(() => {
    fetch("http://192.168.8.110:8000/charRandom.php")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setPlayer(data)
      })
    fetch("http://192.168.8.110:8000/charRandom.php")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setEnemy(data)
      })
    fetch("http://192.168.8.110:8000/eggRandom.php")
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data)
        setEggs(data)
      })
      // console.log(eggs[0].name)
  }, []);

  return (
    <div>
      <div>player{player.name}</div>
      <div>enemy{enemy.name}</div>
      <div>ehggobefvj</div>
      <Enemy 
        enemy={enemy}
        player={player}
        />
      <Player 
        player={player} 
        enemy={enemy}
        />
      <Eggs eggs={eggs} />
    </div>
  );
}

export default Game;
