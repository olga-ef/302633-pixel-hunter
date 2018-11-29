export const getLevel = (levels, state) => levels[state.level];

export const updateGame = (state, level) => {
  headerElement.innerHTML = renderHeader(state);
  const gameScreen = renderLevel(state, getLevel(level));
  levelElement.innerHTML = ``;
  levelElement.appendChild(gameScreen);
};
