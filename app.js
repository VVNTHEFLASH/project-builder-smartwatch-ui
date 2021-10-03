//Start this lab by getting the time and date
function TimeAndDate() {
    var Time = new Date();
    // console.log(Time);
    var day = Time.getDay();
    // console.log(day)
    var hours = Time.getHours();
    // console.log(hours)
    var minutes = Time.getMinutes();
    // console.log(minutes)
    console.log(hours+':'+minutes)
    setInterval(TimeAndDate, 1000);
        //Update Time
    //Get the Element of Time Display
    var updateTime = document.getElementById('span-time');
    var updateTimeH1 = document.getElementById('h1-time');
        //Use if Condition to add 0 in minutes less than 10
    if(minutes < 10) {
        updateTime.textContent = hours+':0'+minutes;
        updateTimeH1.textContent = hours+':0'+minutes;
    }
    else {
        updateTime.textContent = hours+':'+minutes;
        updateTimeH1.textContent = hours+':'+minutes;
    }
}
TimeAndDate();
//Switch Statement to get Day
var getDay = document.getElementById('getDay');
switch (day) {
    case 1:
        getDay.textContent = 'Monday';
        break;
    case 2:
        getDay.textContent = 'Tuesday';
        break;
    case 3:
        getDay.textContent = 'Wednesday';
        break;
    case 4:
        getDay.textContent = 'Thursday';
        break;
    case 5:
        getDay.textContent = 'Friday';
        break;
    case 6:
        getDay.textContent = 'Saturday';
        break;
    case 7:
        getDay.textContent = 'Sunday';
        break;                                                                            
    default:
        break;
}
