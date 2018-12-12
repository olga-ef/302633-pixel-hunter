import AbstractView from '../abstract-view';

class ConfirmModalView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `<section class="modal">
      <form class="modal__inner">
        <button class="modal__close" type="button">
          <span class="visually-hidden">Закрыть</span>
        </button>
        <h2 class="modal__title">Подтверждение</h2>
        <p class="modal__text">Вы уверены что хотите начать игру заново?</p>
        <div class="modal__button-wrapper">
          <button class="modal__btn" id="confirm">Ок</button>
          <button class="modal__btn" id="cancel">Отмена</button>
        </div>
      </form>
    </section>`;
  }

  onConfirm() {}

  onCancel() {}

  bind() {
    const confirmBtn = this.element.querySelector(`#confirm`);
    const cancelBtn = this.element.querySelector(`#cancel`);
    const btnClose = this.element.querySelector(`.modal__close`);

    confirmBtn.addEventListener(`click`, (e) => {
      e.preventDefault();
      this.onConfirm();
    });

    cancelBtn.addEventListener(`click`, (e) => {
      e.preventDefault();
      this.onCancel();
    });

    btnClose.addEventListener(`click`, (e) => {
      e.preventDefault();
      this.onCancel();
    });
  }
}

export default ConfirmModalView;
