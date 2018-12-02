import HeaderView from '../templates/header-view';
import greeting from './greeting.js';

export default (headerType, state) => {
  const header = new HeaderView(headerType, state);

  header.onClick = () => {
    greeting();
  };

  return header;
};
