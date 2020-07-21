'use strict';

const CARROT_SIZE = 80;
const carrotSound = new Audio('sound/carrot_pull.mp3');
const bugSound = new Audio('sound/bug_pull.mp3');
const bgSound = new Audio('sound/bg.mp3');
const winSound = new Audio('sound/game_win.mp3');
const alertSound = new Audio('sound/alert.wav');

export default class Field {
  constructor(carrotCount, bugCount) {
    this.carrotCount = carrotCount;
    this.bugCount = bugCount;
    this.field = document.querySelector('.game__field');
    this.fieldRect = this.field.getBoundingClientRect();
    this.field.addEventListener('click', this.onClick.bind(this));
  }

  init() {
    //화면에 그리고 클릭하는 것 까지만 할 수 있는 역할을 합니다.
    this.field.innerHTML = '';
    this._addItem('carrot', this.carrotCount, 'img/carrot.png');
    this._addItem('bug', this.bugCount, 'img/bug.png');
  }

  //javascript서는 프라이빗이 통용적으로 사용하고 있지 않기때문에 _를 사용한다. typescript에서는 프라이빗 설정이 가능합니다.
  _addItem(className, count, imgPath) {
    const x1 = 0;
    const y1 = 0;
    const x2 = this.fieldRect.width - CARROT_SIZE;
    const y2 = this.fieldRect.height - CARROT_SIZE;
    for (let i = 0; i < count; i++) {
      const item = document.createElement('img');
      item.setAttribute('class', className);
      item.setAttribute('src', imgPath);
      item.style.position = 'absolute';

      const x = this._randomNumber(x1, x2);
      const y = this._randomNumber(y1, y2);
      item.style.left = `${x}px`;
      item.style.top = `${y}px`;
      this.field.appendChild(item);
    }
  }

  _playSound(sound) {
    console.log('He');
    sound.currentTime = 0;
    sound.play();
  }
  _randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  setClickListener(onItemClick) {
    this.onItemClick = onItemClick;
  }

  onClick(event) {
    const target = event.target;
    if (target.matches('.carrot')) {
      target.remove();
      this._playSound(carrotSound);
      this.onItemClick && this.onItemClick('carrot');
    } else if (target.matches('.bug')) {
      this._playSound(bugSound);
      this.onItemClick && this.onItemClick('bug');
    }
  }
}
