import {changeScreen} from '../util';
import GreetingView from '../templates/greeting-view';
import renderRules from './rules';

export default () => {
  const greeting = new GreetingView();

  greeting.onClick = () => {
    renderRules();
  };

  changeScreen(greeting.element);
};
