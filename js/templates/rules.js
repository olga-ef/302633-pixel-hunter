import {render} from '../util';
import backButton from './back-button';
import startGame from '../game/start-game';

const template = `
    <section class="rules">
      <h2 class="rules__title">Правила</h2>
      <ul class="rules__description">
        <li>Угадай 10 раз для каждого изображения фото
          <img class="rules__icon" src="img/icon-photo.png" width="32" height="31" alt="Фото"> или рисунок
          <img class="rules__icon" src="img/icon-paint.png" width="32" height="31" alt="Рисунок"></li>
        <li>Фотографиями или рисунками могут быть оба изображения.</li>
        <li>На каждую попытку отводится 30 секунд.</li>
        <li>Ошибиться можно не более 3 раз.</li>
      </ul>
      <p class="rules__ready">Готовы?</p>
      <form class="rules__form">
        <input class="rules__input" type="text" placeholder="Ваше Имя">
        <button class="rules__button  continue" type="submit" disabled>Go!</button>
      </form>
    </section>`;

const renderRules = () => {
  const container = render();
  const header = document.createElement(`header`);
  header.classList.add(`header`);
  header.appendChild(renderButton());

  const content = render(template);

  container.appendChild(header);
  container.appendChild(content);

  const nextButton = container.querySelector(`.rules__button`);
  const rulesForm = container.querySelector(`.rules__form`);
  const rulesInput = container.querySelector(`.rules__input`);
  const rulesButton = container.querySelector(`.rules__button`);

  rulesInput.addEventListener(`input`, () => {
    rulesButton.disabled = rulesInput.value ? false : true;
  });
  rulesForm.addEventListener(`submit`, () => startGame());
};

export default renderRules;
