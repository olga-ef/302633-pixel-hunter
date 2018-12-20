import LevelView from './level-view';
import {DEBUG} from '../util/settings';

class Level2View extends LevelView {
  constructor(state, level, header) {
    super(state, level, header);
  }

  getOptions(level) {
    return `<form class="game__content game__content--triple">
    ${[...level.answers].map((answer) => `
      <div class="game__option" data-key="${answer.image.url}" >
         <img src="${answer.image.url}" width="${answer.image.width}" height="${answer.image.height}">
         ${DEBUG ? `<span class="debug">${answer.type}</span>` : ``}
      </div>`).join(``)}
   </form>`;
  }

  getAnswers(e) {
    const answer = e.target.closest(`.game__option`);
    return [answer];
  }
}

export default Level2View;
