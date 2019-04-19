import React from 'react';
import { Media } from 'reactstrap';
import './Player.css';
import { Button } from 'reactstrap';

const Player = (props) => {
    const life = 100;
   /*
    let lifeenemy = props.enemy.life;
    const handleButton = () => {

        lifeenemy = life - props.enemy.value;
    };*/
  return (
    <Media className="border">
      <Media left href="#">
        <img src={props.player.image} alt="playerImage" className="charImage" />
      </Media>
		
      <Media body className="textMarg">
        <Media heading >
            {props.player.name}
        </Media>
          {life}/100
      </Media>
    </Media>
		
  );
};

export default Player;