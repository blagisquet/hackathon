import React, { useState, useEffect } from 'react';
import './Game.css';
import Enemy from './Enemy/Enemy';
import Player from './Player/Player';
import Eggs from './Eggs/Eggs';

const Game = () => {
  const [player, setPlayer] = useState('');
  const [enemy, setEnemy] = useState('');
  const [eggs, setEggs] = useState([]);


  useEffect(() => {
    fetch("https://nantes2.wilders.dev/hackathon/charRandom.php")
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data);
        setPlayer(data)
      })
    fetch("https://nantes2.wilders.dev/hackathon/charRandom.php")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setEnemy(data)
      })
    fetch("https://nantes2.wilders.dev/hackathon/eggRandom.php")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setEggs(data)
      })    
  }, []);
  
  return (
    <div className='gameArea'>
      <Enemy 
        enemy={enemy}
        player={player}
        />
      <Player 
        player={player} 
        enemy={enemy}
        />
        {eggs.length && player.value && enemy.value &&
          <Eggs
              eggs={eggs}
              valuePlayer={player.value}
              valueEnemy={enemy.value}
          />
        }
    </div>
  );
}

export default Game;
