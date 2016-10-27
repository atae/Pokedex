import {fetchAllPokemon, fetchAPokemon} from '../util/api_util';
import {REQUEST_ALL_POKEMON, receiveAPokemon,
        receiveAllPokemon, REQUEST_A_POKEMON} from '../actions/pokemon_actions';

const PokemonMiddleware = ({dispatch}) => next => action => {
  const receiveAllPokemonSuccess = data => dispatch(receiveAllPokemon(data));
  const receiveAPokemonSuccess = data => dispatch(receiveAPokemon(data));

  switch (action.type) {
    case REQUEST_ALL_POKEMON:
      fetchAllPokemon(receiveAllPokemonSuccess);
      return next(action);

    case REQUEST_A_POKEMON:
      console.log("gotta fetch'em all");
      fetchAPokemon(action.id, receiveAPokemonSuccess);
      return next(action);

    default:
      return next(action);
  }
};

export default PokemonMiddleware;
