import Router from 'next/router';

import pokemons from '../../../pokemon.json';
import { BiArrowBack } from 'react-icons/bi';

import getTypePokemon from '../../utils/getTypePokemon';

import {
  Wrapper,
  ContentBox,
  Box,
  Imagem,
  BoxName,
  BoxInfo,
  Span,
  H1,
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
      <BiArrowBack
        size="3em"
        style={{ padding: '2px' }}
        onClick={() => Router.push('/')}
      />
      <ContentBox>
        <Box>
          <Imagem src={`/images/${('000' + pokemonFound.id).slice(-3)}.png`} />
          <BoxName>
            <h1>{pokemonFound.name.english}</h1>
          </BoxName>
          <BoxInfo>
            <Span>HP</Span>
            <H1>{pokemonFound.base.HP}</H1>
          </BoxInfo>
          <BoxInfo>
            <Span>Attack</Span>
            <H1>{pokemonFound.base.Attack}</H1>
          </BoxInfo>
          <BoxInfo>
            <Span>Defense</Span>
            <H1>{pokemonFound.base.Defense}</H1>
          </BoxInfo>
          <BoxInfo>
            <Span>Sp. Attack</Span>
            <H1>{pokemonFound.base['Sp. Attack']}</H1>
          </BoxInfo>
          <BoxInfo>
            <Span>Sp. Defense</Span>
            <H1>{pokemonFound.base['Sp. Defense']}</H1>
          </BoxInfo>
          <BoxInfo>
            <Span>Speed</Span>
            <H1>{pokemonFound.base.Speed}</H1>
          </BoxInfo>
        </Box>
      </ContentBox>
    </Wrapper>
  );
}
