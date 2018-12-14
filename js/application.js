import IntroScreen from './screens/intro-screen';
import WelcomeScreen from './screens/welcome-screen';
import RulesScreen from './screens/rules-screen';
import GameScreen from './screens/game-screen';
import ResultScreen from './screens/result-screen';
import GameModel from './model/game-model';
import {changeScreen} from './util';
import adaptServerData from './game/adapter';

const Status = {
  OK: 200,
  REDIRECT: 300
};

const URL = `https://es.dump.academy/pixel-hunter/questions`;

const checkStatus = (response) => {
  if (response.status >= Status.OK && response.status < Status.REDIRECT) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

let gameData;

const setGameData = (data) => {
  gameData = adaptServerData(data);
};

class Application {
  showIntro() {
    const intro = new IntroScreen(this.showWelcome.bind(this));
    changeScreen(intro.element);
    window.fetch(URL).
      then((response) => checkStatus(response)).
      then((response) => response.json()).
      then((data) => setGameData(data)).
      then(() => this.showWelcome(this.showRules.bind(this))).
      catch(() => intro.showError);
  }

  showWelcome() {
    const welcome = new WelcomeScreen(this.showRules.bind(this));
    changeScreen(welcome.element);
  }

  showRules() {
    const rulesScreen = new RulesScreen(this.showGame.bind(this), this.showWelcome.bind(this));
    changeScreen(rulesScreen.element);
  }

  showGame(playerName) {
    const gameScreen = new GameScreen(new GameModel(gameData, playerName), this.showResult.bind(this),
        this.showWelcome.bind(this));
    gameScreen.startGame();
  }

  showResult(state) {
    const result = new ResultScreen(state, this.showWelcome.bind(this));
    changeScreen(result.element);
  }
}

export default Application;
