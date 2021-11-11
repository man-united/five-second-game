import React, { useContext, forwardRef } from 'react';
import { Player } from './Player';
import styled from 'styled-components';
import FlipMove from 'react-flip-move';
import { GameStateContext } from './Content';

const Container = styled.div`
  width: 200px;
  border-radius: 20px;
  text-align: center;
  background-color: #4f6457;
  h3 {
    color: #d9b44a;
  }
  ol {
    padding: 10px 10px 20px 30px;
  }
  margin: 0 20px 20px 20px;
`;

export default function Sidebar(props) {
  const { players } = useContext(GameStateContext);
  const [playerList] = players;
  var sortedPlayerList = [...playerList];
  sortedPlayerList.sort((a, b) => b.score - a.score);

  return (
    <Container>
      <h3>Scoreboard</h3>

      <FlipMove typeName="ol" duration={500}>
        {sortedPlayerList.map((player, index) => (
          <Player key={player.id} player={player} />
        ))}
      </FlipMove>
    </Container>
  );
}
