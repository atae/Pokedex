import React from "react";
import PokemonIndexItem from "./pokemon_index_item";

const PokemonIndex = (props) => {

  // key doesn't get passed into the props
  let pokemonNames = props.pokemon.map((pokemon) => (
    <PokemonIndexItem key={pokemon.id} id={pokemon.id} name={pokemon.name} url={pokemon.image_url} router={props.router} />
  ));

  return (
    <div className = "pokedex">
      <ul>
        {pokemonNames}
      </ul>

    </div>
  );
};

export default PokemonIndex;
