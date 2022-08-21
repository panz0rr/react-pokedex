import React from 'react';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import StarButton from '../StarButton.js';
import { useDispatch } from 'react-redux';
import { setFavorite } from '../../store/actions/PokemonActions.js';

const PokemonCard = ({ pokemon }) => {
  const dispatch = useDispatch();

  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: pokemon.id }))
  }
  return (
    <Card title={pokemon.name} 
    cover={<img src={pokemon.sprites.front_default}
    alt="Ditto" />} extra={<StarButton isFavorite={pokemon.favorite} onClick={() => handleOnFavorite()} />}>
      <Meta description={pokemon.types.map((a) => a.type.name).join(', ')} />
    </Card>
  )
}


export default PokemonCard;