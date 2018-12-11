import WelcomeView from '../views/welcome-view';


class WelcomeScreen {
  constructor(callback) {
    this.welcome = new WelcomeView();
    this.bind(callback);
  }

  get element() {
    return this.welcome.element;
  }

  bind(fn) {
    this.welcome.onClick = fn;
  }
}

export default WelcomeScreen;
