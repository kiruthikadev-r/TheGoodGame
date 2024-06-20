import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardItems from '../CardItems';
import './index.css';

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
      const pokemonData = await Promise.all(response.data.results.map(async (pokemon) => {
        const pokemonDetails = await axios.get(pokemon.url);
        return {
          name: pokemonDetails.data.name,
          image: pokemonDetails.data.sprites.front_default
        };
      }));
      setPokemons(pokemonData);
    };
    fetchPokemons();
  }, []);

  const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pokemon-list-item-container">
      <input
        type="text"
        placeholder="Search Pokémon"
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="search-input"
      />
      <div className="pokemon-list">
        {filteredPokemons.map(pokemon => (
          <CardItems key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
