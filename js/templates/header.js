import renderGreeting from './greeting';
import {render, changeScreen} from '../util';

export const HEADER_SHORT = `short`;
export const HEADER_FULL = `full`;


const addBackButton = () => `
  <button class="back">
    <span class="visually-hidden">Вернуться к началу</span>
    <svg class="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
      <use xlink:href="img/sprite.svg#arrow-left"></use>
    </svg>
    <svg class="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
      <use xlink:href="img/sprite.svg#logo-small"></use>
    </svg>
  </button>`;

const addLives = (lives) =>`
  <div class="game__lives">
    ${new Array(3 - lives).fill(
      `<img src="img/heart__empty.svg" class="game__heart" alt=" Missed Life" width="31" height="27">`)
      .join(``)}
    ${new Array(lives).fill(
      `<img src="img/heart__full.svg" class="game__heart" alt="Life" width="31" height="27">`)
      .join(``)}
  </div>`;

const addTimer = (time) => `<div class="game__timer">${time}</div>`;

const headerFull = (state) => `
  <header class="header">
    ${addBackButton()}
    ${addTimer(state.time)}
    ${addLives(state.lives)}
  </header>`;

const headerShort = () => `
  <header class="header">
    ${addBackButton()}
  </header>`;

export const renderHeader = (headerType, state = ``) => {
  const header = headerType === HEADER_FULL ? headerFull(state) : headerShort();
  const headerElement = render(header);

  const backButton = headerElement.querySelector(`.back`);
  backButton.addEventListener(`click`, () => changeScreen(renderGreeting()));

  return headerElement;
};

export default renderHeader;
