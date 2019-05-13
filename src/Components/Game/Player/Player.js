import React, { useState, useContext } from 'react';
import { LifePlayerCtx } from '../Game';
import { Media, Progress } from 'reactstrap';
import './Player.css';

const Player = (props) => {
  const [lifePlayer, setLifePlayer] = useContext(LifePlayerCtx);

    return (
    <Media className="border border-0">
      <Media left href="#">
        <img src={props.player.image} alt="playerImage" className="charImage" />
      </Media>
		
      <Media body className="textMarg">
        <Media heading >
            {props.player.name}
        </Media>
        <Progress color="success" value={lifePlayer} />
          {lifePlayer}/100
      </Media>
    </Media>
		
  );
};

export default Player;