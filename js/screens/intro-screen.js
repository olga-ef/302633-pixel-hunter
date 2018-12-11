import IntroView from '../views/intro-view';

class IntroScreen {
  constructor(callback) {
    this.intro = new IntroView();
    this.bind(callback);
  }

  get element() {
    return this.intro.element;
  }

  bind(fn) {
    this.intro.onClick = fn;
  }
}

export default IntroScreen;
