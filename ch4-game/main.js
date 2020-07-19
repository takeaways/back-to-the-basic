'use strict';

const CARROT_SIZE = 80;
const CARROT_COUNT = 100;
const BUG_COUNT = 50;
const GAME_DURATION_SEC = 100;

const field = document.querySelector('.game__field');
const fieldRect = field.getBoundingClientRect();
const gameBtn = document.querySelector('.game__button');
const gameTimer = document.querySelector('.game__timer');
const gameScore = document.querySelector('.game__score');

const popUp = document.querySelector('.pop-up');
const popUpText = document.querySelector('.pop-up__text');
const popUpRefesh = document.querySelector('.pop-up__refresh');

const carrotSound = new Audio('sound/carrot_pull.mp3');
const bugSound = new Audio('sound/bug_pull.mp3');
const bgSound = new Audio('sound/bg.mp3');
const winSound = new Audio('sound/game_win.mp3');
const alertSound = new Audio('sound/alert.wav');

let started = false;
let score = 0;
let timer = null;

gameBtn.addEventListener('click', () => {
  if (started) {
    stopGame();
  } else {
    startGame();
  }
});
field.addEventListener('click', onFieldClick);
popUpRefesh.addEventListener('click', () => {
  startGame();
  hidePopUp();
});

function onFieldClick(e) {
  if (!started) {
    return;
  }
  const target = event.target;
  if (target.matches('.carrot')) {
    target.remove();
    score++;
    updateScoreBoard();
    playSound(carrotSound);
    if (score === CARROT_COUNT) {
      finishGame(true);
    }
  } else if (target.matches('.bug')) {
    stopGameTimer();
    finishGame(false);
    playSound(bugSound);
  }
}
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
  showPopUpWithText(win ? 'YOU WON' : 'YOU LOST');
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
  showPopUpWithText('REPLAY');
}
function hideGameButton() {
  gameBtn.style.visibility = 'hidden';
}
function showPopUpWithText(text) {
  popUpText.innerText = text;
  popUp.classList.remove('pop-up--hide');
}
function hidePopUp() {
  popUp.classList.add('pop-up--hide');
}
function updateTimerText(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  gameTimer.innerText = `${minutes} : ${seconds}`;
}
function initGame() {
  field.innerHTML = '';
  gameScore.innerText = CARROT_COUNT;
  addItem('carrot', CARROT_COUNT, 'img/carrot.png');
  addItem('bug', BUG_COUNT, 'img/bug.png');
}
function addItem(className, count, imgPath) {
  const x1 = 0;
  const y1 = 0;
  const x2 = fieldRect.width - CARROT_SIZE;
  const y2 = fieldRect.height - CARROT_SIZE;
  for (let i = 0; i < count; i++) {
    const item = document.createElement('img');
    item.setAttribute('class', className);
    item.setAttribute('src', imgPath);
    item.style.position = 'absolute';

    const x = randomNumber(x1, x2);
    const y = randomNumber(y1, y2);
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;
    field.appendChild(item);
  }
}
function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
