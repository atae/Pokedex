import { values } from 'lodash';

export const selectAllPokemon = ({pokemon}) => (values(pokemon));

export const selectPokemonItem = ({pokemonDetail} , id) => (pokemonDetail.items[id]);
