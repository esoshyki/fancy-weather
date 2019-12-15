export default class CoordinatesLoader {
  constructor(App) {
    this.app = App;
    this.body = 'https://api.opencagedata.com/geocode/v1/json?';
  }

  async getCoord(func, val) {
    const quota = `q=${val || this.app.city}`;
    const link = `${this.body}${quota}&language=${this.app.lang}&key=f10289b653d7440a82dda5bb80381af2`;
    await fetch(link).then((res) => res.json())
      .then((data) => { func(data); })
      .catch((err) => console.log(err));
  }
}
