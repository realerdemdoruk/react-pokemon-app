import { createContext, useState, useEffect, useMemo } from 'react';
export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [onePacman, setOnePacman] = useState({});
  const [pokemonData, setPokemonData] = useState({});
  const [loadingPopup, setLoadingPopup] = useState(true);

  const morePokemon = (data) => {
    setButtonPopup(true);
    setOnePacman(data);
  };

  const handleMoreInformation = (pokemon) => {
    morePokemon(pokemon);
  };

  const getPokemon = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=99%22')
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data.results);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (onePacman.name) {
      setLoadingPopup(true);
      fetch(`https://pokeapi.co/api/v2/pokemon/${onePacman.name}`)
        .then((response) => response.json())
        .then((data) => {
          setPokemonData(data);
        })
        .finally(() => setLoadingPopup(false));
    }
  }, [onePacman]);

  const memoizedValues = useMemo(
    () => ({
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
      loadingPopup,
      handleMoreInformation,
    }),
    [
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
      loadingPopup,
      handleMoreInformation
    ]
  );

  return (
    <GlobalContext.Provider value={memoizedValues}>
      {props.children}
    </GlobalContext.Provider>
  );
};
