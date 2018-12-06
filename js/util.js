export const getElementFromTemplate = (template) => {
  const container = document.createElement(`div`);
  container.innerHTML = template;
  return container;
};

export const render = (html = ``) => {
  const container = document.createElement(`div`);
  container.innerHTML = html;
  return container;
};

const mainElement = document.querySelector(`#main`);

export const changeScreen = (...elements) => {
  mainElement.innerHTML = ``;
  elements.forEach((element) => mainElement.appendChild(element));
};
