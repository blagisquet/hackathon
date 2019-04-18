import React from 'react';
import './Enemy.css';
import { Media } from 'reactstrap';

const Enemy = (props) => {

	return (
		<div>
			<Media className="border">
				<Media body>
					<Media heading>
						{props.enemy.name}
        </Media>
					PV/100
      </Media>
				<Media left href="#">
					<Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
				</Media>
			</Media>
			<h2 className="versus">Versus</h2>
		</div>
	);
}

export default Enemy;