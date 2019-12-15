export default class City {
  constructor(App) {
    this.app = App;
    this.city = document.createElement('span');
    this.country = document.createElement('span');
  }

  updateLocation() {
    if (!this.app.formatted) {
      this.city.innerHTML = `${this.app.city} , `;
      this.country.innerHTML = this.app.country;
    } else {
      this.city.innerHTML = this.app.formatted;
      this.country.innerHTML = '';
    }
  }

  start() {
    const fragment = document.createDocumentFragment();
    const content = document.createElement('div');
    content.className = 'location';
    this.city.className = '__city';
    this.country.className = '__country';
    content.appendChild(this.city);
    content.appendChild(this.country);
    fragment.appendChild(content);
    document.querySelector('main').appendChild(fragment);
  }
}
