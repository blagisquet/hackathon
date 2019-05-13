import React, { useState, useContext } from 'react';
import './Eggs.css';
import { LifePlayerCtx } from '../Game';
import { LifeEnemyCtx } from '../Game';
import { Scrollbars } from 'react-custom-scrollbars';
import './Scroll';
import { Button } from "reactstrap";

const Eggs = (props) => {
  const [eggs, setEggs] = useState(props.eggs);
  const [lifePlayer, setLifePlayer] = useContext(LifePlayerCtx);
  const [lifeEnemy, setLifeEnemy] = useContext(LifeEnemyCtx);
  const [gameOver, setGameOver] = useState(false);
  const [gameWin, setGameWin] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const [noMoreEggs, setNoMoreEggs] = useState(false);

  const removeEgg = (index) => {
    let foo = eggs;
    console.log(foo[index].value)
    if (foo[index].value > 0) {
      let addEggLifePlayer = lifePlayer + foo[index].value;
      setLifePlayer(addEggLifePlayer);
    } else {
      let addEggLifeEnemy = lifeEnemy + foo[index].value;
      setLifeEnemy(addEggLifeEnemy);
    }
    if (lifePlayer > 100) {
      setLifePlayer(100);
    }
    foo.splice(index, 1);
    if (foo.length === 0) {
      setNoMoreEggs(true);
    }
    setEggs(foo);
  }

  const handleButton = () => {
    let newlifeEnemy = lifeEnemy - (Math.floor(Math.random() * props.valuePlayer) + 1);
    if (newlifeEnemy <= 0) {
      newlifeEnemy = 0;
      setGameWin(true);
    }
    setLifeEnemy(newlifeEnemy);
    setWaiting(true);
    setTimeout(() => {
      // calc next enemy attack name and damage
      let newlifePlayer = lifePlayer - (Math.floor(Math.random() * props.valueEnemy) + 1);
      if (newlifePlayer <= 0) {
        newlifePlayer = 0;
        setGameOver(true);
      }
      setLifePlayer(newlifePlayer);
      setWaiting(false);
      // once the state is changed, start enemy turn
    }, 1000);
  }

  return (
    <div>
      {gameOver ?
        <div className="card-body">
          <h1 className="redColor"> GAME OVER</h1>
        </div>
        : gameWin ?
          <div className="card-body">
            <h1 className="redColor"> WIIIIIIIINNNNNNNNN</h1>
          </div>
          : waiting ?
            <div className="card-body">
              <h1 className="redColor"> WAIT</h1>
            </div>
            : noMoreEggs ? <p>No more eggs</p>
              : <div className="row">
                <div className="eggs col-lg-9">
                  <h2>Eggs</h2>
                  <Scrollbars style={{ width: 730, height: 200 }}>
                    {eggs.map((egg, index) => {
                      return (
                        <div className="eggsCss" onClick={() => removeEgg(index)}>
                          <img src={egg.image} />
                          <p>{egg.name}</p>
                          <p className="redColor">Valeur : {egg.value}</p>
                        </div>
                      );
                    })}
                  </Scrollbars>
                </div>
                <div className="attack col-lg-3">
                  <Button onClick={handleButton} className="buttonOne" color="danger">Attack</Button>
                </div>
              </div>
      }
    </div>
  );
}

export default Eggs;

