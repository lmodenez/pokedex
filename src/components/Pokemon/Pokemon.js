import React from 'react';
import useFetchPokemon from '../../pages/useRequest/api';

export default function Pokemon({ pokemon }) {
  const { name } = pokemon;
  const { result, error } = useFetchPokemon(name);

  if (error) return <h1>Something went wrong!</h1>;
  if (!result) return <h1>Loading</h1>;

  return (
    <div className="Card">
      <span className="Card--id">#{result.id}</span>
      <img
        className="Card--image"
        src={result.sprites.front_default}
        alt={name}
      />
      <h1 className="Card--name">{name}</h1>
      <span className="Card--details">
        {result.types.map((poke) => poke.type.name).join(', ')}
      </span>
    </div>
  );
}
