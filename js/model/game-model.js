import QUESTIONS from '../data/game-data';
import {INITIAL_STATE} from '../data/config';
import {changeLevel} from '../game/level';
import {decreaseLives} from '../game/lives';
import {tick} from '../game/time';
import {addAnswer} from '../game/answer';

const getLevel = (level) => QUESTIONS[level];

class GameModel {
  constructor(playerName) {
    this.playerName = playerName;
    this.restart();
  }

  // выводит текущее состояние
  get state() {
    return Object.freeze(this._state);
  }

  // сбрасывает состояние до начального
  restart() {
    this._state = INITIAL_STATE;
  }

  // проверяет есть ли следующий уровень
  isNextLevel() {
    return getLevel(this._state.level + 1) !== void 0;
  }

  // увеличивает уровень
  nextLevel() {
    this._state = changeLevel(this._state);
  }

  // получает текущий уровень
  getCurrentLevel() {
    return getLevel(this._state.level);
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
}

export default GameModel;
