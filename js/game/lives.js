export const decreaseLives = (state) => {
  if (typeof state.lives !== `number`) {
    throw new Error(`state.live should be a number`);
  }
  const newState = Object.assign({}, state);
  --newState.lives;

  return newState;
};
