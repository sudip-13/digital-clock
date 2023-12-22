function getCurrentDate() {
    var currentDate = new Date();
    var day = currentDate.getDate().toString().padStart(2, '0');
    var month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); 
    var year = currentDate.getFullYear();

    return day + '  :  ' + month + '   :   ' + year;
}
function getCurrentTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours().toString().padStart(2, '0');
    var minutes = currentTime.getMinutes().toString().padStart(2, '0');
    var seconds = currentTime.getSeconds().toString().padStart(2, '0');
    var ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; 

    return hours + ' : ' + minutes + ' : ' + seconds + '   ' + ampm;
}
function getCurrentDay() {
    var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var currentDate = new Date();
    var dayIndex = currentDate.getDay();

    return daysOfWeek[dayIndex];
}

function Display_day_date_time(){

    var currentDay = getCurrentDay();
    document.getElementById('original-Day').innerHTML = currentDay ;

    var currentTime = getCurrentTime();
    document.getElementById('original-time').innerHTML =  currentTime 

    var currentDate = getCurrentDate();
    document.getElementById('original-date').innerHTML =  currentDate 
}


setInterval(Display_day_date_time, 1000);


Display_day_date_time();