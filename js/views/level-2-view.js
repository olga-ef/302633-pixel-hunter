import LevelView from './level-view';
const DEBUG = true;

class Level2View extends LevelView {
  constructor(state, level, header) {
    super(state, level, header);
  }

  getOptions(level) {
    return `<form class="game__content game__content--triple">
    ${[...level.answers].map((answer) => `
      <div class="game__option" data-key="${answer.image.url}" >
         <img src="${answer.image.url}" width="${answer.image.width}" height="${answer.image.height}">
         ${DEBUG ? `<span style="font-size: 18px; text-align: center;">${answer.type}</span>` : ``}
      </div>`).join(``)}
   </form>`;
  }

  getAnswers(e) {
    const answer = e.target.closest(`.game__option`);
    return [answer];
  }
}

export default Level2View;
