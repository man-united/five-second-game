import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { QUESTIONS } from './constants';
import { GameStateContext } from './Content';
import CountdownTimer from './CountdownTimer';
import correctSound from './../assets/correctSound.wav';
import wrongSound from './../assets/wrongSound.wav';

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin: 0;
  paddding: 0px;
  border-radius: 20px;
  align-items: center;
  background-color: #acd0c0;
  margin: 0 20px 20px 0;
`;

const Div = styled.div`
  height: 26%;
  display: flex;
  align-items: ${(props) => props.alignment || 'center'};
`;

const BigDiv = styled(Div)`
  height: 37%;
`;

const Question = styled.div`
  font-size: 2em;
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

  let correctAudio = new Audio(correctSound);
  let wrongAudio = new Audio(wrongSound);
  wrongAudio.volume = 0.1;

  function handleCorrect() {
    correctAudio.play();
    incrementScore();
    beginNextTurn();
  }

  function handleWrong() {
    wrongAudio.play();
    beginNextTurn();
  }

  function incrementScore() {
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
        <Question>{questions[turnCount]}</Question>
      </BigDiv>
      <BigDiv alignment="top">
        <CountdownTimer
          handleCorrect={handleCorrect}
          handleWrong={handleWrong}
        />
      </BigDiv>
    </Container>
  );
}
