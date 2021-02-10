import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 48px;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 300px;
  height: 150px;
  margin-left: 20%;
  justify-items: center;
  margin-top: 24px;
`;

const InputSearch = styled.input`
  align-items: center;
  margin-top: 24px;
  border: 1px;
  border-radius: 10px;
  border-top: 1px;
  border-bottom: 1px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  padding: 8px;
  width: 20%;
  margin-left: 48px;
  height: 40px;
  font-family: 'pokemon-font', monospace;
  font-size: 16px;
`;

export default function Menu() {
  return (
    <>
      <Wrapper>
        <Image src="/logo.png" />
        <InputSearch type="text" placeholder="Search for a pokemon" />
      </Wrapper>
    </>
  );
}
