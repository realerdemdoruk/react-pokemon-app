import React, { useContext } from 'react';
import Popup from './Popup';
import { GlobalContext } from '../Context/GlobalState';

const PokemonList = () => {
  const {
    search,
    pokemon,
    setButtonPopup,
    birTanePokemon,
    buttonPopup,
    dahaFazla,
  } = useContext(GlobalContext);

  // console.log(pokemon);

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
              <h3>{pokemon.name}</h3>

              <img
                src={`http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  index + 1
                }.png`}
                alt={pokemon.name}
              />
              <button onClick={() => dahaFazla(pokemon)}>
                More information
              </button>
              {buttonPopup && (
                <Popup
                  birTanePokemon={birTanePokemon}
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
