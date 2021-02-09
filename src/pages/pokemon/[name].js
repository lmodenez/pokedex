import Link from 'next/link';
import Head from 'next/head';

import pokemons from '../../../pokemon.json';

export default function Pokemon(name) {
  const pokemonFound = pokemons.filter((pokemon) =>
    pokemon.name.english.match(teste)
  );
  console.log(pokemonFound);

  return (
    <main className="App">
      <h1>My pokemons</h1>
      <div>
        {pokemons.map((pokemon) => (
          <>
            <h1>{pokemon.id}</h1>
            <h1>{pokemon.name.english}</h1>
            <h1>{pokemon.type}</h1>
            <h1>{pokemon.base.Attack}</h1>
          </>
        ))}
      </div>
    </main>
  );
}
