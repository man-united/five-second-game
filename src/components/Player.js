import React, { forwardRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 5px;
  color: #acd0c0;
  .white {
    color: white;
  }
  .right {
    float: right;
    margin-right: 10px;
    color: #d9b44a;
  }
  button {
    height: 1rem;
    font-size: 1em;
    padding: 10 -10px;
  }
`;

export const Player = forwardRef((props, ref) => {
  const { id, name, score, tiebreaker } = props.player;

  return (
    <Container ref={ref} key={id}>
      <li>
        <span className="white">{name}</span>
        <span className="right">{score}</span>
      </li>
    </Container>
  );
});
