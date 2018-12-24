import ResultView from '../views/result-view';
import HeaderView from '../views/header-view';
import ErrorModalView from '../views/modals/error-view';
import {HEADER_SHORT, ANSWERS_LIMIT, Result} from '../util/config';


class ResultScreen {
  constructor(state, onBack) {
    this.state = state;
    this.header = new HeaderView(HEADER_SHORT);
    this.result = new ResultView(this.header);
    this.win = this.isWin();
    this.bind(onBack);
  }

  get element() {
    return this.result.element;
  }

  bind(onBack) {
    this.header.onClick = () => onBack();
  }
  isWin() {
    const rightAnswers = this.state.answers.filter((answer) => answer !== Result.WRONG);
    return rightAnswers.length >= ANSWERS_LIMIT;
  }

  showError(error) {
    const errorModal = new ErrorModalView(error);
    this.result.element.appendChild(errorModal.element);
  }

  showScores(data) {
    this.result.showScores(data);
  }
}

export default ResultScreen;
