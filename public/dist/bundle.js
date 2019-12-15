!function(t){var e={};function i(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i(i.s=5)}([function(t,e,i){t.exports=i.p+"src/assets/icons/russia.png"},function(t,e,i){t.exports=i.p+"src/assets/icons/united-kingdom.png"},function(t,e,i){t.exports=i.p+"src/assets/icons/belarus.png"},function(t,e,i){t.exports=i.p+"src/assets/icons/refresh.png"},function(t,e,i){t.exports=i.p+"src/assets/icons/micro.png"},function(t,e,i){"use strict";i.r(e);i(6),i(0),i(2),i(1),i(3);class n{constructor(t){this.app=t,this.contol_panel=document.createElement("div"),this.contol_panel.className="control-panel",this.gradus=null,this.reload=null}changeLanguage(){const{lang:t}=this.app;this.contol_panel.querySelector(".selected").classList.remove("selected"),this.contol_panel.querySelector(`[data-language="${t}"]`).classList.add("selected")}changeUnites(){this.gradus.innerHTML="metric"===this.app.units?"°C":"°F"}start(){const t=document.querySelector("header"),e=document.createDocumentFragment();this.gradus=document.createElement("button"),this.reload=document.createElement("reload");const i=document.createElement("button"),n=document.createElement("button"),a=document.createElement("button");this.gradus.className="__gradus",this.gradus.innerHTML="metric"===this.app.units?"°C":"°F",this.reload.className="__reload",i.className="__lang selected",n.className="__lang",a.className="__lang",i.dataset.language="ru",n.dataset.language="en",a.dataset.language="be",this.contol_panel.appendChild(this.gradus),this.contol_panel.appendChild(this.reload),this.contol_panel.appendChild(i),this.contol_panel.appendChild(n),this.contol_panel.appendChild(a),e.appendChild(this.contol_panel),t.appendChild(e)}}class a{constructor(t){this.app=t,this.city=document.createElement("span"),this.country=document.createElement("span")}updateLocation(){this.app.formatted?(this.city.innerHTML=this.app.formatted,this.country.innerHTML=""):(this.city.innerHTML=`${this.app.city} , `,this.country.innerHTML=this.app.country)}start(){const t=document.createDocumentFragment(),e=document.createElement("div");e.className="location",this.city.className="__city",this.country.className="__country",e.appendChild(this.city),e.appendChild(this.country),t.appendChild(e),document.querySelector("main").appendChild(t)}}class s{constructor(t){this.app=t,this.timeString=document.createElement("p"),this.timeString.className="current_time",this.dictionary={day:{"пн":"пан","вт":"ўт","ср":"cер","чт":"чац","пт":"пт","сб":"cб","вс":"няд"},month:{"января":"студзеня","февраля":"лютага","марта":"сакавiка","апреля":"красавiка","мая":"мая","июня":"чэрвеня","июля":"лiпеня","августа":"жнiўня","сентября":"верасня","октября":"кастрычнiка","ноября":"лiстапада","декабря":"снежня"}},this.updateTime=this.updateTime.bind(this)}updateTime(t){"be"===this.app.lang?this.timeString.innerHTML=t.split(" ").reduce((t,e,i)=>{const n=t;if(0===i){const t=e.slice(0,-1);return console.log(t,this.dictionary.day[t]),n+this.dictionary.day[e.slice(0,-1)]?`${this.dictionary.day[e.slice(0,-1)]}, `:e}return 2===i?`${n+this.dictionary.month[e]} `:`${n+e} `},""):this.timeString.innerHTML=t}start(){const t=document.createElement("div");t.className="__time",t.appendChild(this.timeString),document.querySelector(".__left-content").appendChild(t)}}i(4);class o{constructor(t){this.app=t,this.input=document.createElement("input"),this.input.placeholder="Найти город по названию или ZIP",this.button=document.createElement("button"),this.button.innerHTML="Старт",this.voice=document.createElement("div"),this.voice.className="__voice",this.interval=null,this.change_scale=null}start_animate(){let t=1,e=.01;this.change_scale=()=>{console.log(t),t<=.9?e=-e:t>=1.1&&(e=-e),t+=e,this.voice.style.transform=`scale(${t})`},this.interval=setInterval(this.change_scale.bind(this),100)}start(){const t=document.createElement("div");if(t.className="__find",t.appendChild(this.input),t.appendChild(this.voice),t.appendChild(this.button),document.querySelector("header").appendChild(t),this.button.addEventListener("click",()=>this.app.findCity.call(this.app,this.input.value)),this.input.addEventListener("keyup",t=>{13===t.keyCode&&(t.preventDefault(),this.app.findCity.call(this.app,this.input.value))}),window.SpeechRecognition||window.webkitSpeechRecognition){window.SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;const t=new SpeechRecognition;t.interimResults=!0,this.voice.addEventListener("click",()=>{console.log("voice started"),this.start_animate.call(this),t.addEventListener("result",t=>{const e=Array.from(t.results).map(t=>t[0]).map(t=>t.transcript).join(" ");console.log(e),this.input.value=e}),t.addEventListener("end",()=>{t.stop(),clearInterval(this.interval),this.voice.style.transform="scale(1)"}),t.start()})}}}class c{constructor(t){this.app=t,this.dictionary={day:{"пн":"пан","вт":"ўт","ср":"cер","чт":"чац","пт":"пт","cб":"cб","вс":"няд"},month:{"января":"студзеня","февраля":"лютага","марта":"сакавiка","апреля":"красавiка","мая":"мая","июня":"чэрвеня","июля":"лiпеня","августа":"жнiўня","сентября":"верасня","октября":"кастрычнiка","ноября":"лiстапада","декабря":"снежня"}}}getDate(t){return"be"===this.app.lang?t.split(" ").reduce((t,e,i)=>{const n=t;return 0===i?n+e:2===i?`${n+this.dictionary.month[e]} `:`${n+e} `},""):t}}class r{constructor(t){this.app=t,this.template=document.querySelector("#template"),this.content=document.createElement("div"),this.time_translator=new c(this.app)}updateData(t){const e=t,i={timeZone:this.app.timezone,hour:"numeric"},n=new Date(e.list[0].dt_txt).toLocaleString([],i),a=()=>{let t=this.content.firstElementChild;for(;t;)t.remove(),t=this.content.firstElementChild};this.content.childNodes.length&&a();const s=parseInt((24-n+4)/3);for(let t=0;t<3;t+=1)this.redraw(e.list[s+8*t])}redraw(t){const e={timeZone:this.app.timezone,weekday:"narrow",month:"long",day:"numeric"},i=this.time_translator.getDate(new Date(t.dt_txt).toLocaleString(this.app.lang,e)),n=this.template;n.content.querySelector(".__date").innerHTML=i,n.content.querySelector(".__temp").innerHTML=`${t.main.temp} ${"metric"===this.app.units?" °C":" °F"}`,n.content.querySelector(".__icon").style.backgroundImage=`url(http://openweathermap.org/img/wn/${t.weather[0].icon}@2x.png)`,this.content.appendChild(n.content.cloneNode(!0))}start(){this.content.className="__three-days-weather",document.querySelector("main").appendChild(this.content)}}class l{constructor(t){this.app=t,this.description=document.createElement("p"),this.icon=document.createElement("div"),this.temp=document.createElement("h2"),this.grad=document.createElement("span"),this.wind_speed=document.createElement("li"),this.humidity=document.createElement("li"),this.pressure=document.createElement("li"),this.upper=document.createElement("div"),this.three_days_weather=new r(this.app)}updateWeather(t){let e,i,n,a,s;"ru"===this.app.lang?(e="Ветер",i="м/с",n="Влажность",a="Давление",s="мм"):"en"===this.app.lang?(e="Wind",i="m/s",n="Humidity",a="Pressure",s="mm"):"be"===this.app.lang&&(e="Вецер",i="м/с",n="Вільготнасць",a="Цiск",s="мм");"be"!==this.app.lang?this.description.innerHTML=t.list[0].weather[0].description:this.description.innerHTML=(t=>{const e={"пасмурно":"пасмурна","дождь":"дождж","ясно":"ясна","небольшой дождь":"невялiкi дождж","облачно с прояснениями":"воблачна з праясненнямі","переменная облачность":"пераменная воблачнасць"};return e[t]?e[t]:t})(t.list[0].weather[0].description);const o=`url(http://openweathermap.org/img/wn/${t.list[0].weather[0].icon}@2x.png)`;this.icon.style.backgroundImage=o,this.temp.innerHTML=`${parseInt(t.list[0].main.temp)}`,this.grad.innerHTML=`${"metric"===this.app.units?"°C":"°F"}`,this.wind_speed.innerHTML=`${e} ${t.list[0].wind.speed} ${i}`,this.humidity.innerHTML=`${n} ${t.list[0].main.humidity} %`,this.pressure.innerHTML=`${a} ${t.list[0].main.pressure} ${s}`,this.three_days_weather.updateData(t)}start(){const t=document.createDocumentFragment(),e=document.createElement("div");e.className="_one_day_weather",this.upper.className="_upper",this.description.className="_description",this.icon.className="_icon";const i=document.createElement("div");i.className="_info";const n=document.createElement("div");n.className="_temp-container",this.temp.className="_temp",this.grad.className="_grad";const a=document.createElement("ul");a.appendChild(this.wind_speed),a.appendChild(this.humidity),a.appendChild(this.pressure),n.appendChild(this.temp),n.appendChild(this.grad),i.appendChild(n),i.appendChild(a),this.upper.appendChild(this.description),this.upper.appendChild(this.icon),e.appendChild(this.upper),e.appendChild(i),t.appendChild(e),document.querySelector(".__left-content").appendChild(t),this.three_days_weather.start()}}class h{constructor(t){this.app=t,this.container=document.createElement("div"),this.container.className="__container",this.map=document.createElement("div"),this.map.id="map",this.coords=document.createElement("div"),this.lat=document.createElement("span"),this.lng=document.createElement("span")}update(){const t=t=>{console.log(this.app.lang);const e=t.toString().split(".");return console.log(e),`${e[0]}° ${e[1].slice(0,2)} `},e=()=>{let t,e;return"ru"===this.app.lang?(t="Долгота",e="Широта"):"be"===this.app.lang?(t="Даўжыня",e="Шырыня"):(t="Langitude",e="Latitude"),{lng:t,lat:e}};this.lat.innerHTML=`${e().lat} ${t(this.app.coords.lat)}`,this.lng.innerHTML=`${e().lng}: ${t(this.app.coords.lng)}`;const i=document.querySelector("#map");i&&i.remove(),this.container.appendChild(this.map),mapboxgl.accessToken="pk.eyJ1IjoiZXNvc2h5a2kiLCJhIjoiY2s0MnJ5YW5nMDBkazNrcWN5ZXNldWhpaSJ9.H1xUyXKkmHuM20m6PsZ1aw";new mapboxgl.Map({container:"map",style:"mapbox://styles/mapbox/streets-v11",center:[this.app.coords.lng,this.app.coords.lat],zoom:9})}start(){this.container.appendChild(this.lat),this.container.appendChild(this.lng),document.querySelector(".mid-content").appendChild(this.container)}}class p{constructor(){this.node=document.createElement("div"),this.node.className="loading",this.node.style.width="100px",this.node.style.height="100px",this.main=document.querySelector("main")}start_animate(){this.main.appendChild(this.node)}stop_animate(){this.main.removeChild(this.node)}}class d{constructor(t){this.app=t,this.control_panel=new n(this.app),this.city=new a(this.app),this.time=new s(this.app),this.find=new o(this.app),this.one_day_weather=new l(this.app),this.map=new h(this.app),this.animate=new p}changeLanguage(){this.control_panel.changeLanguage()}changeUnites(){this.control_panel.changeUnites()}reloadBackground(t){document.querySelector(".container").style.backgroundImage=`url(${t?t.raw:"./dist/src/assets/default.jpg"})`}updateLocation(){this.city.updateLocation()}updateWeather(t){this.one_day_weather.updateWeather(t)}start_animate(){this.animate.start_animate()}stop_animate(){this.animate.stop_animate()}start(){this.control_panel.start(),this.city.start();const t=document.createElement("div"),e=document.createElement("div");e.className="__left-content",t.className="mid-content",t.appendChild(e),document.querySelector("main").appendChild(t),this.time.start(),this.find.start(),this.one_day_weather.start(),this.map.start()}}class u{constructor(){this.url="https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=nature&client_id=b4962622f6daa4039b1a64960f85757138cb8c1bb56d882145d9995602a6d1d9"}async getData(t){await fetch(this.url).then(t=>t.json()).then(e=>t(e.urls)).catch(e=>{console.log(e),t()})}}class m{constructor(t){this.app=t,this.url="https://ipinfo.io/json?token=eb5b90bb77d46a"}async getCity(t){await fetch(this.url).then(t=>t.json()).then(e=>{t(e)}).catch(t=>console.log(t))}}class g{constructor(t){this.app=t,this.getTime=this.getTime.bind(this)}getTime(t){const e=this.app.lang,i={timeZone:this.app.timezone,weekday:"narrow",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"};return t((new Date).toLocaleString(e,i))}}class y{constructor(t){this.app=t,this.body="https://api.opencagedata.com/geocode/v1/json?"}async getCoord(t,e){const i=`q=${e||this.app.city}`,n=`${this.body}${i}&language=${this.app.lang}&key=f10289b653d7440a82dda5bb80381af2`;await fetch(n).then(t=>t.json()).then(e=>{t(e)}).catch(t=>console.log(t))}}class _{constructor(t){this.app=t,this.key="3861da19d825182e34e2a4a450e7babe"}async getWeather(t){const{lat:e}=this.app.coords,i=`https://api.openweathermap.org/data/2.5/forecast?lat=${e}&lon=${this.app.coords.lng}&lang=${"be"===this.app.lang?"ru":this.app.lang}&units=${this.app.units}&APPID=${this.key}`;await fetch(i).then(t=>t.json()).catch(t=>console.log(t)).then(e=>t(e)).finally(()=>this.app.view.stop_animate())}}class w{constructor(t){this.app=t,this.background_loader=new u,this.location_loader=new m(this.app),this.time_loader=new g(this.app),this.coord_loader=new y(this.app),this.weather_loader=new _(this.app)}changeBackground(){this.background_loader.getData(this.app.view.reloadBackground)}getLocation(){this.location_loader.getCity(this.app.updateLocation.bind(this.app))}findCity(t){this.coord_loader.getCoord(this.app.updateCoords.bind(this.app),t)}getWeather(){this.weather_loader.getWeather(this.app.getWeather.bind(this.app))}}(new class{constructor(){this.lang="ru",this.formatted=null,this.city=null,this.country=null,this.timezone=null,this.units="metric",this.interval=null,this.coords=null,this.view=new d(this),this.controller=new w(this)}changeLanguage(t){this.lang=t,this.view.changeLanguage(),this.restartClock.call(this),this.findCity.call(this,this.city)}changeUnites(){this.units="metric"===this.units?"imperial":"metric",this.view.changeUnites(),this.findCity.call(this,this.city)}getWeather(t){this.view.updateWeather(t)}updateLocation(t){this.city=t.city,this.country=t.country,this.timezone=t.timezone,this.findCity(this.city)}updateCoords(t){this.country=t.results[0].components.country,this.formatted=t.results[0].formatted,this.city=t.results[0].components.state||t.results[0].components.city,this.coords=t.results[0].geometry,this.timezone=t.results[0].annotations.timezone.name,this.view.updateLocation(),this.view.map.update(),this.restartClock(),this.controller.getWeather()}findCity(t){this.view.start_animate(),this.controller.findCity(t)}control_click_handler(t){if(t.preventDefault(),"__lang"===t.target.classList[0]){const e=t.target.dataset.language;e!==this.lang&&this.changeLanguage.call(this,e)}"__gradus"===t.target.classList[0]&&this.changeUnites.call(this),"__reload"===t.target.classList[0]&&this.controller.changeBackground()}startClock(){const t=this.controller.time_loader;t.getTime(this.view.time.updateTime),this.interval=setInterval(t.getTime.bind(t,this.view.time.updateTime),6e4)}restartClock(){clearInterval(this.interval),this.startClock()}start(){this.view.start(),this.controller.changeBackground(),this.controller.getLocation(),document.querySelector(".control-panel").addEventListener("click",this.control_click_handler.bind(this))}}).start()},function(t,e){}]);