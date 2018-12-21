import {INITIAL_STATE} from '../util/config';
import {changeLevel} from '../game/level';
import {decreaseLives} from '../game/lives';
import {tick} from '../game/time';
import {addAnswer} from '../game/answer';

const getLevel = (data, level) => data[level];

class GameModel {
  constructor(data, playerName) {
    this.playerName = playerName;
    this.data = data;
    this.restart();
  }

  get state() {
    return Object.freeze(this._state);
  }

  // сбрасывает состояние до начального
  restart() {
    this._state = Object.assign({}, INITIAL_STATE);
    this.clearAnswers();
  }

  // проверяет есть ли следующий уровень
  isNextLevel() {
    return getLevel(this.data, this._state.level + 1) !== void 0;
  }

  // увеличивает уровень
  nextLevel() {
    this._state = changeLevel(this._state, this.data);
  }

  // получает текущий уровень
  getCurrentLevel() {
    return getLevel(this.data, this._state.level);
  }

  // проверяет отстались ли еще жизни
  isDead() {
    return this._state.lives <= 0;
  }

  // Отнимает жизнь
  decreaseLives() {
    this._state = decreaseLives(this._state);
  }

  // проверяет сколько осталось времени
  isTimeEnd() {
    return this._state.time <= 0;
  }

  restartTime() {
    this._state.time = INITIAL_STATE.time;
  }

  // меняет время
  tick() {
    this._state = tick(this._state);
  }

  // сохраняет ответ
  addAnswer(answer = `wrong`) {
    this._state = addAnswer(this._state, answer);
  }

  clearAnswers() {
    this._state.answers = [];
  }
}

export default GameModel;
