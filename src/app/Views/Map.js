export default class MapView {
  constructor(App) {
    this.app = App;
    this.container = document.createElement('div');
    this.container.className = '__container';
    this.map = document.createElement('div');
    this.map.id = 'map';
    this.coords = document.createElement('div');
    this.lat = document.createElement('span');
    this.lng = document.createElement('span');
  }

  update() {
    const getCoord = (coord) => {
      console.log(this.app.lang);
      const arr = coord.toString().split('.');
      console.log(arr);
      return `${arr[0]}° ${arr[1].slice(0, 2)} `;
    };

    const transate = () => {
      let lng; let
        lat;
      if (this.app.lang === 'ru') {
        lng = 'Долгота'; lat = 'Широта';
      } else if (this.app.lang === 'be') {
        lng = 'Даўжыня'; lat = 'Шырыня';
      } else {
        lng = 'Langitude'; lat = 'Latitude';
      }
      return {
        lng,
        lat,
      };
    };

    this.lat.innerHTML = `${transate().lat} ${getCoord(this.app.coords.lat)}`;
    this.lng.innerHTML = `${transate().lng}: ${getCoord(this.app.coords.lng)}`;
    const node = document.querySelector('#map');
    if (node) node.remove();
    this.container.appendChild(this.map);
    mapboxgl.accessToken = 'pk.eyJ1IjoiZXNvc2h5a2kiLCJhIjoiY2s0MnJ5YW5nMDBkazNrcWN5ZXNldWhpaSJ9.H1xUyXKkmHuM20m6PsZ1aw';
    const map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
      center: [this.app.coords.lng, this.app.coords.lat], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }

  start() {
    this.container.appendChild(this.lat);
    this.container.appendChild(this.lng);
    document.querySelector('.mid-content').appendChild(this.container);
  }
}
