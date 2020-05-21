/**
 * Created by Help on 28.11.2016.
 */
    function getWeather() {
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=Perm,ru&units=metric&APPID=59e7c0c9a88558a8a5b57ba14b01a5ed&';
    let weather = {};
    fetch(url)
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            weather.name = data.name;
            weather.temp = data.main.temp;
            weather.description = data.weather[0].main;
            weather.icon = data.weather[data.weather.length-1].id;
            weather.windDirection = data.wind.deg;
            weather.windSpeed = data.wind.speed;
            weather.pressure = data.main.pressure;
            weather.humidity = data.main.humidity;
            console.log(weather);
            render(weather);
        })
        .catch(function () {
            //error
        });
}


