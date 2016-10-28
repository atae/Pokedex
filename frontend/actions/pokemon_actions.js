export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const REQUEST_ALL_POKEMON = "REQUEST_ALL_POKEMON";
export const RECEIVE_A_POKEMON = "RECEIVE_A_POKEMON";
export const REQUEST_A_POKEMON = "REQUEST_A_POKEMON";
export const CREATE_POKEMON = "CREATE_POKEMON";
export const RECEIVE_NEW_POKEMON = "RECEIVE_NEW_POKEMON";

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const requestAllPokemon = () => ({
  type: REQUEST_ALL_POKEMON,
});

export const receiveAPokemon = pokemon => ({
  type: RECEIVE_A_POKEMON,
  pokemon
});

export const requestAPokemon = id => ({
  type: REQUEST_A_POKEMON,
  id
});

export const createPokemon = formData => ({
  type: CREATE_POKEMON,
  formData
});

export const receiveNewPokemon = pokemon => ({
  type: RECEIVE_NEW_POKEMON,
  pokemon
});
