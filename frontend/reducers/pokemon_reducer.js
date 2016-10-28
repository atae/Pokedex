import {RECEIVE_ALL_POKEMON,
        RECEIVE_NEW_POKEMON} from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const PokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};

  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;

    case RECEIVE_NEW_POKEMON:
    // debugger; come back to fix this later,
    //TODO: Refresh sidebar on new pokemon creation
    //update hashHistory in Pokemon Middleware
    // put idNum in [] because Javascript syntax be cray
    // let idNum = action.pokemon.id;
    //   let deconstructedPokemon = {
    //     [idNum]:
    //     {id: action.pokemon.id,
    //     name: action.pokemon.name,
    //     image_url: action.pokemon.image_url}
    //   };

      return merge({}, state, {[action.pokemon.id]: action.pokemon});


    default:
      return state;
  }
};

export default PokemonReducer;
