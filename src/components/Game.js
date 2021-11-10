import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { QUESTIONS } from './constants';
import { GameStateContext } from './Content';
import CountdownTimer from './CountdownTimer';

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin: 0;
  paddding: 0px;
  align-items: center;
  background-color: #acd0c0;
  margin: 0 20px 20px 0;
`;

const Div = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: ${(props) => props.alignment || 'center'};
`;

const BigDiv = styled(Div)`
  flex-grow: 2;
`;

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

export default function Game() {
  const { players } = useContext(GameStateContext);
  const [playerList, setPlayerList] = players;
  const playerCount = playerList.length;
  const [turnCount, setTurnCount] = useState(1);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const shuffled = [...QUESTIONS];
    shuffle(shuffled);
    setQuestions(shuffled);
  }, []);

  var playerIndex = (turnCount - 1) % playerCount;
  var currPlayer = playerList[playerIndex];

  function handleCorrect() {
    incrementScore();
    beginNextTurn();
  }

  function incrementScore(playerIndex) {
    let newList = [...playerList];
    let player = {
      ...newList[playerIndex],
      score: currPlayer.score + 1,
    };
    newList[playerIndex] = player;
    setPlayerList(newList);
  }

  function beginNextTurn() {
    setTurnCount((prev) => prev + 1);
  }

  return (
    <Container>
      <Div>
        <h3>{currPlayer.name}'s Turn!</h3>
      </Div>
      <BigDiv>
        <div>{questions[turnCount]}</div>
      </BigDiv>
      <BigDiv alignment="top">
        <CountdownTimer
          handleCorrect={handleCorrect}
          handleWrong={beginNextTurn}
        />
      </BigDiv>
    </Container>
  );
}
