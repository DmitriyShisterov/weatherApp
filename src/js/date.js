
function getDayOfWeek(arg) {
    var z = arg.getDay();
    switch (z) {
        case (0):
            return "Sunday";
        case (1):
            return "Monday";
        case (2):
            return "Tuesday";
        case (3):
            return "Wednesday";
        case (4):
            return "Thursday";
        case (5):
            return "Friday";
        case (6):
            return "Saturday";
    }
    return z;
}

function getDate(arg) {
    var date = arg.getDate();
    return date;
}

function getTime(arg) {
    var hours = arg.getHours();
    var minutes = arg.getMinutes();
    var time;
    if (minutes <= 9) {
        time = hours + ":0" + minutes;
    }
    else
        time = hours + ":" + minutes;
    return time;
}

function getMonthName(arg) {
    var y = arg.getMonth();
    switch (y) {
        case (0):
            return "January";
        case (1):
            return "February";
        case (2):
            return "March";
        case (3):
            return "April";
        case (4):
            return "May";
        case (5):
            return "June";
        case (6):
            return "July";
        case (7):
            return "August";
        case (8):
            return "September";
        case (9):
            return "October";
        case (10):
            return "November";
        case (11):
            return "December";
    }
    return y;
}

function fullDate(arg) {
    let dt = new Date(arg * 1000);
    return  {
        month: getMonthName(dt),
        day: getDayOfWeek(dt),
        date: getDate(dt),
        hours: getTime(dt)
    };
}