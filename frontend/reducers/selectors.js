import { values } from 'lodash';

export const selectAllPokemon = ({pokemon}) => (values(pokemon));

export const selectAPokemon = ({pokemonDetail}) => (values(pokemonDetail));
