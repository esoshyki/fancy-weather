import BackgroundLoader from '../src/app/Loaders/Background-Loader.js';
import CoordinatesLoader from '../src/app/Loaders/CoordinatesLoader.js';
import TimeTranslator from '../src/app/Views/BelarussianTranslator.js';

const bg_loader = new BackgroundLoader();

describe('Background-loader', function () {
    it('Background loader url correct ', function () {
      chai.expect(bg_loader.url).to.equal('https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=nature&client_id=b4962622f6daa4039b1a64960f85757138cb8c1bb56d882145d9995602a6d1d9');
    });
    it('GetData shoud return promise', () => {
        bg_loader.getData(console.log).then(res => {
            chai.expect(typeof res).to.equal('Promise');           
        });
    });
});

describe('Coordinates Loader', () => {
    const app = {
        lang: 'ru',
        city: 'Minsk'
    };

    const coord_loader = new CoordinatesLoader(app);

    it('Coordinates getCoord should return Promise', () => {
        coord_loader.getCoord(console.log).then(res => {
            chai.expect(typeof res).to.equal('Promise'); 
            return res.json();             
        });
    });
});

describe('Belarussian translator of time', () => {
    const time_app = {
        lang: 'be'
    }
    const translator = new TimeTranslator(time_app);
    it('Should correctly translate text from russian', () => {
        const s = 'пн, 22 декабря';
        const date = translator.getDate(s);
        chai.expect(date === 'пн,22 снежня ').to.equal(true)
    })
})


