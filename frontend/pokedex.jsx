import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
//testing
import {fetchAPokemon} from './util/api_util';
import {RECEIVE_A_POKEMON, receiveAPokemon,
        requestAPokemon, createPokemon} from './actions/pokemon_actions';
import merge from "lodash/merge";


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

  // testing
  window.store = store;
  window.fetchAPokemon = fetchAPokemon;
  window.receiveAPokemon = receiveAPokemon;
  window.RECEIVE_A_POKEMON = RECEIVE_A_POKEMON;
  window.requestAPokemon = requestAPokemon;
  window.createPokemon = createPokemon;
  window.merge = merge;
});

// default state
// nidorino nidorina vulpix
// smak that
// graveler
// Tae is bae
// growlithe exeggcute oddish vaporeon clefable
