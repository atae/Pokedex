import { connect } from 'react-redux';
import { selectPokemonItem } from '../../reducers/selectors';
import ItemDetail from './item_detail';

// random example
// ownProps.params === {pokemonID: 4, itemId: 0}

const mapStateToProps = (state, ownProps) => ({
  item: selectPokemonItem(state, ownProps.params.itemId)
});

export default connect(
  mapStateToProps
)(ItemDetail);
