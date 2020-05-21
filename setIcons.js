
function setIcon (x) { //id icons
    let imgFace = document.createElement("img");
    switch (true){
        case x > 200 && x < 300: //clouds
            imgFace.src='src/weatherIcons/lightning.svg';
            break;
        case x >= 300 && x < 400: //clouds
            imgFace.src='src/weatherIcons/drizzly.svg';
            break;
        case x >= 500 && x < 600: //clouds
            imgFace.src='src/weatherIcons/rain.svg';
            break;
        case x >= 600 && x < 700: //clouds
            imgFace.src='src/weatherIcons/snow.svg';
            break;
        case x >= 700 && x < 800: //clouds
            imgFace.src='src/weatherIcons/mist.svg';
            break;
        case x === 800: //clouds
            imgFace.src='src/weatherIcons/sunny.svg';
            break;
        case x === 801: //clouds
            imgFace.src='src/weatherIcons/value.svg';
            break;
        case x >= 802: //clouds
            imgFace.src='src/weatherIcons/cloudy.svg';
            break;
    }
    console.log(imgFace);
    return imgFace;
}