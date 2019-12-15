export default class TimeView {
  constructor(App) {
    this.app = App;
    this.timeString = document.createElement('p');
    this.timeString.className = 'current_time';
    this.dictionary = {
      day: {
        пн: 'пан',
        вт: 'ўт',
        ср: 'cер',
        чт: 'чац',
        пт: 'пт',
        сб: 'cб',
        вс: 'няд',
      },
      month: {
        января: 'студзеня',
        февраля: 'лютага',
        марта: 'сакавiка',
        апреля: 'красавiка',
        мая: 'мая',
        июня: 'чэрвеня',
        июля: 'лiпеня',
        августа: 'жнiўня',
        сентября: 'верасня',
        октября: 'кастрычнiка',
        ноября: 'лiстапада',
        декабря: 'снежня',
      },

    };

    this.updateTime = this.updateTime.bind(this);
  }

  updateTime(UTC) {
    if (this.app.lang === 'be') {
      this.timeString.innerHTML = UTC.split(' ').reduce((a, b, i) => {
        const str = a;
        if (i === 0) {
          const d = b.slice(0, -1);
          console.log(d, this.dictionary.day[d]);
          return str + this.dictionary.day[b.slice(0, -1)] ? `${this.dictionary.day[b.slice(0, -1)]}, ` : b;
        }
        if (i === 2) {
          return `${str + this.dictionary.month[b]} `;
        }
        return `${str + b} `;
      }, '');
    } else {
      this.timeString.innerHTML = UTC;
    }
  }

  start() {
    const content = document.createElement('div');
    content.className = '__time';
    content.appendChild(this.timeString);
    document.querySelector('.__left-content').appendChild(content);
  }
}
