'use strict';
export default class PopUp {
  constructor() {
    this.popUp = document.querySelector('.pop-up');
    this.popUpText = document.querySelector('.pop-up__text');
    this.popUpRefesh = document.querySelector('.pop-up__refresh');
    this.popUpRefesh.addEventListener('click', () => {
      this.onClick() && this.onClick();
      this.hide();
    });
  }

  setClickListener(onClick) {
    this.onClick = onClick;
  }

  hide() {
    this.popUp.classList.add('pop-up--hide');
  }

  showWithText(text) {
    this.popUpText.innerText = text;
    this.popUp.classList.remove('pop-up--hide');
  }
}
