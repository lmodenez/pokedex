import styled from 'styled-components';
import { useState } from 'react';

const Button = styled.button`
  color: black;
  width: 300px;
  height: 100px;
  margin-top: 32px;
  margin-left: 32px;
  background: green;
`;

export default function Home(props) {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button onClick={() => setCount(count + 1)}>CONTADOR</Button>
      <h1>{count}</h1>
    </>
  );
}
