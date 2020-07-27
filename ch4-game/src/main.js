'use strict';
import PopUp from './popup.js';
import Game from './game.js';

const CARROT_COUNT = 5;
const BUG_COUNT = 5;
const GAME_DURATION_SEC = 5;

const gameFinishBanner = new PopUp();

const game = new Game(GAME_DURATION_SEC, CARROT_COUNT, BUG_COUNT);
game.setGameStopListener((reason) => {
  let message;
  switch (reason) {
    case 'cancel':
      message = 'replay?';
      break;
    case 'win':
      message = 'win?';
      break;
    case 'lose':
      message = 'lose?';
      break;
    default:
      throw new Error('not valid reason');
  }
  gameFinishBanner.showWithText(message);
});
