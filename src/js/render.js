function render (x) {
    if (Array.isArray(x) === false){
        let location = document.querySelector('#city');
        location.innerHTML=x.name;
        let temp = document.querySelector('#temperature');
        temp.innerHTML = x.temp +'&deg';
        let descript = document.querySelector('#weatherDescription');
        descript.textContent = x.description;
        let icon = document.querySelector('#weatherIcon');
        icon.replaceWith(setIcon(x.icon));
        let windSpeed = document.querySelector('#windSpeed');
        windSpeed.textContent = x.windSpeed;
        windDirection(x.windDirection);
        let pressure = document.querySelector('#pressure');
        pressure.textContent = (convertPressure(x.pressure).toFixed(0));
        let humidity = document.querySelector('#humidity');
        humidity.textContent = (x.humidity);
    }
    if (Array.isArray(x) === true) {
        for (let i=0; i < x.length; i++){
            let day = x[i].day;
            let temp = x[i].temp;
            let icon = x[i].icon;

            let forecastContainer = document.querySelector('#forecastBlock');
            let forecastDay = document.createElement('div');
            forecastDay.className = 'forecastDay';

            let dayEl = document.createElement('div');
            dayEl.className = 'dayOfWeek';
            dayEl.innerHTML = day;

            let iconEl = document.createElement('div');
            iconEl.className = 'iconWrap';
            iconEl.append(setIcon(icon));

            let tempEl = document.createElement('div');
            tempEl.className = 'temp';
            tempEl.innerHTML = temp.toFixed(0)+'&deg';

            forecastDay.append(dayEl,iconEl,tempEl);
            forecastContainer.append(forecastDay);
        }
    }
}