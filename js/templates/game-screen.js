import {getStats} from './stats';
import {getOptions} from './options';

const renderLevel = (state, level) => `
  <section class="game">
    <p class="game__task">${level.question}</p>
    ${getOptions(level)}
    ${getStats(state)}
  </section>`;

export default renderLevel;
