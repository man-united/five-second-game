import React from 'react';
import hourglass from '../assets/hourglass.png';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #d9b44a;
  background-color: #4f6457;
  margin: 20px;
  border-radius: 25px;
`;

const HourGlass = styled.img`
  height: 50px;
  width: 50px;
  margin: 0 20px;
`;

export default function Header() {
  return (
    <Container>
      <HourGlass src={hourglass} alt="hourglass" />
      <h1>5 second game</h1>
      <HourGlass src={hourglass} alt="hourglass" />
    </Container>
  );
}
