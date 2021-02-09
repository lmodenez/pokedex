import Image from 'next/image';

import pokemons from '../../../pokemon.json';

import styled from 'styled-components';
import './styles';

const Wrapper = styled.div`
  background-color: #1e90ff;
  display: grid;
  grid-template-columns: repeat(3, minmax(12rem, 1fr));
`;

const CardPokemon = styled.div`
  background: #ff4040;
  margin-top: 24px;
  margin-left: 24px;
  margin-right: 24px;
  border: 1px;
  text-align: center;
  border-radius: 10px;
  border-top: 0.5px solid white;
  border-bottom: 0.5px solid white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: 0.2s ease-in-out all;
  font-family: 'pokemon-font', monospace;
  color: white;
`;

export default function Pokedex() {
  return (
    <Wrapper>
      {pokemons.map((pokemon) => (
        <CardPokemon>
          <h1>{pokemon.name.english}</h1>
          <Image
            src={`/images/${('000' + pokemon.id).slice(-3)}.png`}
            width={150}
            height={150}
          />
        </CardPokemon>
      ))}
    </Wrapper>
  );
}
