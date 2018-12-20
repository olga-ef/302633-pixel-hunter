import RulesView from '../views/rules-view';
import {HEADER_SHORT} from '../util/config';
import HeaderView from '../views/header-view';

class RulesScreen {
  constructor(onNext, onBack) {
    this.header = new HeaderView(HEADER_SHORT);
    this.rules = new RulesView(this.header);
    this.bind(onNext, onBack);
  }

  get element() {
    return this.rules.element;
  }

  bind(onNext, onBack) {
    this.rules.onSubmit = (playerName) => onNext(playerName);
    this.header.onClick = () => onBack();
  }
}

export default RulesScreen;
