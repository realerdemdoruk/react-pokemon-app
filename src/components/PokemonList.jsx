import React from 'react';

const PokemonList = ({
  pokemon,
  search,
  pokemonImage,
  pokemonId,
  setPokemonImage,
}) => {
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

              {/* <img
                // src={
                //   'https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemonImage}.svg'
                // }
                alt={pokemon.name}
              /> */}
              <img
                src={
                  // 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/' +
                  // setPokemonImage +
                  // '.svg'

                  pokemonImage
                }
                alt={pokemon.name}
              />
            </div>
          );
        })}
    </div>
  );
};

export default PokemonList;
