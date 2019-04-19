import React, { Component } from 'react';
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
      waiting: false,
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
    }, 2000);
  }


  render() {
    return (
      <div className="Container">
        {this.state.gameOver ?
          <div>GAME OVER</div>
          : this.state.waiting ?
          <div>WAIT</div>
          : <div className="row">
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
              <Button onClick={this.handleButton} className="button" color="danger">Wanna play
                                bruh???</Button>
            </div>
          </div>  
        }
      </div>
    );
  }
}

export default Eggs;

