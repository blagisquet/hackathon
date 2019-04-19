import React, { Component, Container } from 'react';
import './Eggs.css';
import { Scrollbars } from 'react-custom-scrollbars';
import './Scroll';
import { Button } from "reactstrap";
import { Client } from "../../../Client";

class Eggs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eggs: props.eggs,
      valuePlayer: props.valuePlayer,
      valueEnemy: props.valueEnemy,
      lifeEnemy: 100,
      lifePlayer: 100,
      gameOver: false,
      gameWin: false,
      waiting: false
    };
  }
  removeEgg = (index) => {
    let foo = this.state.eggs;
    console.log(foo[index].value)
    if (foo[index].value > 0) {
      this.state.lifePlayer += foo[index].value;
    } else {
      this.state.lifeEnemy += foo[index].value;
    }
    if ( this.state.lifePlayer >100){
    	this.state.lifePlayer = 100;
	}
    Client.sendLifePlayer(this.state.lifePlayer);
    Client.sendLifeEnemy(this.state.lifeEnemy);

    foo.splice(index, 1);
    console.log(foo)
    this.setState({ eggs: foo });

  }

  handleButton = () => {
    let newlifeEnemy = this.state.lifeEnemy - (Math.floor(Math.random() * this.state.valuePlayer) + 1);
    if (newlifeEnemy <= 0) {
      newlifeEnemy = 0;
      this.setState({ gameWin: true })
    }
    this.setState({ lifeEnemy: newlifeEnemy });
    Client.sendLifeEnemy(newlifeEnemy);
    this.setState({ waiting: true })
    setTimeout(() => {
      // calc next enemy attack name and damage
      let newlifePlayer = this.state.lifePlayer - (Math.floor(Math.random() * this.state.valueEnemy) + 1);
      if (newlifePlayer <= 0) {
        newlifePlayer = 0;
        this.setState({ gameOver: true })
      }
      this.setState({ lifePlayer: newlifePlayer });
      Client.sendLifePlayer(newlifePlayer);
      this.setState({ waiting: false })
      console.log(this.state.waiting)
      // once the state is changed, start enemy turn
    }, 1000);
  }


  render() {
    return (
        <div>
        {this.state.gameOver ?
          <div className="card-body">
            <h1 className="redColor"> GAME OVER</h1>
          </div>
          : this.state.gameWin ?
            <div className="card-body">
              <h1 className="redColor"> WIIIIIIIINNNNNNNNN</h1>
            </div>
            : this.state.waiting ?
              <div className="card-body">
                <h1 className="redColor"> WAIT</h1>
              </div>
              : <div className="row">
                <div className="eggs col-lg-9">
                  <h2>Eggs</h2>
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
                  <Button onClick={this.handleButton} className="buttonOne" color="danger">Attack</Button>
                </div>
              </div>
        }
        </div>
    );
  }
}

export default Eggs;

