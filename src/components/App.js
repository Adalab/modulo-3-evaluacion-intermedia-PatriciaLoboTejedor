import "../stylesheets/App.scss";
import pokedata from "../data/pokedata.json";
import PokeList from "./PokeList";

function App() {
  return (
    <div className="App">
      <h1>Mi lista de Pokemon</h1>
      <PokeList pokedata={pokedata} />
    </div>
  );
}

export default App;
