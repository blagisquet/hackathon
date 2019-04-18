import React from 'react';
import './Enemy.css';
import { Media } from 'reactstrap';
import { Button } from 'reactstrap';


const Enemy = (props) => {
	const life = 100;
	return (
		<div>
			<Media className="border">
				<Media body>
					<Media heading>
						{props.enemy.name}
        </Media>
					{life}/100
      </Media>
				<Media left href="#">
					<img src={props.enemy.image} alt="charImage"  />
				</Media>
			</Media>
			<h2 className="versus">VS</h2>
		</div>
	);
}

export default Enemy;