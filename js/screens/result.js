import {changeScreen} from '../util';
import ResultView from '../templates/result-view';
import {HEADER_SHORT} from '../data/config';
import calculateScore from '../game/score';
import renderHeader from './header';

export default (state) => {
  const score = calculateScore(state.answers, state.lives);
  const result = new ResultView(state, score);
  const header = renderHeader(HEADER_SHORT);

  changeScreen(header.element, result.element);
};
