import {changeScreen, render} from '../util';
import renderHeader from './header';
import greeting from './greeting';
import {INITIAL_STATE, HEADER_FULL} from '../data/config';
import LEVELS from '../data/game-data';
import LevelView from '../templates/level-view';
import {decreaseLives} from '../game/lives';
import {changeLevel, canContinue} from '../game/level';
import {getAnswers, isAllAnswers, saveAnswer} from '../game/answer';
import renderResult from './result';

let gameState;

const getLevel = (state) => LEVELS[state.level];
const gameContainerElement = render();

const addLevel = (headerElement, levelElement) => {
  gameContainerElement.innerHTML = ``;
  gameContainerElement.appendChild(headerElement);
  gameContainerElement.appendChild(levelElement);
};

const updateGame = (state) => {
  const level = getLevel(state);

  const gameHeader = renderHeader(HEADER_FULL, state);
  const gameContent = new LevelView(state, level);
  addLevel(gameHeader.element, gameContent.element);

  const options = gameContent.element.querySelectorAll(`.game__option`);

  gameHeader.onClick = () => {
    greeting();
  };

  gameContent.onAnswer = (target) => {
    const answers = getAnswers(target, gameContent.element);
    if (level.type === `game-3` || isAllAnswers(answers, options.length)) {
      gameState = saveAnswer(level, answers, gameState);
      const currentAnswer = gameState.answers[gameState.level].status;

      if (currentAnswer === `wrong`) {
        gameState = decreaseLives(gameState);
      }
      gameState = changeLevel(gameState);

      if (!canContinue(gameState)) {
        renderResult(gameState);
        return;
      }
      updateGame(gameState);
    }
  };
};

const startGame = () => {
  gameState = Object.assign({}, INITIAL_STATE);

  updateGame(gameState);
  changeScreen(gameContainerElement);
};

export default startGame;
