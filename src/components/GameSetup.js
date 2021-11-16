import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import uniqid from 'uniqid';
import { GameStateContext } from './Content';
import { playAudio } from './Audio';

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin: 0;
  paddding: 0px;
  border-radius: 20px;
  background-color: #acd0c0;
  margin: 0 20px 20px 0;
`;

const Div = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function GameSetup(props) {
  const { players, gameBegun } = useContext(GameStateContext);
  const [playerList, setPlayerList] = players;
  const [, setHasGameStarted] = gameBegun;
  const [inputText, setInputText] = useState('');

  function handleChange(e) {
    setInputText(e.target.value);
  }

  function handleSubmit(e) {
    playAudio('UIPopUp', 0.5);
    e.preventDefault();
    if (inputText.length === 0 || playerList.length >= 12) {
      return;
    }
    const newPlayer = {
      id: uniqid(),
      name: inputText,
      score: 0,
      tiebreaker: 0,
    };
    setPlayerList((prevPlayers) => {
      return [...prevPlayers, newPlayer];
    });
    setInputText('');
  }

  function startGame() {
    playAudio('UIPopUp', 0.5);
    if (playerList.length < 2) {
      alert('Must have at least 2 players to start game!');
      return;
    }
    setHasGameStarted(true);
  }

  return (
    <Container>
      <Div>
        <h3>Add Players</h3>
      </Div>
      <Div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="text"
            value={inputText}
            maxLength="15"
            placeholder="Enter name for player"
          />
          <button type="submit"> Add Player</button>
        </form>
      </Div>
      <Div>
        <button onClick={startGame}> Start Game </button>
      </Div>
    </Container>
  );
}
