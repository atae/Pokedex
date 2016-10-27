import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import {selectAPokemon} from '../../reducers/selectors';

const mapStateToProps = ({pokemonDetail}) => ({
  pokemonDetail
});

export default connect(
  mapStateToProps
)(PokemonDetail);
