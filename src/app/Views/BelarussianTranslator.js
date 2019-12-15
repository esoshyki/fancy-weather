export default class TimeTranslator {
  constructor(App) {
    this.app = App;
    this.dictionary = {
      day: {
        пн: 'пан',
        вт: 'ўт',
        ср: 'cер',
        чт: 'чац',
        пт: 'пт',
        cб: 'cб',
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
  }

  getDate(s) {
    if (this.app.lang === 'be') {
      return s.split(' ').reduce((a, b, i) => {
        const str = a;
        if (i === 0) {
          return str + b;
        }
        if (i === 2) {
          return `${str + this.dictionary.month[b]} `;
        }
        return `${str + b} `;
      }, '');
    }

    return s;
  }
}
