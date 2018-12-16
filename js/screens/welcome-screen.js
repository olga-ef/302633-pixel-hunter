import WelcomeView from '../views/welcome-view';


class WelcomeScreen {
  constructor(onNext) {
    this.welcome = new WelcomeView();
    this.bind(onNext);
  }

  get element() {
    return this.welcome.element;
  }

  bind(onNext) {
    this.welcome.onClick = onNext;
  }
}

export default WelcomeScreen;
