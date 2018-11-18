import {render, changeScreen} from '../util';
import greetingScreen from './greeting-screen';

const template = `
  <section class="intro">
    <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
  </section>`;

const screen = render(template);

const nextButton = screen.querySelector(`.intro__asterisk`);

nextButton.addEventListener(`click`, () => changeScreen(greetingScreen));

export default screen;
