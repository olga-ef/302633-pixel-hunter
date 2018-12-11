import RulesView from '../views/rules-view';
import {HEADER_SHORT} from '../data/config';
import HeaderView from '../views/header-view';

class RulesScreen {
  constructor(callback1, callback2) {
    this.header = new HeaderView(HEADER_SHORT);
    this.rules = new RulesView(this.header);
    this.bind(callback1, callback2);
  }

  get element() {
    return this.rules.element;
  }

  bind(fnNext, fnBack) {
    this.rules.onSubmit = (playerName) => fnNext(playerName);
    this.header.onClick = () => fnBack();
  }
}

export default RulesScreen;
