import AbstractView from './abstract-view';

class IntroView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `<section class="intro">
      <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </section>`;
  }

  onClick() {

  }

  changeButtonColor() {
    this.element.querySelector(`.intro__asterisk`).style.color = `red`;
  }

  addAnimation() {
    const introElement = this.element.querySelector(`.intro`);
    introElement.classList.add(`intro--animated`);
  }

  bind() {
    const nextButton = this.element.querySelector(`.intro__asterisk`);
    nextButton.addEventListener(`click`, (e) => {
      e.preventDefault();
      this.onClick();
    });
  }
}

export default IntroView;
