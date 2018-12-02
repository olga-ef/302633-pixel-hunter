import {changeScreen} from '../util';
import IntroView from '../templates/intro-view';
import greeting from './greeting.js';

export default () => {
  const intro = new IntroView();

  intro.onClick = () => {
    greeting();
  };

  changeScreen(intro.element);
};
