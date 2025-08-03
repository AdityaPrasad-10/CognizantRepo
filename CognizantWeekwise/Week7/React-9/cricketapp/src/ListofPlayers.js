import React from 'react';

function ListofPlayers({ players }) {
  return (
    <div>
      {players.map((item) => (
        <li key={item.name}>
          Mr. {item.name} <span>{item.score}</span>
        </li>
      ))}
    </div>
  );
}

export default ListofPlayers;
