import React from 'react';
import { Media } from 'reactstrap';
import './Player.css';

const Player = () => {
	return (
		<div className="large">
			<Media>
				<Media left href="#">
					<Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
				</Media>
				<Media body className="enemy">
					<Media heading>
						Player Name
       		</Media>
					<Media>
						HP/100
     	 		</Media>
				</Media>
			</Media>
		</div>
	);
};

export default Player;