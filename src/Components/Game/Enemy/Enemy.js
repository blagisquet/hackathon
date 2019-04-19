import React, { useState } from 'react';
import { Client } from "../../../Client";
import './Enemy.css';
import { Media } from 'reactstrap';
import { Button } from 'reactstrap';
import './PlayerBox';


const Enemy = (props) => {
  const life = 100;
  const [lifeplayer, setLifeplayer] = useState('');
  
  Client.receivedLifeplayer(data => setLifeplayer(data));
  console.log(lifeplayer)

	return (
		<div>
			<Media className="border">
								
				<Media body>
				<Media heading>
						{props.enemy.name}
        	</Media>
					{life}/100
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