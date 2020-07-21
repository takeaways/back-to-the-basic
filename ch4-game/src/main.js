'use strict';
import PopUp from './popup.js';
import Field from './field.js';

const CARROT_COUNT = 5;
const BUG_COUNT = 5;
const GAME_DURATION_SEC = 5;

const gameBtn = document.querySelector('.game__button');
const gameTimer = document.querySelector('.game__timer');
const gameScore = document.querySelector('.game__score');

const bugSound = new Audio('../sound/bug_pull.mp3');
const bgSound = new Audio('../sound/bg.mp3');
const winSound = new Audio('../sound/game_win.mp3');
const alertSound = new Audio('../sound/alert.wav');

let started = false;
let score = 0;
let timer = null;

const gameFinishBanner = new PopUp();
gameFinishBanner.setClickListener(() => {
  startGame();
});

function onItemClick(item) {
  if (!started) {
    return;
  }
  if (item === 'carrot') {
    score++;
    updateScoreBoard();
    if (score === CARROT_COUNT) {
      finishGame(true);
    }
  } else if (item === 'bug') {
    finishGame(false);
  }
}
const gameField = new Field(BUG_COUNT, CARROT_COUNT);
gameField.setClickListener(onItemClick);

//게임시작 버튼
gameBtn.addEventListener('click', () => {
  if (started) {
    stopGame();
  } else {
    startGame();
  }
});

function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}
function stopSound(sound) {
  sound.pause();
}
function updateScoreBoard() {
  gameScore.innerText = CARROT_COUNT - score;
}
function finishGame(win) {
  started = false;
  score = 0;
  if (win) {
    playSound(winSound);
  } else {
    playSound(bugSound);
  }
  stopGame();
  gameFinishBanner.showWithText(win ? 'YOU WON' : 'YOU LOST');
}

function startGame() {
  playSound(bgSound);
  started = true;
  gameBtn.style.visibility = 'visible';
  initGame();
  showStopButton();
  showTimerAndScore();
  startGameTimer();
}
function stopGame() {
  started = false;
  hideGameButton();
  stopGameTimer();
  stopSound(bgSound);
  playSound(alertSound);
  gameFinishBanner.showWithText('REPLAY');
}
function showStopButton() {
  const icon = gameBtn.querySelector('.fa');
  icon.classList.add('fa-stop');
  icon.classList.remove('fa-play');
}
function showTimerAndScore() {
  gameTimer.style.visibility = 'visible';
  gameScore.style.visibility = 'visible';
}
function startGameTimer() {
  let remainingTimeSec = GAME_DURATION_SEC;
  updateTimerText(remainingTimeSec);
  timer = setInterval(() => {
    if (remainingTimeSec <= 0) {
      clearInterval(timer);
      finishGame(CARROT_COUNT === score);
      return;
    }
    updateTimerText(--remainingTimeSec);
  }, 1000);
}
function stopGameTimer() {
  clearInterval(timer);
  hideGameButton();
}
function hideGameButton() {
  gameBtn.style.visibility = 'hidden';
}

function updateTimerText(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  gameTimer.innerText = `${minutes} : ${seconds}`;
}
function initGame() {
  score = 0;
  gameScore.innerText = CARROT_COUNT;
  gameField.init();
}
