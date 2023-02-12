import React from 'react';

const PokemonList = ({ pokemon, search }) => {
  return (
    <>
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
            <div
              key={index}
              // style={{
              //   display: 'flex',
              //   justifyContent: 'center',
              //   alignItems: 'center',
              // }}
            >
              <h2>{pokemon.name}</h2>
            </div>
          );
        })}
    </>
  );
};

export default PokemonList;
