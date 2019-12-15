import BackgroundLoader from './Loaders/Background-Loader';
import LocationLoader from './Loaders/LocationLoader';
import TimeLoader from './Loaders/TimeLoader';
import CoordinatesLoader from './Loaders/CoordinatesLoader';
import WeatherLoader from './Loaders/WeatherLoader';

export default class AppController {
  constructor(App) {
    this.app = App;
    this.background_loader = new BackgroundLoader();
    this.location_loader = new LocationLoader(this.app);
    this.time_loader = new TimeLoader(this.app);
    this.coord_loader = new CoordinatesLoader(this.app);
    this.weather_loader = new WeatherLoader(this.app);
  }

  changeBackground() {
    this.background_loader.getData(this.app.view.reloadBackground);
  }

  getLocation() {
    this.location_loader.getCity(this.app.updateLocation.bind(this.app));
  }

  findCity(val) {
    this.coord_loader.getCoord(this.app.updateCoords.bind(this.app), val);
  }

  getWeather() {
    this.weather_loader.getWeather(this.app.getWeather.bind(this.app));
  }
}
