import AbstractView from './abstract-view';
import {getStats} from './stats';
import {resizeImage} from '../game/resize';

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
      ${this.getOptions(this.level)}
      ${getStats(this.state.answers)}
    </section>`;
  }

  afterRender() {
    this.element.insertAdjacentElement(`afterbegin`, this.header);
  }

  getOptions() {
  }

  getAnswers() {
  }

  onAnswer() {
  }

  bind() {
    const answersElement = this.element.querySelector(`.game__content`);
    const images = Array.from(answersElement.querySelectorAll(`img`));
    resizeImage(images);
    answersElement.addEventListener(`click`, (e) => {
      const answers = this.getAnswers(e);
      if (answers) {
        this.onAnswer(answers, this.level);
      }
    });
  }
}

export default LevelView;

