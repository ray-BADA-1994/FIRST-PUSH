
// const textDays = document.querySelector('.days');
// const textHours = document.querySelector('.hours');
// const textMinutes = document.querySelector('.minutes');
// const textSeconds = document.querySelector('.seconds');

// const countImg = document.querySelector('.photo');

// function transformPhoto(){
//     countImg.style.transform = 'rotateZ(270deg)';
//     countImg.style.transition = 'all 0.5s ease-in'
// }

// setInterval(transformPhoto, 5000)


// function

function countDownTime(){

    const futureTime = new Date( 2022, 10, 18, 00,00,00).getTime();
    // console.log(futureTime);
    const presentTime  = new Date().getTime();
    // console.log(presentTime);
    const gap = futureTime - presentTime ;
    // console.log(gap);

    // how time works

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

   let daysEl = Math.floor( gap / day);
   let hoursEl = Math.floor((gap % day) / hour);
   let minutesEl = Math.floor((gap % hour) / minute);
   let secondsEl = Math.floor((gap % minute) / second);

//    console.log(secondsEl);

document.querySelector('.days').textContent = daysEl;
document.querySelector('.hours').textContent = hoursEl;
document.querySelector('.minutes').textContent = minutesEl;
document.querySelector('.seconds').textContent = secondsEl;



}

// countDownTime();

setInterval(countDownTime, 1000);