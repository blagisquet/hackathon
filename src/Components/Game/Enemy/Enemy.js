import React, { useState } from 'react';
import { Client } from "../../../Client";
import './Enemy.css';
import { Media } from 'reactstrap';
import { Button } from 'reactstrap';
import './PlayerBox';


const Enemy = (props) => {
  const [lifeEnemy, setLifeEnemy] = useState(100);

  Client.receivedLifeEnemy(data => setLifeEnemy(data));

	return (
		<div>
			<Media className="border">
								
				<Media body className="textMargin">
				<Media heading>
						{props.enemy.name}
        	</Media>
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