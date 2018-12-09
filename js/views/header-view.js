import AbstractView from './abstract-view';
import {HEADER_FULL} from '../data/config';

class HeaderView extends AbstractView {
  constructor(type, state = ``) {
    super();
    this.type = type;
    this.state = state;
  }

  get template() {
    return `<header class="header">
      ${this.addBackButton()}
      ${this.type === HEADER_FULL ? this.addTimer(this.state.time) + this.addLives(this.state.lives) : ``}
    </header>`;
  }

  addBackButton() {
    return `<button class="back">
      <span class="visually-hidden">Вернуться к началу</span>
      <svg class="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
        <use xlink:href="img/sprite.svg#arrow-left"></use>
      </svg>
      <svg class="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
        <use xlink:href="img/sprite.svg#logo-small"></use>
      </svg>
    </button>`;
  }

  addLives(lives) {
    return `<div class="game__lives">
      ${new Array(3 - lives).fill(
      `<img src="img/heart__empty.svg" class="game__heart" alt=" Missed Life" width="31" height="27">`)
      .join(``)}
      ${new Array(lives).fill(
      `<img src="img/heart__full.svg" class="game__heart" alt="Life" width="31" height="27">`)
      .join(``)}
    </div>`;
  }

  addTimer(time) {
    return `<div class="game__timer">${time}</div>`;
  }

  onClick() {

  }

  bind() {
    const backButton = this.element.querySelector(`.back`);
    backButton.addEventListener(`click`, (e) => {
      e.preventDefault();
      this.onClick();
    });
  }
}

export default HeaderView;

