export default class Animate {
  constructor() {
    this.node = document.createElement('div');
    this.node.className = 'loading';
    this.node.style.width = '100px';
    this.node.style.height = '100px';
    this.main = document.querySelector('main');
  }

  start_animate() {
    this.main.appendChild(this.node);
  }

  stop_animate() {
    this.main.removeChild(this.node);
  }
}
