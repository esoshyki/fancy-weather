import TimeTranslator from './BelarussianTranslator';

export default class ThreeDaywWeather {
  constructor(App) {
    this.app = App;
    this.template = document.querySelector('#template');
    this.content = document.createElement('div');
    this.time_translator = new TimeTranslator(this.app);
  }

  updateData(_data) {
    const data = _data;
    const options = {
      timeZone: this.app.timezone,
      hour: 'numeric',
    };

    const hours = new Date(data.list[0].dt_txt).toLocaleString([], options);

    const deleteChilds = () => {
      let first = this.content.firstElementChild;
      while (first) {
        first.remove();
        first = this.content.firstElementChild;
      }
    };

    if (this.content.childNodes.length) {
      deleteChilds();
    }

    const idx = parseInt((4 + (24 - hours)) / 3);
    for (let i = 0; i < 3; i += 1) {
      this.redraw(data.list[idx + i * 8]);
    }
  }

  redraw(data) {
    const options = {
      timeZone: this.app.timezone,
      weekday: 'narrow',
      month: 'long',
      day: 'numeric',
    };
    const date = this.time_translator.getDate(new Date(data.dt_txt)
      .toLocaleString(this.app.lang, options));

    const node = this.template;
    node.content.querySelector('.__date').innerHTML = date;
    node.content.querySelector('.__temp').innerHTML = `${data.main.temp} ${this.app.units === 'metric' ? ' °C' : ' °F'}`;
    node.content.querySelector('.__icon').style.backgroundImage = `url(http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png)`;
    this.content.appendChild(node.content.cloneNode(true));
  }

  start() {
    this.content.className = '__three-days-weather';
    document.querySelector('main').appendChild(this.content);
  }
}
