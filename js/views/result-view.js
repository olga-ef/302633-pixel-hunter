import AbstractView from './abstract-view';
import {getStats} from './stats';
import {Point} from '../util/config';
import calculateScore from '../game/score';

class ResultView extends AbstractView {
  constructor(header) {
    super();
    this.header = header.element;
  }

  get template() {
    return `<section class="result">
      <p>Результаты загружаются...</p>
    </section>`;
  }

  failResult() {
    return `<td class="result__total"></td>
      <td class="result__total  result__total--final">fail</td>`;
  }

  winResult(score) {
    return `<td class="result__points">${score.correct} × ${Point.BASE}</td>
      <td class="result__total">${score.correct * Point.BASE}</td>`;
  }

  mainRow(score, result, i, win) {
    return `<tr>
      <td class="result__number">${i + 1}.</td>
      <td colspan="2">
      ${getStats(result.stats)}
      </td>
      ${win ? this.winResult(score) : this.failResult()}
    </tr>`;
  }

  fastRow(score) {
    return `<tr>
      <td></td>
      <td class="result__extra">Бонус за скорость:</td>
      <td class="result__extra">${score.fast} <span class="stats__result stats__result--fast"></span></td>
      <td class="result__points">× ${Point.BONUS}</td>
      <td class="result__total">${score.fast * Point.BONUS}</td>
    </tr>`;
  }

  livesRow(lives) {
    return `<tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">${lives} <span class="stats__result stats__result--alive"></span></td>
        <td class="result__points">× ${Point.BONUS}</td>
        <td class="result__total">${lives * Point.BONUS}</td>
      </tr>`;
  }

  slowRow(score) {
    return `<tr>
      <td></td>
      <td class="result__extra">Штраф за медлительность:</td>
      <td class="result__extra">${score.slow} <span class="stats__result stats__result--slow"></span></td>
      <td class="result__points">× ${-Point.PENALTY}</td>
      <td class="result__total">${score.slow * -Point.PENALTY}</td>
    </tr>`;
  }

  showFailResult(score, result, i) {
    return `${this.mainRow(score, result, i)}`;
  }

  showWinResult(score, result, i) {
    return `${this.mainRow(score, result, i, true)}
      ${this.fastRow(score)}
      ${this.livesRow(result.lives)}
      ${this.slowRow(score)}
      <tr>
        <td colspan="5" class="result__total  result__total--final">${score.finalScore}</td>
      </tr>
    `;
  }

  afterRender() {
    this.element.insertAdjacentElement(`afterbegin`, this.header);
  }

  isWin(score) {
    return score.finalScore > -1;
  }

  getResultTable(results, scores) {
    return `
      <h2 class="result__title">${this.isWin(scores[0]) ? `Победа` : `Поражение`}</h2>
      ${results.map((result, i) => `<table class="result__table">
          ${this.isWin(scores[i]) ? this.showWinResult(scores[i], result, i) : this.showFailResult(scores[i], result, i)}
        </table>`).join(``)}
      `;
  }

  showScores(results) {
    results = results.reverse();
    const scores = results.map((result) => calculateScore(result.stats, result.lives));

    const resultTable = this.getResultTable(results, scores);
    const resultEelement = this.element.querySelector(`.result`);
    resultEelement.innerHTML = resultTable;
  }
}

export default ResultView;

