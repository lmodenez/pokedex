import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #ff4040;
  font-family: 'pokemon-font', monospace;
`;

export const ContentBox = styled.div`
  background-color: #fff;
  border-radius: 30px 30px 0 0;
  position: relative;
  margin-top: 100px !important;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Imagem = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 13px;
  margin: -100px auto 0;
  box-shadow: 0px 7px 55px -26px rgb(0 0 0 / 75%);
  justify-content: center;
`;

export const BoxName = styled.div`
  margin-top: 8px;
  text-align: center;
`;

export const BoxInfo = styled.div`
  margin-top: 8px;
  max-width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 25%;
`;

export const Span = styled.span`
  font-size: 24px;
  font-weight: bold;
  justify-content: center;
`;

export const H1 = styled.h1`
  background-color: #1e90ff;
  border-radius: 10px;
  width: 64px;
  text-align: center;
  box-shadow: 5px solid black;
  color: white;
`;
