import { createContext, useState, useMemo } from 'react';

export const GlobalContext = createContext();
export const GlobalProvider = (props) => {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [onePacman, setOnePacman] = useState({}); //setBirTanePokemon
  const [pokemonData, setPokemonData] = useState({});
  const [loadingPopup, setLoadingPopup] = useState(true);

  const morePokemon = (data) => {
    setButtonPopup(true);
    setOnePacman(data);
  };

  const getPokemon = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=99%22')
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data.results);
      })
      .finally(() => setLoading(false));
  };

  const getPokemonData = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${onePacman.name}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemonData(data);
      })
      .finally(() => setLoadingPopup(false));
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
        onePacman,
        setOnePacman,
        pokemonData,
        setPokemonData,
        morePokemon,
        getPokemon,
        getPokemonData,
        loadingPopup,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
