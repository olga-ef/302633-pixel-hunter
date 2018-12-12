import ResultView from '../views/result-view';
import HeaderView from '../views/header-view';
import {HEADER_SHORT} from '../data/config';
import calculateScore from '../game/score';

class ResultScreen {
  constructor(state, callBack) {
    this.state = state;
    this.score = calculateScore(this.state.answers, this.state.lives);
    this.header = new HeaderView(HEADER_SHORT);
    this.result = new ResultView(this.state, this.score, this.header);
    this.bind(callBack);
  }

  get element() {
    return this.result.element;
  }

  bind(fn) {
    this.header.onClick = () => fn();
  }
}

export default ResultScreen;
