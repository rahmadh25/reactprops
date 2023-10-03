import React from 'react';
import "../style/App.css";
import CardItem from './CardItem';
import { data } from "../playersdata";
function PlayersList() {
    
  return (
    <div className="App">
      <h1> Players-list </h1>
          <div className="player-list">
              {data.map((elt) => (
                  <CardItem
          name={elt.name}
          description={elt.description}
          url={elt.url}
          nationality={elt.nationality}
          age={elt.age}
          number={elt.number}
        />
              ))}

          </div>
    </div>
  );
}

export default PlayersList