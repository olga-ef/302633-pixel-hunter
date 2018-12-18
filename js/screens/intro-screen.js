import IntroView from '../views/intro-view';
import ErrorModalView from '../views/modals/error-view';

class IntroScreen {
  constructor(onNext) {
    this.intro = new IntroView();
    this.errorModal = new ErrorModalView();
    this.bind(onNext);
  }

  get element() {
    return this.intro.element;
  }

  bind(onNext) {
    this.intro.onClick = onNext;
  }

  addAnimation() {
    this.intro.addAnimation();
  }

  showError() {
    this.intro.element.appendChild(this.errorModal.element);
  }
}

export default IntroScreen;
