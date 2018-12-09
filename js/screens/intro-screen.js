import IntroView from '../views/intro-view';
import Application from '../application';


class IntroScreen {
  constructor() {
    this.intro = new IntroView();
    this.bind();
  }

  get element() {
    return this.intro.element;
  }
  nextScreen() {
    Application.showWelcome()
  }

  bind() {
    this.intro.onClick = this.nextScreen;
  }
}

export default IntroScreen;
