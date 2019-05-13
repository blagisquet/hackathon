import React, { useState, useContext } from 'react';
import { LifeEnemyCtx } from '../Game';
import './Enemy.css';
import { Media, Progress } from 'reactstrap';
import './PlayerBox';


const Enemy = (props) => {
  const [lifeEnemy, setLifeEnemy] = useContext(LifeEnemyCtx);

	return (
		<div>
			<Media className="border border-0">
								
				<Media body className="textMargin">
				<Media heading>
						{props.enemy.name}
        	</Media>
          <Progress color="success" value={lifeEnemy} />
					{lifeEnemy}/100
      	</Media>
				<Media right href="#">
					<img src={props.enemy.image} alt="charImage" className="charImage" />
				</Media>
			</Media>
			<h2 className="versus">VS</h2>
		</div>
	);
}

export default Enemy;