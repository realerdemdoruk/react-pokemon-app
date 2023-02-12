import PokemonList from './components/PokemonList';
import './App.css';
import { useState, useEffect } from 'react';
import PokemonSearch from './components/PokemonSearch';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data.results);
        setLoading(false);
      });
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1>Pokemon</h1>
      <PokemonSearch search={search} setSearch={setSearch} />

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          padding: '5rem',
          width: '900px',
          justifyContent: 'center',
        }}
      >
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
