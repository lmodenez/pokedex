import styled from 'styled-components';

import useFetchPokemon from '../pages/useRequest/api';
import Pokemon from '../components/Pokemon/Pokemon';

export default function Home() {
  const { result, error } = useFetchPokemon();

  if (error) return <h1>Something went wrong!</h1>;
  if (!result) return <h1>Loading...</h1>;

  return (
    <main className="App">
      <h1>My pokemons</h1>
      <div>
        {result.results.map((pokemon) => (
          <Pokemon pokemon={pokemon} key={pokemon.name} />
        ))}
      </div>
    </main>
  );
}
