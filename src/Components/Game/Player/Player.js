import React from 'react';
import { Media } from 'reactstrap';

const Player = (props) => {
  return (
    <Media className="border">
      <Media left href="#">
        <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
      </Media>
      <Media body>
        <Media heading>
            {props.player.name}
        </Media>
       PV/100
      </Media>
    </Media>
  );
};

export default Player;