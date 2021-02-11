import pokemonData from '../../../pokemon.json';

export default (req, res) => {
  const filterQueryName = req.query.name
    ? new RegExp(req.query.name, 'i')
    : /.*/;

  const filteredPokemons = pokemonData
    .filter((pokemon) => pokemon.name.english.match(filterQueryName))
    .slice(0, 10);

  res.setHeader('Content-Type', 'application/json');

  return res.status(200).send(JSON.stringify(filteredPokemons));
};
