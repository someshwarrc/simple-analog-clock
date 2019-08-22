let hourHand    =   document.querySelector('#hour');
let minuteHand    =   document.querySelector('#minute');
let secondHand    =   document.querySelector('#second');


function initClock(){
    let date    =   new Date();

    let hour    =   date.getHours(); //gives 24hour time
        hour    =   hour % 12;  //gives the time in 12hour time now
    let minute  =   date.getMinutes();
    let second  =   date.getSeconds();
/*
Now,
    the second hand covers 360 deg in 60 seconds, therefore the
    secondHand should move by 6 deg for every second. 
    ============================================================================ 
    Similarly the minute hand covers 360 deg in 60 minutes, therefore 
    each minute equals 6 degs plus the contribution made by
    the seconds passed i.e, the minute arm moves 6 deg for every 60 seconds, so it moves
    0.1 deg for every second as well.
    ============================================================================
    The hour hand however covers 360 deg in 12 hours hence each hour covers 30 deg;
    the hour hand passes 30 deg in 60 minutes and 3600 seconds which adds to the movement 
    of the hour hand i.e, the hour hand moves 0.5 deg for every minute and 0.01 deg for
    every second.   
*/

let secondDeg   =   second * 6;
let minuteDeg   =   minute * 6  +   second * 0.1;
let hourDeg     =   hour   * 30 +   minute * 0.5 + second * 0.01;


hourHand.style.transform    =   'rotate(' + hourDeg + 'deg)';
minuteHand.style.transform  =   'rotate(' + minuteDeg + 'deg)';
secondHand.style.transform  =   'rotate(' + secondDeg + 'deg)';


    
}

setInterval(() => {
    initClock();
}, 1000);