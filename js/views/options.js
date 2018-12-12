const CONTENT_CLASS = {
  game1: ``,
  game2: `game__content--wide`,
  game3: `game__content--triple`
};

const IMAGE_SIZE = {
  game1: {width: 468, height: 458},
  game2: {width: 705, height: 455},
  game3: {width: 304, height: 455}
};

const getLabels = (level, i, key) => {
  if (level.type !== `game3`) {
    return `<label class="game__answer game__answer--photo">
      <input class="visually-hidden" name="question${i + 1}" type="radio" value="photo" data-key="${key}">
      <span>Фото</span>
    </label>
    <label class="game__answer game__answer--paint">
      <input class="visually-hidden" name="question${i + 1}" type="radio" value="paint" data-key="${key}">
      <span>Рисунок</span>
    </label>`;
  }
  return null;
};

export const getOptions = (level) => {
  return `<form class="game__content ${CONTENT_CLASS[level.type]}">
    ${[...level.options].map((option, i) => `
      <div class="game__option" data-key="${option.key}" >
         <img src="${option.image}" width="${IMAGE_SIZE[level.type].width}" height="${IMAGE_SIZE[level.type].height}">
         ${getLabels(level, i, option.key)}
      </div>`).join(``)}
   </form>`;
};

