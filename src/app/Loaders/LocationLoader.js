export default class LocationLoader {
  constructor(App) {
    this.app = App;
    this.url = 'https://ipinfo.io/json?token=eb5b90bb77d46a';
  }

  async getCity(func) {
    await fetch(this.url).then((res) => res.json())
      .then((data) => { func(data); })
      .catch((err) => console.log(err));
  }
}
