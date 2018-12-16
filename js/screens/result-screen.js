import ResultView from '../views/result-view';
import HeaderView from '../views/header-view';
import ErrorModalView from '../views/modals/error-view';
import {HEADER_SHORT} from '../data/config';


class ResultScreen {
  constructor(state, onBack) {
    this.state = state;
    this.header = new HeaderView(HEADER_SHORT);
    this.result = new ResultView(this.header);
    this.errorModal = new ErrorModalView();
    this.bind(onBack);
  }

  get element() {
    return this.result.element;
  }

  bind(onBack) {
    this.header.onClick = () => onBack();
  }

  showError() {
    this.result.element.appendChild(this.errorModal.element);
  }

  showScores(data) {
    this.result.showScores(data);
  }
}

export default ResultScreen;
