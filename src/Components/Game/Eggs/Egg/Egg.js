import React from 'react';
import { prependOnceListener } from 'cluster';

const Egg = (props) => {
	return (
		<div>
      <img src={props.image} alt='img-egg'/>
      <p>{props.power}</p>
		</div>
	);
}

export default Egg;