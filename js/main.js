// import renderInto from './screens/intro';
import {changeScreen} from './util';
import GameModel from './model/game-model';
import GameScreen from './screens/game';

const gameScreen = new GameScreen(new GameModel(`Олька`));

gameScreen.startGame();
// renderInto();
