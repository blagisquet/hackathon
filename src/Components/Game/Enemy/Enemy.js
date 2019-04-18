import React, { Component } from 'react';
import './Enemy.css';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Media } from 'reactstrap';

const Enemy = () => {
	return (
		<div>
			<Media className="large">
				<Media body className="enemy2">
					<Media heading >
						Player Name
        </Media>
					<Media>
						HP/100
					</Media>
				</Media>
				<Media left href="#">
					<Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
				</Media>
			</Media>
			<h2 className="versus">VS</h2>
		</div>
	);
}

export default Enemy;