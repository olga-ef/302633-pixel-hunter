import RulesView from '../views/rules-view';
import {HEADER_SHORT} from '../data/config';
import HeaderView from '../views/header-view';
import Application from '../application';

class RulesScreen {
  constructor() {
    this.header = new HeaderView(HEADER_SHORT);
    this.rules = new RulesView(this.header);
    this.bind()
  }

  get element() {
    return this.rules.element;
  }

  exit() {
    Application.showWelcome();
  }

  nextScreen(playerName) {
    Application.showGame(playerName);
  }

  bind(){
    this.rules.onSubmit = this.nextScreen;
    this.header.onClick = this.exit;
  }
}

export default RulesScreen;
