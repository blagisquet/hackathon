import React, {useState} from 'react';
import { Client } from "../../../Client";
import { Media } from 'reactstrap';
import './Player.css';

const Player = (props) => {
    const [lifePlayer, setLifePlayer] = useState(100);
   /*
    let lifeenemy = props.enemy.life;
    const handleButton = () => {

        lifeenemy = life - props.enemy.value;
    };*/
    Client.receivedLifePlayer(data => setLifePlayer(data));


    return (
    <Media className="border">
      <Media left href="#">
        <img src={props.player.image} alt="playerImage" className="charImage" />
      </Media>
		
      <Media body className="textMarg">
        <Media heading >
            {props.player.name}
        </Media>
          {lifePlayer}/100
      </Media>
    </Media>
		
  );
};

export default Player;