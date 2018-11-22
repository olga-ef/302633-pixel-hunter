export const changeLevel = (state, level) => {
  if (typeof level !== `number`) {
    throw new Error(`Level should be a number`);
  }

  if (level < 0) {
    throw new Error(`Level should not be negative number`);
  }

  const newState = Object.assign({}, state, {level});
  return newState;
};
