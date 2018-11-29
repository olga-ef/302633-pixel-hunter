import showGameOver from '../templates/result';

const LAST_LEVEL = 10;

export const canContinue = (state) => state.level < LAST_LEVEL;

export const changeLevel = (state) => {
  if (typeof state.level !== `number`) {
    throw new Error(`Level should be a number`);
  }

  if (state.level < 0) {
    throw new Error(`Level should not be negative number`);
  }

  const newState = Object.assign({}, state);
  newState.level++;

  return newState;
};
