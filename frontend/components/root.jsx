import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';
import { Router, Route, hashHistory } from 'react-router';

import { requestAllPokemon } from '../actions/pokemon_actions';

const Root = ({ store }) => {
  const requestOnEnter = () => {
    store.dispatch(requestAllPokemon());
  };

  const requestSinglePokemonOnEnter //finish this

  return(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route
          path="/"
          component={PokemonIndexContainer}
          onEnter={requestOnEnter}>
          <Route
            path="pokemon/:pokemonId"
            component={PokemonDetailContainer}
            onEnter={requestSinglePokemonOnEnter}
          />
        </route>

      </Router>
    </Provider>
  );
};

export default Root;
