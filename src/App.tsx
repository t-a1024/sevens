import React from 'react';
import Card from "./assets/cardCompornents";
import { Board } from './game/board';
import { Player } from './game/player';

function App() {
  const players = [
    new Player("t-a"),
    new Player("tas"),
    new Player("aki"),
    new Player("baca"),
  ];

  const manager = new Board(players);
  const board = manager.getboard;

  // boardをidでソート
  //const sortedBoard = board.sort((a, b) => a.id - b.id);

  return (
    <div className="App">
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {board.map((card, index) => (
          <div key={index} style={{ margin: "10px" }}>
            <Card id={card.id} mark={card.mark} color={card.color} />
            <h5>{card.owner.getName()}</h5>
          </div>
        ))}
      </div>
      <div>
        {players.map((player, index) => (
          <div key={index}>
            <h3>{player.getName()}'s Hand:</h3>
            <ul>
              {player.hand.map((card, cardIndex) => (
                <li key={cardIndex}>{card.id} of {card.mark}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
