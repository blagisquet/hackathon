import React from 'react';
import './Eggs.css';

const Eggs = (props) => {
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