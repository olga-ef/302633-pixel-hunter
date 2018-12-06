import AbstractView from './abstract-view';
import {getStats} from './stats';
import {getOptions} from './options';

class LevelView extends AbstractView {
  constructor(state, level, header) {
    super();
    this.state = state;
    this.level = level;
    this.header = header.element;
  }

  get template() {
    return `<section class="game">
      <p class="game__task">${this.level.question}</p>
      ${getOptions(this.level)}
      ${getStats(this.state)}
    </section>`;
  }

  afterRender() {
    this.element.insertAdjacentElement(`afterbegin`, this.header);
  }

  onAnswer() {

  }

  bind() {
    const answersElement = this.element.querySelector(`.game__content`);

    answersElement.addEventListener(`click`, ({target}) => {
      this.onAnswer(target);
    });
  }
}

export default LevelView;

