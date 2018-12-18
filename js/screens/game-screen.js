import {changeScreen} from '../util/util';
import HeaderView from '../views/header-view';
import {HEADER_FULL, DANGER_TIME, ONE_SECOND} from '../util/config';
import LevelView from '../views/level-view';
import {isAllAnswers, checkAnswer} from '../game/answer';
import ConfirmView from '../views/modals/confirm-view';

class GameScreen {
  constructor(model, onNext, onBack) {
    this.model = model;
    this.header = new HeaderView(HEADER_FULL, this.model.state);
    this.level = new LevelView(this.model.state, this.model.getCurrentLevel(), this.header);
    this.confirmForm = new ConfirmView();
    this._timer = null;
    this.bind(onNext, onBack);
  }

  get element() {
    return this.level.element;
  }

  bind(onNext, onBack) {
    this.exit = () => {
      this.stopGame();
      onBack();
    };
    this.endGame = (state) => onNext(state);
  }

  updateTime() {
    this.header.updateTime(this.model.state.time);
  }

  updateHeader() {
    const header = new HeaderView(HEADER_FULL, this.model.state);
    header.onClick = () => this.showModal(this.confirmForm);
    this.level.element.replaceChild(header.element, this.header.element);
    this.header = header;
  }

  // смена уровня
  changeLevel() {
    const level = new LevelView(this.model.state, this.model.getCurrentLevel(), this.header);
    this.level = level;
    this.updateHeader();
    level.onAnswer = this.answer.bind(this);
    changeScreen(level);
  }

  // запуск таймера
  _tick() {
    if (!this.model.isTimeEnd()) {
      if (this.model.state.time <= DANGER_TIME) {
        this.header.startBlink();
      }
      this.model.tick();
      this.updateTime();
      this._timer = setTimeout(() => this._tick(), ONE_SECOND);
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
  endLevel() {
    if (!this.model.isDead() && this.model.isNextLevel()) {
      this.model.nextLevel();
      this.model.restartTime();
      this.startGame();
      return;
    }
    this.endGame(this.model);
  }

  // обраотка ответа
  answer(answers, level) {
    if (!isAllAnswers(answers, level)) {
      return;
    }
    this.stopGame();
    const answerStatus = checkAnswer(level, answers, this.model.state.time);
    this.model.addAnswer(answerStatus);

    if (answerStatus === `wrong`) {
      this.model.decreaseLives();
    }
    this.endLevel();
  }

  removeModal(parentElement, element) {
    parentElement.removeChild(element);
  }

  showModal(form) {
    form.onConfirm = () => this.exit();
    form.onCancel = () => this.removeModal(this.level.element, this.confirmForm.element);
    this.level.element.appendChild(this.confirmForm.element);
  }

  endGame() {

  }
}

export default GameScreen;
