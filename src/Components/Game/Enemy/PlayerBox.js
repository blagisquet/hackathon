import React, { Component } from "react";

class PlayerBox extends Component {
  render() {
    // calc player progress bar percentage based on HP
    let percentage = (this.props.playerHP / this.props.playerMaxHP) * 100 + "%";
    let num = (this.props.playerHP / this.props.playerMaxHP) * 100;
    let progressColor;

    // use player progress bar calc to style colors
    if (num <= 25) {
      progressColor = "progress-bar bg-danger";
    } else if (num <= 50) {
      progressColor = "progress-bar bg-warning";
    } else if (num > 50) {
      progressColor = "progress-bar bg-success";
    }
    return (
      <div>
        {/* HERO POKEMON CONTAINER */}
        <div id="hero-container">
          {/* HERO POKEMON INFO BOX */}
          <div id="hero-info-box">
            <div className="d-flex justify-content-between align-items-center">
              <h2 id="hero-name">{this.props.playerName}</h2>
             
            </div>
            </div>
            </div>
            </div>

            );
            }
      }
export default PlayerBox;