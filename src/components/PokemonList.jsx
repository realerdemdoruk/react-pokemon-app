import React from 'react';
import Popup from './Popup';
import { useState } from 'react';

const PokemonList = ({ pokemon, search }) => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [birTanePokemon, setBirTanePokemon] = useState({});
  // console.log(pokemon);

  const dahaFazla = (data) => {
    setButtonPopup(true);
    setBirTanePokemon(data);
  };

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
