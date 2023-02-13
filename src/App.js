import PokemonList from './components/PokemonList';
import './App.css';
import { useState, useEffect } from 'react';
import PokemonSearch from './components/PokemonSearch';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [pokemonImage, setPokemonImage] = useState('');

  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data.results);
        setLoading(false);
        setPokemonImage(pokemonImage);
      });
  };

  return (
    <div className="app">
      <h1>Pokemon</h1>
      <PokemonSearch search={search} setSearch={setSearch} />

      <div>
        {loading ? (
          <h1 className="">Loading...</h1>
        ) : (
          <PokemonList search={search} pokemon={pokemon} />
        )}
      </div>
    </div>
  );
}

export default App;
