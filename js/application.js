import IntroScreen from './screens/intro-screen';
import WelcomeScreen from './screens/welcome-screen';
import RulesScreen from './screens/rules-screen';
import GameScreen from './screens/game-screen';
import ResultScreen from './screens/result-screen';
import GameModel from './model/game-model';
import {changeScreen} from './util';

class Application {
  static showIntro() {
    const intro = new IntroScreen();
    changeScreen(intro.element);
  }

  static showWelcome() {
    const welcome = new WelcomeScreen();
    changeScreen(welcome.element);
  }

  static showRules() {
    const rulesScreen = new RulesScreen();
    changeScreen(rulesScreen.element);
  }

  static showGame(playerName) {
    const gameScreen = new GameScreen(new GameModel(playerName));
    gameScreen.startGame();
  }

  static ShowResult(state) {
    const result = new ResultScreen(state);
    changeScreen(result.element);
  }
}

export default Application;
