import React, { useState } from 'react';
import GameSetup from './GameSetup';
import Game from './Game';
import Sidebar from './Sidebar';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 1;
  margin: 0;
  padding: 0;
  button {
    background-color: #75b1a9;
    margin: 10px;
    font-size: 16px;
    padding: 5px;
    border-radius: 10px;
  }
  input {
    font-size: 16px;
  }
`;

export const GameStateContext = React.createContext();

export default function Content() {
  const [playerList, setPlayerList] = useState([]);
  const [hasGameStarted, setHasGameStarted] = useState(false);

  return (
    <GameStateContext.Provider
      value={{
        players: [playerList, setPlayerList],
        gameBegun: [hasGameStarted, setHasGameStarted],
      }}
    >
      <Container>
        <Sidebar />
        {hasGameStarted ? <Game /> : <GameSetup />}
      </Container>
    </GameStateContext.Provider>
  );
}
