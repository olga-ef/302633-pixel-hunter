import WelcomeView from '../views/welcome-view';
import Application from '../application';


class WelcomeScreen {
  constructor() {
    this.welcome = new WelcomeView();
    this.bind();
  }

  get element() {
    return this.welcome.element;
  }

  nextScreen() {
    Application.showRules();
  }

  bind() {
    this.welcome.onClick = this.nextScreen;
  }
}

export default WelcomeScreen;
