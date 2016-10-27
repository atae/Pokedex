import {RECEIVE_A_POKEMON} from "../actions/pokemon_actions";

const _defaultState = {
  image_url: "",
  name: "",
  poke_type: "",
  attack: "",
  defense: "",
  moves: [],
  items: []
};

const PokemonDetailReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_A_POKEMON:
      return action.pokemon;
    default:
      return state;
  }
};

export default PokemonDetailReducer;
