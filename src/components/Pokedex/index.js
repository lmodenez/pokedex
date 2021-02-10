import pokemons from '../../../pokemon.json';

import * as S from './styles';

function getTypePokemon(types) {
  const PokemonType = [types];

  return PokemonType.join(',').replace(',', '/');
}

export default function Pokedex() {
  return (
    <S.Wrapper>
      <S.WrapperPokemons>
        {pokemons.slice(0, 10).map((pokemon) => (
          <S.Card>
            <S.CardPokemonTitle>
              <h1>{pokemon.name.english}</h1>
            </S.CardPokemonTitle>
            <S.CardPokemonContent>
              <S.Image src={`/images/${('000' + pokemon.id).slice(-3)}.png`} />
              <S.Types>{getTypePokemon(pokemon.type)}</S.Types>
            </S.CardPokemonContent>
          </S.Card>
        ))}
      </S.WrapperPokemons>
    </S.Wrapper>
  );
}
