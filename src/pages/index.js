import styled from 'styled-components';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

import Pokedex from '../components/cardPokemon/index';

const Main = styled.main`
  background-color: #1e90ff;
`;

export default function Home() {
  return (
    <Main>
      <Head>
        <title>HOME | POKEMONS</title>
      </Head>
      <Pokedex />
    </Main>
  );
}
