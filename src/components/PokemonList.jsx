import React, { useContext } from 'react';
import Popup from './Popup';
import { GlobalContext } from '../Context/GlobalState';
import { capitilizer } from '../capitilizer';

const PokemonList = () => {
  const {
    search,
    pokemon,
    setButtonPopup,
    onePacman,
    buttonPopup,
    morePokemon,
    getPokemonNumber
  } = useContext(GlobalContext);

  return (
    <div className="pokemonContainer">
      {pokemon
        .filter((pokemon) => {
          if (search === '') {
            return true;
          } else if (
            pokemon.name.toLowerCase().includes(search.toLowerCase())
          ) {
            return true;
          } else {
            return false;
          }
        })
        .map((pokemon) => {
          const pokemonNumber = getPokemonNumber(pokemon.url); // Pokemon numarasını al

          return (
            <div key={pokemonNumber} className="pokemonCard">
              <h3>{capitilizer(pokemon.name)}</h3>

              <img
                src={`http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png`}
                alt={pokemon.name}
              />
              <button onClick={() => morePokemon(pokemon)}>
                More information
              </button>
              {buttonPopup && (
                <Popup onePacman={onePacman} setTrigger={setButtonPopup} />
              )}
            </div>
          );
        })}
    </div>
  );
};



export default PokemonList;
