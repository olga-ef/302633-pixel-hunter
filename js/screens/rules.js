import {changeScreen} from '../util';
import RulesView from '../templates/rules-view';
import renderHeader from './header';
import {HEADER_SHORT} from '../data/config';
import startGame from './game.js';

export default () => {
  const rules = new RulesView();
  const header = renderHeader(HEADER_SHORT);

  rules.onInput = (btn, input) => {
    btn.disabled = input.value ? false : true;
  };

  rules.onSubmit = () => {
    startGame();
  };

  changeScreen(header.element, rules.element);
};
