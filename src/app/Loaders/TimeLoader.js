export default class TimeLoader {
  constructor(App) {
    this.app = App;
    this.getTime = this.getTime.bind(this);
  }

  getTime(func) {
    const locals = this.app.lang;

    const options = {
      timeZone: this.app.timezone,
      weekday: 'narrow',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };

    return func(new Date().toLocaleString(locals, options));
  }
}
