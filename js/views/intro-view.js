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

  addAnimation() {
    const intro = this.element.querySelector(`.intro`);
    intro.classList.add(`intro--animated`);
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
