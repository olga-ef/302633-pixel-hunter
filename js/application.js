import IntroScreen from './screens/intro-screen';
import WelcomeScreen from './screens/welcome-screen';
import RulesScreen from './screens/rules-screen';
import GameScreen from './screens/game-screen';
import ResultScreen from './screens/result-screen';
import GameModel from './model/game-model';
import {changeScreen} from './util/util';
import Loader from './game/loader';

let gameData;

const setGameData = (data) => {
  gameData = data;
};

class Application {
  showIntro() {
    const intro = new IntroScreen(this.showWelcome.bind(this));
    changeScreen(intro);
    Loader.loadData().
      then((data) => setGameData(data)).
      then(() => {
        intro.addAnimation();
        setTimeout(() => this.showWelcome(this.showRules.bind(this)), 1500);
      }).
      catch(() => intro.showError);
  }

  showWelcome() {
    const welcome = new WelcomeScreen(this.showRules.bind(this));
    changeScreen(welcome);
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
