import {changeScreen} from '../util';
import greeting from './greeting';
import HeaderView from '../templates/header-view';
import {INITIAL_STATE, HEADER_FULL} from '../data/config';
import LEVELS from '../data/game-data';
import LevelView from '../templates/level-view';
import {decreaseLives} from '../game/lives';
import {changeLevel, canContinue} from '../game/level';
import {isAllAnswers, checkAnswer} from '../game/answer';
import renderResult from './result';
import calculateScore from '../game/score';


class GameScreen {
  constructor(model) {
    this.model = model;
    this.header = new HeaderView(HEADER_FULL, this.model.state);
    this.level = new LevelView(this.model.state, this.model.getCurrentLevel(), this.header);

    this._timer = null;
  }

  // получить элемент всего уровня
  get element () {
    return this.level.element;
  }

  // обновить хедер
  updateHeader() {
    // создаем новое оторажение
    const header = new HeaderView(HEADER_FULL, this.model.state);
    // навешиваем обработчик
    header.onClick = () => {
      greeting();
    };
    // заменяем старый хедер новым
    this.level.element.replaceChild(header.element, this.header.element);
    // переопределяем старый this.header на новый
    this.header = header;
  }

  // смена уровня
  changeLevel() {
    // обновляем левел
    const level = new LevelView(this.model.state, this.model.getCurrentLevel(), this.header);
    this.level = level;
    // обновляем хедер и всталяем его вместо старого
    this.updateHeader();
    // навешиваем обраотчик на левел
    level.onAnswer = this.answer.bind(this);
    // меняем экран в элементе;
    changeScreen(level.element);
  }

  // тик
  _tick() {
    if(!this.model.isTimeEnd()) {
      // функция из модели уменьшающая время на 1с
      this.model.tick()
      //Оновляем хедер с новым временем
      this.updateHeader();
      const timer = null;
      //устанавливаем в таймер таймаут, вызывыющий рекурсивно тик через 1 с
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
    // отрисовка первого уровня
    this.changeLevel();
    // запускаем таймер
    this._tick();
  }

  // Остановка таймера, применяется огда получен ответ, или игра окончена
  stopGame() {
    // очищаем таймер
    clearInterval(this._timer);
  }

  // закончить уровень
  endLevel(canContinue) {
    // проверка остались ли еще жизни и есть ли следующий уровень
    if (canContinue && this.model.isNextLevel()) {
      // увеличиваем уровень
      this.model.nextLevel();
      this.model.restartTime();
      // меняем уровень
      this.startGame();
      return;
    }
    // показываем результаты
    renderResult(this.model.state);
  }

  // проверка ответа и возможные действия
  answer(answers, level) {
    // проверить все ли ответы, если нет возвращаемся к игре
    if (!isAllAnswers(answers, level.type)) {
      return;
    }
    // останавливаем время
    this.stopGame();
    // проверка ответа
    const answerStatus = checkAnswer(level, answers, this.model.state.time);
    // запись ответа
    this.model.addAnswer(answerStatus);

    if (answerStatus === `wrong`) {
      // отнимаем жизнь
      this.model.decreaseLives();
    }
    // заканчиваем уровень
    this.endLevel(!this.model.isDead());
  }



}


// let gameState;

// const getLevel = (state) => LEVELS[state.level];

// const updateGame = (state) => {
//   const level = getLevel(state);

//   const gameHeader = new HeaderView(HEADER_FULL, state);
//   const gameContent = new LevelView(state, level, gameHeader);

//   const options = gameContent.element.querySelectorAll(`.game__option`);

//   gameHeader.onClick = () => {
//     greeting();
//   };

//   gameContent.onAnswer = (target) => {
//     const answers = getAnswers(target, gameContent.element);
//     if (level.type === `game3` || isAllAnswers(answers, options.length)) {
//       gameState = saveAnswer(level, answers, gameState);
//       const currentAnswer = gameState.answers[gameState.level].status;

//       if (currentAnswer === `wrong`) {
//         gameState = decreaseLives(gameState);
//       }
//       gameState = changeLevel(gameState);

//       if (!canContinue(gameState)) {
//         renderResult(gameState);
//         return;
//       }
//       updateGame(gameState);
//     }
//   };

//   changeScreen(gameContent.element);
// };

// const startGame = () => {
//   gameState = Object.assign({}, INITIAL_STATE);
//   updateGame(gameState);
// };

export default GameScreen;
