import React from 'react';
import PokemonCard from '../PokemonCard';
import './style.css'

const PokemonList = ({ pokemon }) => {
  return (
    <div className="PokemonList">
        {pokemon.map((pokemon) => {
        return <PokemonCard />;
      })}
    </div>
  )
}

PokemonList.defaultProps = {
    pokemon: Array(10).fill(''),
  };
  
export default PokemonList;