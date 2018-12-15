import IntroView from '../views/intro-view';
import ErrorModalView from '../views/modals/error-view';

class IntroScreen {
  constructor(callback) {
    this.intro = new IntroView();
    this.errorModal = new ErrorModalView();
    this.bind(callback);
  }

  get element() {
    return this.intro.element;
  }

  bind(fn) {
    this.intro.onClick = fn;
  }

  showError() {
    this.intro.element.appendChild(this.errorModal.element);
  }
}

export default IntroScreen;
