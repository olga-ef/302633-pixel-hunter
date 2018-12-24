import IntroScreen from './screens/intro-screen';
import WelcomeScreen from './screens/welcome-screen';
import RulesScreen from './screens/rules-screen';
import GameScreen from './screens/game-screen';
import ResultScreen from './screens/result-screen';
import GameModel from './model/game-model';
import {changeScreen} from './util/util';
import Loader from './data/loader';

let gameData;

const loadImage = (url) => {
  return new Promise((onLoad, onError) => {
    const image = new Image();
    image.onload = () => onLoad(image);
    image.onerror = () => onError(`не удалось загрузить изображение: ${url}`);
    image.src = url;
  });
};

const loadImages = (questions) => {
  const images = [];
  const answers = [].concat(...questions.map((question) => question.answers));
  answers.forEach((answer) => images.push(loadImage(answer.image.url)));
  return Promise.all(images);
};

class Application {
  static async showIntro() {
    const intro = new IntroScreen(Application.showWelcome);
    changeScreen(intro);
    try {
      gameData = await Loader.loadData();
      await loadImages(gameData);
      intro.addAnimation();
      Application.showWelcome(true);
    } catch (error) {
      intro.showError(error);
    }
  }

  static showWelcome(isFade = false) {
    const welcome = new WelcomeScreen(Application.showRules);
    changeScreen(welcome, isFade);
  }

  static showRules() {
    const rulesScreen = new RulesScreen(Application.showGame, Application.showWelcome);
    changeScreen(rulesScreen);
  }

  static showGame(playerName) {
    const gameScreen = new GameScreen(new GameModel(gameData, playerName), Application.showResult,
        Application.showWelcome);
    gameScreen.startGame();
  }

  static async showResult(model) {
    const playerName = model.playerName;
    const result = new ResultScreen(model.state, Application.showWelcome);
    changeScreen(result);
    try {
      await Loader.saveResult(model.state.answers, model.state.lives, playerName);
      result.showScores(await Loader.loadResults(playerName));

      if (result.win) {
        gameData = await Loader.loadData();
        await loadImages(gameData);
      }
    } catch (error) {
      result.showError(error);
    }
  }
}

export default Application;
