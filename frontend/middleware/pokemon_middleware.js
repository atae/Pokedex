import {fetchAllPokemon, fetchAPokemon, postAPokemon} from '../util/api_util';
import {REQUEST_ALL_POKEMON, receiveAPokemon,
        receiveAllPokemon, REQUEST_A_POKEMON,
        CREATE_POKEMON, receiveNewPokemon} from '../actions/pokemon_actions';
import {hashHistory} from 'react-router';

const PokemonMiddleware = ({dispatch}) => next => action => {
  const receiveAllPokemonSuccess = data => dispatch(receiveAllPokemon(data));
  const receiveAPokemonSuccess = data => dispatch(receiveAPokemon(data));
  const createAPokemonSuccess = data => {
    dispatch(receiveNewPokemon(data));
    hashHistory.push(`/pokemon/${data.id}`);
  };

  switch (action.type) {
    case REQUEST_ALL_POKEMON:
    console.log("gotta fetch'em all");
      fetchAllPokemon(receiveAllPokemonSuccess);
      return next(action);

    case REQUEST_A_POKEMON:
      console.log("gotta fetch one of'em");
      fetchAPokemon(action.id, receiveAPokemonSuccess);
      return next(action);

    case CREATE_POKEMON:
      console.log("gotta fetch NaP Yet");
      postAPokemon(action.formData, createAPokemonSuccess);
      return next(action);

    default:
      return next(action);
  }
};

export default PokemonMiddleware;
