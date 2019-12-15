export default class BackgroundLoader {
  constructor() {
    this.url = 'https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=nature&client_id=b4962622f6daa4039b1a64960f85757138cb8c1bb56d882145d9995602a6d1d9';
  }

  async getData(func) {
    await fetch(this.url).then((res) => res.json())
      .then((data) => func(data.urls))
      .catch((err) => { console.log(err); func(); });
  }
}
