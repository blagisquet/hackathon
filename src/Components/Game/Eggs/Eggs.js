import React, { Component } from 'react';
import './Eggs.css';
import { Scrollbars } from 'react-custom-scrollbars';
import './Scroll';

class Eggs extends Component {
	constructor(props) {
		super(props);
		this.state = {
			eggs: props.eggs,
		};
	}

	removeEgg = (index) => {
		let foo = this.state.eggs;
		foo.splice(index, 1);
		console.log(foo)
		this.setState({ eggs: foo });
	}

	render() {
		return (
			<div className="Container">
				<div className="row">
					<div className="eggs col-lg-9">
						<p>Eggs</p>
						<Scrollbars style={{ width: 730, height: 200 }}>
							{this.state.eggs.map((egg, index) => {
								return (
									<div className="eggsCss" onClick={() => this.removeEgg(index)}>
										<img src={egg.image} />
										<p>{egg.name}</p>
										<p className="redColor">Valeur : {egg.value}</p>
									</div>
								);
							})}
						</Scrollbars>
					</div>
					<div className="attack col-lg-3">
						<p>Attack</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Eggs;

