export default class WeatherLoader {
  constructor(App) {
    this.app = App;
    this.key = '3861da19d825182e34e2a4a450e7babe';
  }

  // https://api.openweathermap.org/data/2.5/forecast?q=Kiev&lang=ua&units=metric&APPID=a9a3a62789de80865407c0452e9d1c27
  async getWeather(func) {
    const { lat } = this.app.coords;
    const lon = this.app.coords.lng;
    const lang = this.app.lang === 'be' ? 'ru' : this.app.lang;
    const link = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&lang=${lang}&units=${this.app.units}&APPID=${this.key}`;
    await fetch(link).then((res) => res.json())
      .catch((err) => console.log(err))
      .then((data) => func(data))
      .finally(() => this.app.view.stop_animate());
  }
}
