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
    handleMoreInformation
  } = useContext(GlobalContext);

 

  return (
    <div className="pokemonContainer">
      {pokemon
        .filter((pokemon) => {
          if (search === '') {
            return pokemon;
          } else if (
            pokemon.name.toLowerCase().includes(search.toLowerCase())
          ) {
            return pokemon;
          }
        })
        .map((pokemon, index) => {
          return (
            <div key={index} className="pokemonCard">
              <h3>{capitilizer(pokemon.name)}</h3>

              <img
                src={`http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  index + 1
                }.png`}
                alt={pokemon.name}
              />
              <button onClick={() => handleMoreInformation(pokemon)}>
                More information
              </button>
              {buttonPopup && onePacman === pokemon && (
                <Popup
                  onePacman={onePacman}
                  setTrigger={setButtonPopup}
                />
              )}
            </div>
          );
        })}
    </div>
  );
};

export default PokemonList;
