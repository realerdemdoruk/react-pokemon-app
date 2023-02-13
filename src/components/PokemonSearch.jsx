import React from 'react';

const PokemonSearch = ({ search, setSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search Pokemon"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default PokemonSearch;
