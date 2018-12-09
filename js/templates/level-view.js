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

  getAnswers(levelType, target) {
    if (levelType === `game3`) {
      let currentTarget = target;
      while (!currentTarget.classList.contains(`game__option`)) {
        currentTarget = currentTarget.parentElement;
      }
      return [currentTarget];
    }
    const answers = Array.from(this.element.querySelectorAll(`.game__option input`));
     const checked = answers.filter((answer) => answer.checked)
     return checked;
  }

  onAnswer() {

  }

  bind() {
    const answersElement = this.element.querySelector(`.game__content`);
    this.element.addEventListener(`click`, (e) => {
      if (e.target.tagName === 'INPUT' || this.level.type === `game3`) {
        const answers = this.getAnswers(this.level.type, e.target);
        console.log(answers)
        this.onAnswer(answers, this.level);
      }
    });
  }
}

export default LevelView;

