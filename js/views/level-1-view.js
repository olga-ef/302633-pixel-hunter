import LevelView from './level-view';
import {LevelType} from '../util/config';

const DEBUG = true;

class Level1View extends LevelView {
  constructor(state, level, header) {
    super(state, level, header);
    this.level = level;
  }

  getOptions(level) {
    return `<form class="game__content ${level.type === LevelType.GAME_2 ? `game__content--wide` : ``}">
    ${[...level.answers].map((answer, i) => `
      <div class="game__option">
        <img src="${answer.image.url}" width="${answer.image.width}" height="${answer.image.height}">
        <label class="game__answer game__answer--photo">
         <input class="visually-hidden" name="question${i + 1}" type="radio" value="photo" data-key="${answer.image.url}">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input class="visually-hidden" name="question${i + 1}" type="radio" value="painting" data-key="${answer.image.url}">
          <span>Рисунок</span>
        </label>
           ${DEBUG ? `<span style="font-size: 18px; text-align: center;">${answer.type}</span>` : ``}
      </div>`).join(``)}
   </form>`;
  }

  isAllAnswers(answers) {
    return answers.length === this.level.answers.length;
  }

  getAnswers(e) {
    if (e.target.tagName === `INPUT`) {
      const answers = Array.from(this.element.querySelectorAll(`.game__option input`));
      const checked = answers.filter((answer) => answer.checked);
      if (this.isAllAnswers(checked)) {
        return checked;
      }
    }
    return null;
  }
}

export default Level1View;
