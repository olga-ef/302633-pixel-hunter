import IntroScreen from './screens/intro-screen';
import WelcomeScreen from './screens/welcome-screen';
import RulesScreen from './screens/rules-screen';
import GameScreen from './screens/game-screen';
import ResultScreen from './screens/result-screen';
import GameModel from './model/game-model';
import {changeScreen} from './util';

class Application {
  showIntro() {
    const intro = new IntroScreen(this.showWelcome.bind(this));
    changeScreen(intro.element);
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
    const gameScreen = new GameScreen(new GameModel(playerName), this.showResult.bind(this),
        this.showWelcome.bind(this));
    gameScreen.startGame();
  }

  showResult(state) {
    const result = new ResultScreen(state, this.showWelcome.bind(this));
    changeScreen(result.element);
  }
}

export default Application;
