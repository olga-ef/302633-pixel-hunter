import AbstractView from './abstract-view';

class RulesView extends AbstractView {
  constructor(header) {
    super();
    this.header = header.element;
  }

  get template() {
    return `
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
  }

  afterRender() {
    this.element.insertAdjacentElement(`afterbegin`, this.header);
  }

  onInput(btn, input) {
    btn.disabled = !input.value;
  }

  onSubmit() {

  }

  bind() {
    const rulesForm = this.element.querySelector(`.rules__form`);
    const rulesInput = this.element.querySelector(`.rules__input`);
    const rulesButton = this.element.querySelector(`.rules__button`);

    rulesInput.addEventListener(`input`, () => this.onInput(rulesButton, rulesInput));
    rulesForm.addEventListener(`submit`, (e) => {
      e.preventDefault();
      this.onSubmit(rulesInput.value);
    });
  }
}

export default RulesView;
