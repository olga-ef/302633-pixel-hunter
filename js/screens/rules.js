import {changeScreen} from '../util';
import RulesView from '../templates/rules-view';
import {HEADER_SHORT} from '../data/config';
import HeaderView from '../templates/header-view';
import greeting from './greeting';
import startGame from './game';

export default () => {
  const header = new HeaderView(HEADER_SHORT);
  const rules = new RulesView(header);

  rules.onSubmit = () => {
    startGame();
  };

  header.onClick = () => {
    greeting();
  };

  changeScreen(rules.element);
};
