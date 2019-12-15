import AppView from './View';
import AppController from './Controller';

export default class App {
  constructor() {
    this.lang = 'ru';
    this.formatted = null;
    this.city = null;
    this.country = null;
    this.timezone = null;
    this.units = 'metric';
    this.interval = null;
    this.coords = null;
    this.view = new AppView(this);
    this.controller = new AppController(this);
  }

  changeLanguage(lang) {
    this.lang = lang;
    this.view.changeLanguage();
    this.restartClock.call(this);
    this.findCity.call(this, this.city);
  }

  changeUnites() {
    this.units = this.units === 'metric' ? 'imperial' : 'metric';
    this.view.changeUnites();
    this.findCity.call(this, this.city);
  }

  getWeather(data) {
    this.view.updateWeather(data);
  }

  updateLocation(data) {
    this.city = data.city;
    this.country = data.country;
    this.timezone = data.timezone;
    this.findCity(this.city);
  }

  updateCoords(data) {
    this.country = data.results[0].components.country;
    this.formatted = data.results[0].formatted;
    this.city = data.results[0].components.state || data.results[0].components.city;
    this.coords = data.results[0].geometry;
    this.timezone = data.results[0].annotations.timezone.name;
    this.view.updateLocation();
    this.view.map.update();
    this.restartClock();
    this.controller.getWeather();
  }

  findCity(val) {
    this.view.start_animate();
    this.controller.findCity(val);
  }

  control_click_handler(e) {
    e.preventDefault();
    if (e.target.classList[0] === '__lang') {
      const lang = e.target.dataset.language;
      if (lang !== this.lang) {
        this.changeLanguage.call(this, lang);
      }
    }

    if (e.target.classList[0] === '__gradus') {
      this.changeUnites.call(this);
    }

    if (e.target.classList[0] === '__reload') {
      this.controller.changeBackground();
    }
  }

  startClock() {
    const loader = this.controller.time_loader;
    loader.getTime(this.view.time.updateTime);
    this.interval = setInterval(loader.getTime.bind(loader, this.view.time.updateTime), 1000 * 60);
  }

  restartClock() {
    clearInterval(this.interval);
    this.startClock();
  }

  start() {
    this.view.start();
    this.controller.changeBackground();
    this.controller.getLocation();
    document.querySelector('.control-panel').addEventListener('click', this.control_click_handler.bind(this));
  }
}
