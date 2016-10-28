import { connect } from 'react-redux';
import { createPokemon } from '../../actions/pokemon_actions';
import PokemonForm from './pokemon_form';

const mapDispatchToProps = (dispatch) => ({
  createPokemon: (formData) => dispatch(createPokemon(formData))
});

export default connect(
  mapDispatchToProps
)(PokemonForm);
