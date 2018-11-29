import {INITIAL_STATE} from '../data/initial-state';
import LEVELS from '../data/game-data';
import {render, changeScreen} from '../util';
import {renderHeader, HEADER_FULL} from '../templates/header';
import renderLevel from '../templates/game-screen';
import {decreaseLives} from './lives';
import {changeLevel, canContinue} from './level';
import {getAnswers, isAllAnswers, saveAnswer} from './answer';
import showGameOver from '../templates/result';

let gameState;

const startGame = () => {
  gameState = Object.assign({}, INITIAL_STATE);

  const gameContainerElement = render();

  const getLevel = () => LEVELS[gameState.level];

  const updateGame = (state) => {
    const level = getLevel();

    const headerElement = renderHeader(HEADER_FULL, state);
    const levelElement = renderLevel(state, level);

    gameContainerElement.innerHTML = ``;
    gameContainerElement.appendChild(headerElement);
    gameContainerElement.appendChild(levelElement);

    const options = levelElement.querySelectorAll(`.game__option`);
    const form = levelElement.querySelector(`.game__content`);

    form.addEventListener(`click`, ({target}) => {
      const answers = getAnswers(target, levelElement);
      if (level.type === `game-3` || isAllAnswers(answers, options.length)) {
        gameState = saveAnswer(level, answers, gameState);
        const currentAnswer = gameState.answers[gameState.level].status;
        if (currentAnswer === `wrong`) {
          gameState = decreaseLives(gameState);
        }
        gameState = changeLevel(gameState);
        if (!canContinue(gameState)) {
          showGameOver(gameState);
          return;
        }

        updateGame(gameState);
      }
    });
  };

  updateGame(gameState);
  changeScreen(gameContainerElement);
};

export default startGame;