export const decreaseLives = (state) => {
  if (typeof state.lives !== `number`) {
    throw new Error(`state.live should be a number`);
  }
  if (state.lives <= 0) {
    return -1;
  }
  const newState = Object.assign({}, state);
  --newState.lives;
  return newState;
};
