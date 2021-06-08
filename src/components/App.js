import React from "react";
import "../stylesheets/App.scss";
import pokedata from "../data/pokedata.json";
import PokeList from "./PokeList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokedex: pokedata,
    };
  }
  render() {
    return (
      <>
        <header className="header">
          <h1>Mi lista de Pokemon</h1>
        </header>
        <main className="main">
          <PokeList pokedata={this.state.pokedex} />
        </main>
      </>
    );
  }
}

export default App;
