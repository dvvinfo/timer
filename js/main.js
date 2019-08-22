
// Задаем дату отсчета
// Set the reference date
let deadline = '2020-01-01 GMT+0300';
function getTimeRemaining(endtime) {
    let t = Date.parse(endtime)- Date.parse(new Date()),
    // Получаем часы, минуты и секунды
    // Get hours, minutes and seconds
     days  = Math.floor((t/(1000*60*60*24))),
     hours = Math.floor((t/1000/60/60) % 24),
     minutes = Math.floor((t/1000/60) % 60),
     seconds = Math.floor((t/1000) % 60 );
    
    return{
        'total' : t,
        'days' : days ,
        'hours' : hours,
        'minutes' : minutes,
        'seconds' : seconds

    };
  
}

function setClock(id, endtime) {
let timer = document.getElementById(id),
days = timer.querySelector('.days'),
hours = timer.querySelector('.hours'),
minutes = timer.querySelector('.minutes'),
seconds = timer.querySelector('.seconds'),
timeInterval = setInterval(updateClock, 1000);

function updateClock(){
    let t = getTimeRemaining(endtime);
    days.textContent = t.days;
    hours.textContent = t.hours;
    minutes.textContent = t.minutes;
    seconds.textContent = t.seconds;
    if (t.total <= 0) {
       clearInterval(timeInterval); 
    }
    }
}


setClock('timer', deadline);