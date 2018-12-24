import IntroView from '../views/intro-view';
import ErrorModalView from '../views/modals/error-view';

class IntroScreen {
  constructor() {
    this.intro = new IntroView();
  }

  get element() {
    return this.intro.element;
  }

  activateButton(onNext) {
    this.intro.changeButtonColor();
    this.intro.onClick = onNext(true);
  }

  addAnimation() {
    this.intro.addAnimation();
  }

  showError(error) {
    const errorModal = new ErrorModalView(error);
    this.intro.element.appendChild(errorModal.element);
  }
}

export default IntroScreen;
