import pokemons from '../../../pokemon.json';

import getTypePokemon from '../../utils/getTypePokemon';

import {
  Wrapper,
  ContentBox,
  Box,
  Imagem,
  BoxName,
  BoxInfo,
} from '../../styles/Pokemon/styles';

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
    <Wrapper>
      <header>AQUI VAI O CABECALHO</header>
      <ContentBox>
        <Box>
          <Imagem src={`/images/${('000' + pokemonFound.id).slice(-3)}.png`} />
          <BoxName>
            <h1>{pokemonFound.name.english}</h1>
          </BoxName>
          <BoxInfo>
            <span>HP</span>
            <h1>{pokemonFound.base.HP}</h1>
          </BoxInfo>
        </Box>
      </ContentBox>
    </Wrapper>
  );
}
