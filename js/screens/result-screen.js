import ResultView from '../views/result-view';
import HeaderView from '../views/header-view';
import {HEADER_SHORT} from '../data/config';
import calculateScore from '../game/score';
import Application from '../application';

class ResultScreen {
  constructor(state) {
    this.state = state;
    this.score = calculateScore(this.state.answers, this.state.lives);
    this.header = new HeaderView(HEADER_SHORT);
    this. result = new ResultView(this.state, this.score, this.header);
    this.bind();
  }

  get element() {
    return this.result.element;
  }

  exit() {
    Application.showWelcome();
  }

  bind() {
    this.header.onClick = this.exit;
  }
}

export default ResultScreen;
