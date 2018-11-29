import {render, changeScreen} from '../util';
import renderGreeting from './greeting';

const template = `
  <section class="intro">
    <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
  </section>`;

const renderIntro = () => {
  const intro = render(template);

  const nextButton = intro.querySelector(`.intro__asterisk`);
  nextButton.addEventListener(`click`, () => changeScreen(renderGreeting()));

  return intro;
};

export default renderIntro;
