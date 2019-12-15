import '../../assets/icons/russia.png';
import '../../assets/icons/belarus.png';
import '../../assets/icons/united-kingdom.png';
import '../../assets/icons/refresh.png';

export default class ControlPanel {
  constructor(App) {
    this.app = App;
    this.contol_panel = document.createElement('div');
    this.contol_panel.className = 'control-panel';
    this.gradus = null;
    this.reload = null;
  }

  changeLanguage() {
    const { lang } = this.app;
    this.contol_panel.querySelector('.selected').classList.remove('selected');
    this.contol_panel.querySelector(`[data-language="${lang}"]`).classList.add('selected');
  }

  changeUnites() {
    this.gradus.innerHTML = this.app.units === 'metric' ? '°C' : '°F';
  }

  start() {
    const header = document.querySelector('header');
    const fragment = document.createDocumentFragment();

    this.gradus = document.createElement('button');
    this.reload = document.createElement('reload');
    const ru = document.createElement('button');
    const en = document.createElement('button');
    const be = document.createElement('button');

    this.gradus.className = '__gradus';
    this.gradus.innerHTML = this.app.units === 'metric' ? '°C' : '°F';
    this.reload.className = '__reload';

    ru.className = '__lang selected';
    en.className = '__lang';
    be.className = '__lang';
    ru.dataset.language = 'ru';
    en.dataset.language = 'en';
    be.dataset.language = 'be';

    this.contol_panel.appendChild(this.gradus);
    this.contol_panel.appendChild(this.reload);
    this.contol_panel.appendChild(ru);
    this.contol_panel.appendChild(en);
    this.contol_panel.appendChild(be);

    fragment.appendChild(this.contol_panel);
    header.appendChild(fragment);
  }
}
