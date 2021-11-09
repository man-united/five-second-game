import React, { useState } from 'react';
import styled from 'styled-components';
import Timer from 'tiny-timer';

const Container = styled.div`
  flex-grow: 1;
  text-align: center;
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
      {turnStatus === 'countingDown' && <p>{time}</p>}
      {turnStatus === 'finished' && <p>Time's up!</p>}
      {turnStatus === 'finished' && (
        <div>
          <button onClick={handleCorrect}>correct</button>
          <button onClick={handleWrong}>wrong</button>
        </div>
      )}
    </Container>
  );
}
