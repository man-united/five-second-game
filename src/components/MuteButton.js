import React, { useState } from 'react';
import styled from 'styled-components';
import { playAudio, toggleMute } from './Audio';
import speaker from '../assets/speaker.png';
import mutedSpeaker from '../assets/mutedSpeaker.png';

const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  height: 2.5em;
  width: 2.5em;
  padding: 0px;
  margin: 0px;
  background-image: url ('/image/btn.png') no-repeat;

  img {
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    border-radius: 10px;
  }
`;

export default function MuteButton() {
  const [muted, setMuted] = useState(false);

  function handleToggle() {
    toggleMute();
    if (muted) {
      playAudio('UIPopUp');
    }
    setMuted(!muted);
  }
  return (
    <Button onClick={handleToggle}>
      {muted ? <img src={mutedSpeaker}></img> : <img src={speaker}></img>}
    </Button>
  );
}
