import React, { useState } from 'react';
import styled from 'styled-components';
import Timer from 'tiny-timer';

const Container = styled.div`
  flex-grow: 1;
  text-align: center;

  button {
    font-size: 1.5em;
  }
`;

const Span = styled.span`
  font-size: 6em;
  color: #4f6457;
`;

export default function CountdownTimer(props) {
  const [time, setTime] = useState(5);
  const [turnStatus, setTurnStatus] = useState('readying');

  function startTimer() {
    const timer = new Timer();
    setTime(5);

    timer.on('tick', (ms) => {
      const s = Math.round(ms / 1000);
      setTime(s);
    });
    timer.on('done', () => {
      setTurnStatus('finished');
    });
    setTurnStatus('countingDown');
    timer.start(5000);
  }

  function handleCorrect() {
    props.handleCorrect();
    setTurnStatus('readying');
  }

  function handleWrong() {
    setTurnStatus('readying');
    props.handleWrong();
  }

  return (
    <Container>
      {turnStatus === 'readying' && (
        <button onClick={startTimer}> Ready </button>
      )}
      {turnStatus === 'countingDown' && <Span>{time}</Span>}

      {turnStatus === 'finished' && (
        <div>
          <button onClick={handleCorrect}>✔️</button>
          <button onClick={handleWrong}>❌</button>
          <p>Time's up!</p>
        </div>
      )}
    </Container>
  );
}
