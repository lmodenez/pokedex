import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #1e90ff;
`;

export const WrapperPokemons = styled.div`
  background-color: white;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(2, minmax(12rem, 1fr));
  grid-gap: 20px 50px;
  padding: 48px;
  margin-left: 10%;
  margin-right: 10%;
`;

export const Card = styled.div`
  background: #ff4040;
  text-align: left;
  border-radius: 10px;
  border-top: 0.5px solid white;
  border-bottom: 0.5px solid white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  overflow: hidden;
  cursor: pointer;
  transition: 0.2s ease-in-out all;
  font-family: 'pokemon-font', monospace;

  &:hover {
    background: #cd3333;
    transform: scale(1.05);
  }
`;

export const CardPokemonTitle = styled.div`
  color: white;
  text-align: left;
  margin-left: 16px;
  margin-top: 8px;
`;

export const CardPokemonContent = styled.div`
  color: white;
  padding: 16px;
  display: flex;
  align-items: center;
`;

export const Types = styled.h1`
  background: #1e90ff;
  color: white;
  margin-left: 20%;
  border-radius: 10px;
  border-top: 0.5px;
  border-bottom: 0.5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  padding: 8px;
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  margin-left: 8px;
`;
