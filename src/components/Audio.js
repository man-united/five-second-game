import UIPopUpSound from './../assets/audio/UIPopUpSound.wav';
import fiveSecondBeepSound from './../assets/audio/fiveSecondBeepSound.wav';
import correctSound from './../assets/audio/correctSound.wav';
import wrongSound from './../assets/audio/wrongSound.wav';

var audioTable = {
  UIPopUp: new Audio(UIPopUpSound),
  fiveSecondBeep: new Audio(fiveSecondBeepSound),
  correct: new Audio(correctSound),
  wrong: new Audio(wrongSound),
};

export function playAudio(sound, volume = 1) {
  var audio = audioTable[sound];
  audio.volume = volume;
  audio.play();
}
