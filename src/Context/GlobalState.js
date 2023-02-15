import { createContext, useState } from 'react';

export const GlobalContext = createContext();
export const GlobalProvider = (props) => {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [birTanePokemon, setBirTanePokemon] = useState({});
  const [pokemonData, setPokemonData] = useState({});

  const dahaFazla = (data) => {
    setButtonPopup(true);
    setBirTanePokemon(data);
  };

  const getPokemon = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=150%22')
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data.results);
      })
      .finally(() => setLoading(false));
  };

  const getPokemonData = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${birTanePokemon.name}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemonData(data);
      })
      .finally(() => setLoading(false));
  };

  return (
    <GlobalContext.Provider
      value={{
        pokemon,
        setPokemon,
        search,
        setSearch,
        loading,
        setLoading,
        buttonPopup,
        setButtonPopup,
        birTanePokemon,
        setBirTanePokemon,
        pokemonData,
        setPokemonData,
        dahaFazla,
        getPokemon,
        getPokemonData,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
