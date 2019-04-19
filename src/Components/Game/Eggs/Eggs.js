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
          <div className="eggs col-lg-6">
            <p>Oeufs</p>
            {this.state.eggs.map((egg, index) => {
              return (
                <div onClick={() => this.removeEgg(index)}>
                  <img src={egg.image} />
                  <p>{egg.name}</p>
                  <p>Valeur : {egg.value}</p>
                </div>
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
}

export default Eggs;

