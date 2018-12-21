const STATS_BAR_LENGTH = 10;

export const getStats = (answers) => `<ul class="stats">
  ${answers.map((answer) => `
    <li class="stats__result stats__result--${answer}"></li>`)
    .join(``)}
  ${new Array(STATS_BAR_LENGTH - answers.length)
    .fill(`<li class="stats__result stats__result--unknown"></li>`)
    .join(``)}
</ul>`;
