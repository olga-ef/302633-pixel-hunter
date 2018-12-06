import {changeScreen} from '../util';
import greeting from './greeting';
import HeaderView from '../templates/header-view';
import {INITIAL_STATE, HEADER_FULL} from '../data/config';
import LEVELS from '../data/game-data';
import LevelView from '../templates/level-view';
import {decreaseLives} from '../game/lives';
import {changeLevel, canContinue} from '../game/level';
import {getAnswers, isAllAnswers, saveAnswer} from '../game/answer';
import renderResult from './result';

let gameState;

const getLevel = (state) => LEVELS[state.level];

const updateGame = (state) => {
  const level = getLevel(state);

  const gameHeader = new HeaderView(HEADER_FULL, state);
  const gameContent = new LevelView(state, level, gameHeader);

  const options = gameContent.element.querySelectorAll(`.game__option`);

  gameHeader.onClick = () => {
    greeting();
  };

  gameContent.onAnswer = (target) => {
    const answers = getAnswers(target, gameContent.element);
    if (level.type === `game3` || isAllAnswers(answers, options.length)) {
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

  changeScreen(gameContent.element);
};

const startGame = () => {
  gameState = Object.assign({}, INITIAL_STATE);
  updateGame(gameState);
};

export default startGame;
