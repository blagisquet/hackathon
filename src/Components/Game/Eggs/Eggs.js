import React from 'react';
import './Eggs.css';

const Eggs = (props) => {
  const eggs = props.eggs;

  return (
    <div className="Container">
      <div className="row">
        <div className="eggs col-lg-6">
          <p>Oeufs</p>
          {eggs.map((egg, index) => {
            return (
              <div key={index}><img src={egg.image} />
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

export default Eggs;