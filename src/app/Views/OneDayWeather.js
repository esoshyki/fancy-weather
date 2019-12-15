import ThreeDaywWeather from './ThreeDaysWeather';

export default class OneDayWeather {
  constructor(App) {
    this.app = App;
    this.description = document.createElement('p');
    this.icon = document.createElement('div');
    this.temp = document.createElement('h2');
    this.grad = document.createElement('span');
    this.wind_speed = document.createElement('li');
    this.humidity = document.createElement('li');
    this.pressure = document.createElement('li');
    this.upper = document.createElement('div');
    this.three_days_weather = new ThreeDaywWeather(this.app);
  }

  updateWeather(data) {
    let wind_speed; let ms; let humidity; let pressure; let
      mm;

    if (this.app.lang === 'ru') {
      wind_speed = 'Ветер'; ms = 'м/с'; humidity = 'Влажность'; pressure = 'Давление'; mm = 'мм';
    } else if (this.app.lang === 'en') {
      wind_speed = 'Wind'; ms = 'm/s'; humidity = 'Humidity'; pressure = 'Pressure'; mm = 'mm';
    } else if (this.app.lang === 'be') {
      wind_speed = 'Вецер'; ms = 'м/с'; humidity = 'Вільготнасць'; pressure = 'Цiск'; mm = 'мм';
    }

    const descriptionTranslate = (description) => {
      const dict = {
        пасмурно: 'пасмурна',
        дождь: 'дождж',
        ясно: 'ясна',
        'небольшой дождь': 'невялiкi дождж',
        'облачно с прояснениями': 'воблачна з праясненнямі',
        'переменная облачность': 'пераменная воблачнасць',
      };
      return dict[description] ? dict[description] : description;
    };
    if (this.app.lang !== 'be') {
      this.description.innerHTML = data.list[0].weather[0].description;
    } else {
      this.description.innerHTML = descriptionTranslate(data.list[0].weather[0].description);
    }
    const link = `url(http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png)`;
    this.icon.style.backgroundImage = link;
    this.temp.innerHTML = `${parseInt(data.list[0].main.temp)}`;
    this.grad.innerHTML = `${this.app.units === 'metric' ? '°C' : '°F'}`;
    this.wind_speed.innerHTML = `${wind_speed} ${data.list[0].wind.speed} ${ms}`;
    this.humidity.innerHTML = `${humidity} ${data.list[0].main.humidity} %`;
    this.pressure.innerHTML = `${pressure} ${data.list[0].main.pressure} ${mm}`;

    this.three_days_weather.updateData(data);
  }


  start() {
    const fragment = document.createDocumentFragment();
    const content = document.createElement('div'); content.className = '_one_day_weather';
    this.upper.className = '_upper';
    this.description.className = '_description';
    this.icon.className = '_icon';
    const main = document.createElement('div'); main.className = '_info';
    const temp_container = document.createElement('div');
    temp_container.className = '_temp-container';
    this.temp.className = '_temp';
    this.grad.className = '_grad';
    const info = document.createElement('ul');
    info.appendChild(this.wind_speed);
    info.appendChild(this.humidity);
    info.appendChild(this.pressure);
    temp_container.appendChild(this.temp);
    temp_container.appendChild(this.grad);
    main.appendChild(temp_container);
    main.appendChild(info);
    this.upper.appendChild(this.description);
    this.upper.appendChild(this.icon);

    content.appendChild(this.upper);
    content.appendChild(main);
    fragment.appendChild(content);
    document.querySelector('.__left-content').appendChild(fragment);
    this.three_days_weather.start();
  }
}
