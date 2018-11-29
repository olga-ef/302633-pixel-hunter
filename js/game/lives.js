import showGameOver from '../templates/result';
const canContinue = (state) => state.lives !== 0;

export const decreaseLives = (state) => {
  if (typeof state.lives !== `number`) {
    throw new Error(`state.live should be a number`);
  }
  const newState = Object.assign({}, state);
  --newState.lives;

  if (!canContinue(newState)) {
    showGameOver(newState);
  }
  return newState;
};
