export const tick = (state) => {
  if (state.time <= 0) {
    return -1;
  }
  const newState = Object.assign({}, state);
  --newState.time;
  return newState;
};
