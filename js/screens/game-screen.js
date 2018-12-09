import {changeScreen} from '../util';
import HeaderView from '../views/header-view';
import {INITIAL_STATE, HEADER_FULL} from '../data/config';
import LEVELS from '../data/game-data';
import LevelView from '../views/level-view';
import {decreaseLives} from '../game/lives';
import {changeLevel, canContinue} from '../game/level';
import {isAllAnswers, checkAnswer} from '../game/answer';
import Application from '../application';
import ConfirmView from '../views/modals/confirm-view';

class GameScreen {
  constructor(model) {
    this.model = model;
    this.header = new HeaderView(HEADER_FULL, this.model.state);
    this.level = new LevelView(this.model.state, this.model.getCurrentLevel(), this.header);
    this.confirmForm = new ConfirmView();
    this._timer = null;
  }

  get element () {
    return this.level.element;
  }

  updateHeader() {
    const header = new HeaderView(HEADER_FULL, this.model.state);
    header.onClick = this.showModal.bind(this);
    this.level.element.replaceChild(header.element, this.header.element);
    this.header = header;
  }

  // смена уровня
  changeLevel() {
    const level = new LevelView(this.model.state, this.model.getCurrentLevel(), this.header);
    this.level = level;
    this.updateHeader();
    level.onAnswer = this.answer.bind(this);
    changeScreen(level.element);
  }

  // запуск таймера
  _tick() {
    if(!this.model.isTimeEnd()) {
      this.model.tick()
      this.updateHeader();
      const timer = null;
      this._timer = setTimeout(() => this._tick(), 1000);
      return;
    }
    this.stopGame();
    this.model.addAnswer();
    this.model.decreaseLives();
    this.endLevel(!this.model.isDead());
  }

  // запуск игры
  startGame() {
    this.changeLevel();
    this._tick();
  }

  stopGame() {
    clearInterval(this._timer);
  }

  // закончить уровень
  endLevel(canContinue) {
    if (canContinue && this.model.isNextLevel()) {
      this.model.nextLevel();
      this.model.restartTime();
      this.startGame();
      return;
    }
    Application.ShowResult(this.model.state);
  }

  // обраотка ответа
  answer(answers, level) {
    if (!isAllAnswers(answers, level.type)) {
      return;
    }
    this.stopGame();
    const answerStatus = checkAnswer(level, answers, this.model.state.time);
    this.model.addAnswer(answerStatus);

    if (answerStatus === `wrong`) {
      this.model.decreaseLives();
    }
    this.endLevel(!this.model.isDead());
  }

  exit() {
    Application.showWelcome();
  }

  removeModal() {
    this.level.element.removeChild(this.confirmForm.element);
  }

  showModal() {
    this.confirmForm.onConfirm = this.exit.bind(this);
    this.confirmForm.onCancel = this.removeModal.bind(this);
    this.level.element.appendChild(this.confirmForm.element);
  }
}

export default GameScreen;
