import {changeScreen} from '../util';
import ResultView from '../templates/result-view';
import HeaderView from '../templates/header-view';
import greeting from './greeting';
import {HEADER_SHORT} from '../data/config';
import calculateScore from '../game/score';

export default (state) => {
  const score = calculateScore(state.answers, state.lives);
  const header = new HeaderView(HEADER_SHORT);
  const result = new ResultView(state, score, header);

  header.onClick = () => {
    greeting();
  };

  changeScreen(result.element);
};
