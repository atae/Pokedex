import React from 'react';
import merge from 'lodash/merge';

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      attack: "",
      defense: "",
      poke_type: "",
      // moves: [],
      move1: "",
      move2: "",
      image_url: ""
    };
    this.TYPES = [
      "fire",
      "electric",
      "normal",
      "ghost",
      "psychic",
      "water",
      "bug",
      "dragon",
      "grass",
      "fighting",
      "ice",
      "flying",
      "poison",
      "ground",
      "rock",
      "steel"
    ];
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // TODO
    // let formData = {
    //   name: this.state.name,
    //   attack: this.state.attack,
    //   defense: this.state.defense,
    //   poke_type: this.state.poke_type,
    //   image_url: this.state.image_url
    // };
    //
    // let moveObject = {moves: [this.state.move1, this.state.move2]};
    //
    // this.props.createPokemon(merge(formData, moveObject));
    // let keys = Object.keys(formData);
    // debugger;
    // if (keys.every((formkey) => formData[formkey] !== "")) {
    //   debugger;
    //   if (moveObject.moves.length === 2) {
    //   }
    // }
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  render() {
    return(
      <section className="pokemon-detail">
        <img src="../../../assets/pokemon-logo.png" />
        <form className="pokemon-form" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Name"
            value={this.state.name} onChange={this.update("name")}/>
          <input type="text" placeholder="Image Url"
            value={this.state.image_url}
            onChange={this.update("image_url")}/>
          <select value={this.state.poke_type}
            onChange={this.update('poke_type')}>
            <option disabled>Select Pokemon Type</option>
            {this.TYPES.map((type, i) => <option key={i} value={type}>{type}</option>)}
          </select>

          <input type="text" placeholder="Attack"
            value={this.state.attack} onChange={this.update("attack")}/>
          <input type="text" placeholder="Defense"
            value={this.state.defense} onChange={this.update("defense")}/>
          <input type="text" placeholder="Move 1"
            value={this.state.move1} onChange={this.update("moves")}/>
          <input type="text" placeholder="Move 2"
            value={this.state.move2} onChange={this.update("moves")}/>
          <button onClick={this.handleSubmit}>Create Digimon</button>
        </form>
    </section>
    );
  }
}

export default PokemonForm;
