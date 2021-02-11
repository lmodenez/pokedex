import styled from 'styled-components';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import React, { useState, useCallback } from 'react';
import axios from 'axios';
import useSWR from 'swr';

import Pokedex from '../components/Pokedex/index';

import * as P from '../components/Pokedex/styles';
import * as S from '../styles/Menu/styles';

const Main = styled.main`
  background-color: #1e90ff;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

function getTypePokemon(types) {
  const PokemonType = [types];

  return PokemonType.join(',').replace(',', '/');
}

export default function Home() {
  const [search, setSearch] = useState('');
  const { data: response } = useSWR(`/api/search?name=${search}`, axios);

  const handleSearch = useCallback((event) => {
    setSearch(event.target.value);
  }, []);

  return (
    <Main>
      <Head>
        <title>HOME | POKEMONS</title>
      </Head>
      <S.WrapperMenu>
        <S.ImageMenu src="/logo.png" />
        <S.InputSearchMenu
          type="text"
          placeholder="Search for a pokemon"
          onChange={handleSearch}
          value={search}
        />
      </S.WrapperMenu>
      <P.Wrapper>
        <P.WrapperPokemons>
          {response?.data ? (
            response?.data.map((pokemon) => (
              <P.Card>
                <P.CardPokemonTitle>
                  <h1>{pokemon.name.english}</h1>
                </P.CardPokemonTitle>
                <P.CardPokemonContent>
                  <P.Image
                    src={`/images/${('000' + pokemon.id).slice(-3)}.png`}
                  />
                  <P.Types>{getTypePokemon(pokemon.type)}</P.Types>
                </P.CardPokemonContent>
              </P.Card>
            ))
          ) : (
            <h1>Loading...</h1>
          )}
        </P.WrapperPokemons>
      </P.Wrapper>
    </Main>
  );
}
