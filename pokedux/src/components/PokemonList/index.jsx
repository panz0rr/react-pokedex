import React from 'react';
import PokemonCard from '../PokemonCard';
import './style.css'

const PokemonList = ({ pokemon }) => {
  return (
    <div className="PokemonList">
        {pokemon.map((pokemon) => {
          return <PokemonCard pokemon={pokemon} />;
      })}
    </div>
  )
}

export default PokemonList;