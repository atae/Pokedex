import React from 'react';
import { withRouter } from 'react-router';

// app academy calls this file PokemonIndexItem

const PokemonIndexItem = (props) => {
  const handleClick = url => e => props.router.push(url);

  return(
    <li className="pokemon-index-item"
      onClick={handleClick(`/pokemon/${props.id}`)}>
      <span>{props.id}</span>
      <img src={props.url} />
      <span>{props.name}</span>
    </li>
  );
};

export default withRouter(PokemonIndexItem);
