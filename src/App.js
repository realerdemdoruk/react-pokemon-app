import PokemonList from './components/PokemonList';
import './App.css';
import { useState, useEffect } from 'react';
import PokemonSearch from './components/PokemonSearch';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [pokemonImage, setPokemonImage] = useState('');
  const [pokemonId, setPokemonId] = useState('');

  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data.results);
        setLoading(false);
        // console.log(data.results);

        for (let i = 0; i < data.results.length; i++) {
          //   let pokemonId =
          //     data.results[i].url.split('/')[
          //       data.results[i].url.split('/').length - 2
          //     ];
          let pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            i - 2
          }.png`;
          // setPokemonId(pokemonId);

          setPokemonImage(pokemonImage);

          //   setPokemonImage(pokemonImage);
          //   console.log(pokemonImage);
        }

        // let pokemonId = pokemon.url.split('/')[pokemon.url.split('/').length - 2];

        // let pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

        // setPokemonImage(pokemonImage);
        // console.log(setPokemonImage);

        // https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg adresine git ve resmi çek setPokemonImage ile set et

        //  Pokemonların id'sini alıp resimlerini çekmek için bu kodu kullanabilirsin.
        //  https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png

        // pokemonId = pokemon.url
        //   .split('/')
        //   [pokemon.url.split('/').length - 2].toString();
        // console.log(pokemonId);
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
          // let pokemonId = pokemon.url.split('/')[pokemon.url.split('/').length - 2];
          // let pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

          <PokemonList
            search={search}
            pokemonImage={pokemonImage}
            setPokemonImage={setPokemonImage}
            pokemon={pokemon}
            // pokemonImage={pokemonImage}
            pokemonId={pokemonId}
          />
        )}
      </div>
    </div>
  );
}

export default App;
