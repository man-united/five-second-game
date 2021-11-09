import React from 'react';
import Header from './Header';
import Content from './Content';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #75b1a9;
  font-family: 'McLaren', cursive;
`;

export default function App() {
  return (
    <Container>
      <Header />
      <Content />
    </Container>
  );
}
