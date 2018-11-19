export const render = (template) => {
  const container = document.createElement(`div`);
  container.innerHTML = template.trim();
  return container;
};

const mainElement = document.querySelector(`#main`);
export const changeScreen = (screen) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(screen);
};
