import pokemons from '../../../pokemon.json';

import getTypePokemon from '../../utils/getTypePokemon';

export async function getStaticPaths() {
  return {
    paths: pokemons.map((pokemon) => ({
      params: {
        name: pokemon.name.english,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const name = context.params.name;

  return {
    props: {
      name: name,
    },
  };
}

export default function Pokemon(props) {
  const pokemonFound = pokemons.find(
    (pokemon) => pokemon.name.english === props.name
  );

  return (
    <>
      <img src={`/images/${('000' + pokemonFound.id).slice(-3)}.png`} />
      <h1>{pokemonFound.id}</h1>
      <h1>{pokemonFound.name.english}</h1>
      <h1>{getTypePokemon(pokemonFound.type)}</h1>
      <h1>{pokemonFound.base.HP}</h1>
      <h1>{pokemonFound.base.Attack}</h1>
      <h1>{pokemonFound.base['Sp. Attack']}</h1>
      <h1>{pokemonFound.base['Sp. Defense']}</h1>
      <h1>{pokemonFound.base.Speed}</h1>
      <h1>{pokemonFound.base['Sp. Defense']}</h1>
    </>
  );
}
