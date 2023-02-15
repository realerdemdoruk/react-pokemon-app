import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

const PokemonSearch = () => {
  const { search, setSearch } = useContext(GlobalContext);
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
