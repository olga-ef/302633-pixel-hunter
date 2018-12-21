import IntroScreen from './screens/intro-screen';
import WelcomeScreen from './screens/welcome-screen';
import RulesScreen from './screens/rules-screen';
import GameScreen from './screens/game-screen';
import ResultScreen from './screens/result-screen';
import GameModel from './model/game-model';
import {changeScreen} from './util/util';
import Loader from './data/loader';

let gameData;

const setGameData = (data) => {
  gameData = data;
  return data;
};

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
  showIntro() {
    const intro = new IntroScreen(this.showWelcome.bind(this));
    changeScreen(intro);
    Loader.loadData().
      then((data) => setGameData(data)).
      then((data) => loadImages(data)).
      then(() => {
        intro.addAnimation();
        this.showWelcome(true);
      }).
      catch((error) => intro.showError(error));
  }

  showWelcome(isFade = false) {
    const welcome = new WelcomeScreen(this.showRules.bind(this));
    changeScreen(welcome, isFade);
  }

  showRules() {
    const rulesScreen = new RulesScreen(this.showGame.bind(this), this.showWelcome.bind(this));
    changeScreen(rulesScreen);
  }

  showGame(playerName) {
    const gameScreen = new GameScreen(new GameModel(gameData, playerName), this.showResult.bind(this),
        this.showWelcome.bind(this));
    gameScreen.startGame();
  }

  showResult(model) {
    const playerName = model.playerName;
    const result = new ResultScreen(model.state, this.showWelcome.bind(this));
    changeScreen(result);
    Loader.saveResult(model.state.answers, model.state.lives, playerName).
      then(() => Loader.loadResults(playerName)).
      then((data) => result.showScores(data)).
      catch(() => result.showError());
  }
}

export default Application;
