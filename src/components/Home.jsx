import React, { useEffect, useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import PokemonList from './PokemonList';
import PokemonSearch from './PokemonSearch';
import '../App.css';

export const Home = () => {
  const { loading, search, setSearch, pokemon, getPokemon } =
    useContext(GlobalContext);

  useEffect(() => {
    getPokemon();
  }, []);

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
};
