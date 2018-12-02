import AbstractView from './abstract-view';
import {getStats} from './stats';

class ResultView extends AbstractView {
  constructor(state, score) {
    super();
    this.state = state;
    this.score = score;
    this.title = (this.score.finalScore === -1) ? `Поражение` : `Победа`;
  }

  get template() {
    return `<section class="result">
      <h2 class="result__title">${this.title}</h2>
      <table class="result__table">
        <tr>
          <td class="result__number">1.</td>
          <td colspan="2">
            ${getStats(this.state)}
          </td>
          <td class="result__points">${this.score.correct} × 100</td>
          <td class="result__total">${this.score.correct * 100}</td>
        </tr>
        <tr>
          <td></td>
          <td class="result__extra">Бонус за скорость:</td>
          <td class="result__extra">${this.score.fast} <span class="stats__result stats__result--fast"></span></td>
          <td class="result__points">× 50</td>
          <td class="result__total">${this.score.fast * 50}</td>
        </tr>
        <tr>
          <td></td>
          <td class="result__extra">Бонус за жизни:</td>
          <td class="result__extra">${this.state.lives} <span class="stats__result stats__result--alive"></span></td>
          <td class="result__points">× 50</td>
          <td class="result__total">${this.state.lives * 50}</td>
        </tr>
        <tr>
          <td></td>
          <td class="result__extra">Штраф за медлительность:</td>
          <td class="result__extra">${this.score.slow} <span class="stats__result stats__result--slow"></span></td>
          <td class="result__points">× 50</td>
          <td class="result__total">${this.score.slow * -50}</td>
        </tr>
        <tr>
          <td colspan="5" class="result__total  result__total--final">${this.score.finalScore !== -1 ? this.score.finalScore : `FAIL`}</td>
        </tr>
      </table>
      <table class="result__table">
        <tr>
          <td class="result__number">2.</td>
          <td>
            <ul class="stats">
              <li class="stats__result stats__result--wrong"></li>
              <li class="stats__result stats__result--slow"></li>
              <li class="stats__result stats__result--fast"></li>
              <li class="stats__result stats__result--correct"></li>
              <li class="stats__result stats__result--wrong"></li>
              <li class="stats__result stats__result--unknown"></li>
              <li class="stats__result stats__result--slow"></li>
              <li class="stats__result stats__result--wrong"></li>
              <li class="stats__result stats__result--fast"></li>
              <li class="stats__result stats__result--wrong"></li>
            </ul>
          </td>
          <td class="result__total"></td>
          <td class="result__total  result__total--final">fail</td>
        </tr>
      </table>
      <table class="result__table">
        <tr>
          <td class="result__number">3.</td>
          <td colspan="2">
            <ul class="stats">
              <li class="stats__result stats__result--wrong"></li>
              <li class="stats__result stats__result--slow"></li>
              <li class="stats__result stats__result--fast"></li>
              <li class="stats__result stats__result--correct"></li>
              <li class="stats__result stats__result--wrong"></li>
              <li class="stats__result stats__result--unknown"></li>
              <li class="stats__result stats__result--slow"></li>
              <li class="stats__result stats__result--unknown"></li>
              <li class="stats__result stats__result--fast"></li>
              <li class="stats__result stats__result--unknown"></li>
            </ul>
          </td>
          <td class="result__points">× 100</td>
          <td class="result__total">900</td>
        </tr>
        <tr>
          <td></td>
          <td class="result__extra">Бонус за жизни:</td>
          <td class="result__extra">2 <span class="stats__result stats__result--alive"></span></td>
          <td class="result__points">× 50</td>
          <td class="result__total">100</td>
        </tr>
        <tr>
          <td colspan="5" class="result__total  result__total--final">950</td>
        </tr>
      </table>
    </section>`;
  }
}

export default ResultView;

