import RulesView from '../views/rules-view';
import {HEADER_SHORT} from '../util/config';
import HeaderView from '../views/header-view';
import ConfirmModalView from '../views/modals/confirm-view';

class RulesScreen {
  constructor(onNext, onBack) {
    this.header = new HeaderView(HEADER_SHORT);
    this.rules = new RulesView(this.header);
    this.confirmForm = new ConfirmModalView();
    this.bind(onNext, onBack);
  }

  get element() {
    return this.rules.element;
  }

  bind(onNext, onBack) {
    this.rules.onSubmit = (playerName) => onNext(playerName);
    this.header.onClick = () => this.showModal(this.confirmForm);
    this.exit = () => onBack();
  }

  removeModal(parentElement, element) {
    parentElement.removeChild(element);
  }

  showModal(form) {
    form.onConfirm = () => this.exit();
    form.onCancel = () => this.removeModal(this.rules.element, this.confirmForm.element);
    this.rules.element.appendChild(this.confirmForm.element);
  }
}

export default RulesScreen;
