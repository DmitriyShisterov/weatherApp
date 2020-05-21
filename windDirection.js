function windDirection (degrees){
    let el = document.querySelectorAll('#windDirection');
    switch (true){
        case (degrees >22 && degrees <= 67):
            //NE
            el[0].innerHTML = 'NE';
            break;
        case (degrees >67 && degrees <= 112):
            //E
            el[0].innerHTML = 'E';
            break;
        case (degrees >112 && degrees <= 157):
            //SE
            el[0].innerHTML = 'SE';
            break;
        case (degrees >157 && degrees <= 202):
            //S
            el[0].innerHTML = 'S';
            break;
        case (degrees >202 && degrees <= 247):
            //SW
            el[0].innerHTML = 'SW';
            break;
        case (degrees >247 && degrees <= 292):
            //W
            el[0].innerHTML = 'W';
            break;
        case (degrees >292 && degrees <= 337):
            //NW
            el[0].innerHTML = 'NW';
            break;
        case (degrees >337 && degrees <= 360):
             //N
            el[0].innerHTML = 'N';
            break;
        case (degrees >=0 && degrees <= 22):
            //N
            el[0].innerHTML = 'N';
            break;
            return degrees;
    }
}