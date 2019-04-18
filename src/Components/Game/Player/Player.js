import React from 'react';
import { Media } from 'reactstrap';

const Player = () => {
	return (
		<div className="dark">
			<Media className="border">
				<Media left href="#">
					<Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
				</Media>
				<Media body>
					<Media heading>
						Player Name
        </Media>
					HP/100
      </Media>
			</Media>
		</div>
	);
};

export default Player;