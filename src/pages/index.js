import React, { useState, useCallback } from 'react';

import axios from 'axios';
import useSWR from 'swr';

import styled from 'styled-components';
import * as P from '../styles/Pokedex/styles';
import * as S from '../styles/Menu/styles';

import Head from '../components/Head';

import getTypePokemon from '../utils/getTypePokemon';

const Main = styled.main`
  background-color: #1e90ff;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export default function Home() {
  const [search, setSearch] = useState('');
  const { data: response } = useSWR(`/api/search?name=${search}`, axios);

  const handleSearch = useCallback((event) => {
    setSearch(event.target.value);
  }, []);

  return (
    <Main>
      <Head />
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
