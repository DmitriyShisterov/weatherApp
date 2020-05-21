
function getForecast() {
    let url = 'http://api.openweathermap.org/data/2.5/forecast?q=Perm,ru&units=metric&APPID=aa9996e5ab8f98c899989aa3109cddd5';
    let foreCast=[];
    fetch(url)
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            for(let i=0; i<data.list.length; i+=8){// выбираем только одно значение для дня
                let dayOfForecast = fullDate(data.list[i].dt);
                foreCast.push({
                    month: dayOfForecast.month,
                    date: dayOfForecast.date,
                    day:  dayOfForecast.day,
                    temp: data.list[i].main.temp,
                    icon: data.list[i].weather[0].id
            });
            }
            console.log(foreCast);
            render(foreCast);
        })
        .catch(function () {
            //error
        });
}