import {getStats} from './stats';
import {getOptions} from './options';
import {render} from '../util';

const renderLevel = (state, level) => {
  const template = `
  <section class="game">
    <p class="game__task">${level.question}</p>
    ${getOptions(level)}
    ${getStats(state)}
  </section>`

  const levelElement = render();
  levelElement.innerHTML = template;

  return levelElement;
};


export default renderLevel;
