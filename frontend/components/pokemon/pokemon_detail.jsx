import React from 'react';

const PokemonDetail = ({name, image_url, attack, defense, moves, poke_type, items}) => {

  return (
    <div>
      <img src={image_url}/>
      <h2>{name}</h2>
      <ul>
        <li>Type:{poke_type}</li>
        <li>Attack:{attack}</li>
        <li>Defense:{defense}</li>
        <li>Moves:{moves}</li>
        <li>Items:{items}</li>
      </ul>
    </div>
  );
};

export default PokemonDetail;
