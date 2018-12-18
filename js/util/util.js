export const render = (html = ``) => {
  const container = document.createElement(`div`);
  container.innerHTML = html;
  return container;
};

const mainElement = document.querySelector(`#main`);

export const changeScreen = (screen, isFade) => {
  if(!isFade) {
    mainElement.innerHTML = ``;
  }
  mainElement.appendChild(screen.element);
};
