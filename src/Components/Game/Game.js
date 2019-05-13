import React, { useState, useEffect, createContext } from 'react';
import './Game.css';
import Enemy from './Enemy/Enemy';
import Player from './Player/Player';
import Eggs from './Eggs/Eggs';

export const LifePlayerCtx = createContext('');
export const LifeEnemyCtx = createContext('');

const Game = () => {
  const [player, setPlayer] = useState('');
  const [enemy, setEnemy] = useState('');
  const [eggs, setEggs] = useState([]);
  const [lifePlayer, setLifePlayer] = useState(100);
  const [lifeEnemy, setLifeEnemy] = useState(100);

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
      <LifePlayerCtx.Provider value={[lifePlayer, setLifePlayer]}>
        <LifeEnemyCtx.Provider value={[lifeEnemy, setLifeEnemy]}>
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
        </LifeEnemyCtx.Provider>
      </LifePlayerCtx.Provider>
    </div>
  );
}

export default Game;
