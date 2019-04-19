import React from 'react';
import './Eggs.css';
import { Scrollbars } from 'react-custom-scrollbars';
import './Scroll';

const Eggs = (props) => {
	const eggs = props.eggs;

	return (
		<div className="Container">
			<div className="row">
				<div className="eggs col-lg-6">
					<p>Eggs</p>
					{eggs.map((egg, index) => {
						return (
							<Scrollbars style={{ width: 300, height: 300 }}>
							<div key={index}><img src={egg.image} />
								<p>{egg.name}</p>
								<p>Valeur : {egg.value}</p>
							</div>
							</Scrollbars>
						);
					})}
				</div>
				<div className="attack col-lg-6">
					<p>Attack</p>
				</div>
			</div>
		</div>
	);
}

export default Eggs;