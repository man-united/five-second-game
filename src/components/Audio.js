import UIPopUpSound from './../assets/audio/UIPopUpSound.wav';
import fiveSecondBeepSound from './../assets/audio/fiveSecondBeepSound.wav';
import correctSound from './../assets/audio/correctSound.wav';
import wrongSound from './../assets/audio/wrongSound.wav';

var mute = false;

var audioTable = {
  UIPopUp: new Audio(UIPopUpSound),
  fiveSecondBeep: new Audio(fiveSecondBeepSound),
  correct: new Audio(correctSound),
  wrong: new Audio(wrongSound),
};

var volumeTable = {
  UIPopUp: 0.5,
  fiveSecondBeep: 1,
  correct: 1,
  wrong: 0.1,
};

export function toggleMute() {
  mute = !mute;
}

export function playAudio(sound, volume = volumeTable[sound]) {
  if (mute) {
    return;
  }
  var audio = audioTable[sound];
  audio.volume = volume;
  audio.play();
}
