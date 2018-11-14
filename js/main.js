'use strict';

(function () {
  const ARROW_RIGHT = 39;
  const ARROW_LEFT = 37;
  const pagesOrder = [`intro`, `greeting`, `rules`, `game-1`, `game-2`, `game-3`, `stats`];

  const screens = pagesOrder.map((id) => document.querySelector(`#${id}`));
  const mainElement = document.querySelector(`#main`);

  let currentIndex = 0;

  const wrap = (it) => {
    const shadow = document.createElement(`div`);
    const content = it.content.cloneNode(true);
    shadow.appendChild(content);
    return shadow.cloneNode(true);
  };

  const renderScreen = (index) => {
    deleteScreen();
    const currentScreen = wrap(screens[index]);

    mainElement.appendChild(currentScreen);
  };

  const showNextScreen = () => {
    if (currentIndex === screens.length - 1) return;
    currentIndex++;
    renderScreen(currentIndex);
  };

  const showPrevScreen = () => {
    if (currentIndex === 0) return;
    currentIndex--;
    renderScreen(currentIndex);
  };

  const deleteScreen = () => {
    const screen = mainElement.querySelector(`#main > div`);
    if (screen) {
      screen.remove();
    }
  };

  const keydownHandler = (e) => {
    if (e.keyCode === ARROW_RIGHT) {
      showNextScreen();
    }
    if (e.keyCode === ARROW_LEFT) {
      showPrevScreen();
    }
  };

  const renderArrows = () => {
    const arrowsWrap = document.createElement(`div`);
    arrowsWrap.classList.add(`arrows__wrap`);
    arrowsWrap.innerHTML = `
      <style>
        .arrows__wrap {
          position: absolute;
          top: 95px;
          left: 50%;
          margin-left: -56px;
        }
        .arrows__btn {
          background: none;
          border: 2px solid black;
          padding: 5px 20px;
        }
      </style>
      <button class="arrows__btn" id="arrow-left"><-</button>
      <button class="arrows__btn" id="arrow-right">-></button>`;

    document.body.appendChild(arrowsWrap);
  };

  const arrowClickHandler = (e) => {
    if (e.target.getAttribute(`id`) === `arrow-left`) {
      showPrevScreen();
    }
    if (e.target.getAttribute(`id`) === `arrow-right`) {
      showNextScreen();
    }
  };

  renderScreen(currentIndex);
  renderArrows();
  document.addEventListener(`keydown`, keydownHandler);
  const arrows = document.querySelectorAll(`.arrows__btn`);
  arrows.forEach((arrow) => arrow.addEventListener(`click`, arrowClickHandler));
})();
