import ControlPanel from './Views/ControlPanel';
import City from './Views/City';
import TimeView from './Views/Time';
import FindView from './Views/Find';
import OneDayWeather from './Views/OneDayWeather';
import MapView from './Views/Map';
import Animate from './Views/Animate';

export default class AppView {
  constructor(App) {
    this.app = App;
    this.control_panel = new ControlPanel(this.app);
    this.city = new City(this.app);
    this.time = new TimeView(this.app);
    this.find = new FindView(this.app);
    this.one_day_weather = new OneDayWeather(this.app);
    this.map = new MapView(this.app);
    this.animate = new Animate();
  }

  changeLanguage() {
    this.control_panel.changeLanguage();
  }

  changeUnites() {
    this.control_panel.changeUnites();
  }

  reloadBackground(data) {
    document.querySelector('.container').style.backgroundImage = `url(${data ? data.raw : './dist/src/assets/default.jpg'})`;
  }

  updateLocation() {
    this.city.updateLocation();
  }

  updateWeather(data) {
    this.one_day_weather.updateWeather(data);
  }

  start_animate() {
    this.animate.start_animate();
  }

  stop_animate() {
    this.animate.stop_animate();
  }

  start() {
    this.control_panel.start();
    this.city.start();
    const mid = document.createElement('div');
    const left = document.createElement('div');
    left.className = '__left-content';
    mid.className = 'mid-content';
    mid.appendChild(left);
    document.querySelector('main').appendChild(mid);
    this.time.start();
    this.find.start();
    this.one_day_weather.start();
    this.map.start();
  }
}
