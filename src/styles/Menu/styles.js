import styled from 'styled-components';

export const WrapperMenu = styled.div`
  margin-bottom: 48px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ImageMenu = styled.img`
  width: 300px;
  height: 150px;
  display: flex;
  flex-direction: column;
  margin-top: 24px;

  @media (min-width: 768px) {
    width: 300px;
    height: 150px;
    margin-left: 20%;
    justify-items: center;
    margin-top: 24px;
  }
`;

export const InputSearchMenu = styled.input`
  align-items: center;
  margin-top: 24px;
  border: 1px;
  border-radius: 10px;
  border-top: 1px;
  border-bottom: 1px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  padding: 8px;
  width: 20%;
  height: 40px;
  font-family: 'pokemon-font', monospace;
  font-size: 16px;
  margin-left: 40px;

  @media (max-width: 768px) {
    width: 80%;
    height: 10%;
    justify-items: center;
    margin-top: 24px;
    margin-right: 41px;
  }
`;
