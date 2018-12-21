const mainElement = document.querySelector(`#main`);

export const changeScreen = (screen, isFade = false) => {
  if (!isFade) {
    mainElement.innerHTML = ``;
  }
  mainElement.appendChild(screen.element);
};
