import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getPokemons } from "./service";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonToSearch, setPokemonToSearch] = useState({ value: "" });

  function handleSearch({ target }) {
    setPokemonToSearch({
      ...pokemonToSearch,
      value: target.value,
    });
  }

  function handleSubmit() {
    getPokemons(pokemonToSearch.value).then((data) => {
      setPokemons([...pokemons, data]);
    });
  }

  console.log(pokemons);

  return (
    <div className="App">
      <div className="navbar">
        <h1>PokeAPI</h1>
      </div>

      <div className="search">
        <input
          type="text"
          value={pokemonToSearch.value}
          onChange={handleSearch}
        />
        <button onClick={handleSubmit}>Catch!</button>
      </div>

      {pokemons.map((pokemon, index) => (
        <div key={index} className="container">
          <div className="pokemon-image">
            <img src={pokemon.sprites.back_default} alt="" width={150} height />
          </div>
          <div className="pokemon-information">
            <p>Id: {pokemon.id}</p>
            <h1>{pokemon.name}</h1>
          </div>
        </div>
      ))}

      {pokemons.length === 0 && <h1>No pokemon captured yet 😢</h1>}
    </div>
  );
}

export default App;
