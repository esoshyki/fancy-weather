import '../../assets/icons/micro.png';

export default class FindView {
  constructor(App) {
    this.app = App;
    this.input = document.createElement('input');
    this.input.placeholder = 'Найти город по названию или ZIP';
    this.button = document.createElement('button');
    this.button.innerHTML = 'Старт';
    this.voice = document.createElement('div');
    this.voice.className = '__voice';
    this.interval = null;
    this.change_scale = null;
  }

  start_animate() {
    let scale = 1;
    let increment = 0.01;
    this.change_scale = () => {
      console.log(scale);
      if (scale <= 0.9) {
        increment = -increment;
      } else if (scale >= 1.1) {
        increment = -increment;
      }
      scale += increment;
      this.voice.style.transform = `scale(${scale})`;
    };

    this.interval = setInterval(this.change_scale.bind(this), 100);
  }


  start() {
    const content = document.createElement('div');
    content.className = '__find';
    content.appendChild(this.input);
    content.appendChild(this.voice);
    content.appendChild(this.button);
    document.querySelector('header').appendChild(content);

    this.button.addEventListener('click', () => this.app.findCity.call(this.app, this.input.value));
    this.input.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
        this.app.findCity.call(this.app, this.input.value);
      }
    });
    if (window.SpeechRecognition || window.webkitSpeechRecognition) {
      window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.interimResults = true;

      this.voice.addEventListener('click', () => {
        console.log('voice started');
        this.start_animate.call(this);

        recognition.addEventListener('result', (e) => {
          const transcript = Array.from(e.results)
            .map((result) => result[0])
            .map((res) => res.transcript)
            .join(' ');
          console.log(transcript);
          this.input.value = transcript;
        });
        recognition.addEventListener('end', () => {
          recognition.stop();
          clearInterval(this.interval);
          this.voice.style.transform = 'scale(1)';
        });
        recognition.start();
      });
    }
  }
}
