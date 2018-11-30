export const getOptions = (level) => {
  if (level.type === `game-3`) {
    return `<form class="game__content game__content--triple">
    ${[...level.options].map((option, i) => `
      <div class="game__option" data-key="${option.key}">
        <img src="${option.image}" alt="Option ${i + 1}" width="304" height="455">
      </div>`).join(``)}
    </form>`;
  }
  return `<form class="game__content ${level.type === `game-2` ? `game__content--wide` : ``}">
    ${[...level.options].map((option, i) => `
      <div class="game__option">
        <img src="${option.image}" width="468" height="458">
        <label class="game__answer game__answer--photo">
          <input class="visually-hidden" name="question${i + 1}" type="radio" value="photo" data-key="${option.key}">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input class="visually-hidden" name="question${i + 1}" type="radio" value="paint" data-key="${option.key}">
          <span>Рисунок</span>
        </label>
      </div>`).join(``)}
  </form>`;
};
