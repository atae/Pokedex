import React from 'react';

const PokemonDetail = ({pokemonDetail, router, children}) => {

  const handleClick = url => e => router.push(url);

  let itemNames = pokemonDetail.items.map( (item, index) => (
    <li key={index}
        onClick={handleClick(`/pokemon/${pokemonDetail.id}/toy/${index}`)}>
      {item.name}</li>
  ));

  return (
    <div className="pokemon-detail">
      <img src={pokemonDetail.image_url}/>
      <ul>
        <li><h2>{pokemonDetail.name}</h2></li>
        <li>Type: {pokemonDetail.poke_type}</li>
        <li>Attack: {pokemonDetail.attack}</li>
        <li>Defense: {pokemonDetail.defense}</li>
        <li>Moves: {pokemonDetail.moves.join(', ')}</li>
      </ul>
      <section className="toys">
        <h3>Toys</h3>
        <ul className="toy-list">
          {itemNames}
        </ul>
      </section>
      {children}
    </div>
  );
};

export default PokemonDetail;
