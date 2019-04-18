import React, { Component } from 'react';
import './Eggs.css';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Media } from 'reactstrap';

const Eggs = () => {
	return (
		<div className="Container">
            <div className="row">
            <div className="eggs col-lg-6">
            <p>Oeufs</p>
            </div>
            <div className="attack col-lg-6">
            <p>Attack</p>
            </div>
            </div>
		</div>
	);
}

export default Eggs;