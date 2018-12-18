import {LevelType} from '../data/config';
import {resizeImage} from '../game/resize';
const DEBUG = true;

const getContentClass = (levelType) => {
  let contentClass;
  switch (levelType) {
    case LevelType.GAME_1:
      contentClass = ``;
      break;
    case LevelType.GAME_2:
      contentClass = `game__content--wide`;
      break;
    case LevelType.GAME_3:
      contentClass = `game__content--triple`;
      break;
  }
  return contentClass;
};

const getLabels = (level, i, key) => {
  if (level.type !== LevelType.GAME_3) {
    return `<label class="game__answer game__answer--photo">
      <input class="visually-hidden" name="question${i + 1}" type="radio" value="photo" data-key="${key}">
      <span>Фото</span>
    </label>
    <label class="game__answer game__answer--paint">
      <input class="visually-hidden" name="question${i + 1}" type="radio" value="painting" data-key="${key}">
      <span>Рисунок</span>
    </label>`;
  }
  return null;
};

export const getOptions = (level) => {
  return `<form class="game__content ${getContentClass(level.type)}">
    ${[...level.answers].map((answer, i) => `
      <div class="game__option" data-key="${answer.image.url}" >
         <img src="${answer.image.url}" width="${answer.image.width}" height="${answer.image.height}">
         ${getLabels(level, i, answer.image.url)}
         ${DEBUG ? `<span style="font-size: 18px; padding: 10px 0;">${answer.type}</span>` : ``}
      </div>`).join(``)}
   </form>`;
};

