import React, { Component } from 'react';
import './Enemy.css';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Media } from 'reactstrap';

const Enemy = () => {
	return (
		<div>
			<Media className="border">
				<Media body>
					<Media heading>
						Nom du joueur
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