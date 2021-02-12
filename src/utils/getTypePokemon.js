export default function getTypePokemon(types) {
  const PokemonType = [types];

  return PokemonType.join(',').replace(',', '/');
}
