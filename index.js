// var for selecting element
let h1 = document.querySelector('h1');
let btnplay = document.querySelector('.btnPlay');
let btnpause = document.querySelector('.btnPause');
let btnreplay = document.querySelector('.btnReplay');
// var for time
let secounds = 0;
let minutes = 0;
let hours = 0;
// var for leading
let leadingSecound;
let leadingMinutes;
let leadingHours;

let runTime = ()=>{
    secounds++;
    if(secounds == 60){
        secounds = 0;
        minutes++;
        if(minutes == 60){
            minutes = 00;
            hours++;
        }
    }
    // for display (zero) (0)0: (0)0: (0)0
    if(secounds < 10){
        leadingSecound = '0'+secounds.toString();
    }else{
        leadingSecound = secounds;
    }
    if(minutes < 10){
        leadingMinutes = '0'+minutes.toString();
    }else{
        leadingMinutes = minutes;
    }
    if(hours < 10){
        leadingHours = '0'+hours.toString();
    }else{
        leadingHours = hours;
    }

   return h1.innerText = `${leadingHours}:${leadingMinutes}:${leadingSecound}`;
}

//  var for stored the value 
let interval;

btnplay.addEventListener('click', ()=>{
   interval = window.setInterval(runTime,1000);
   btnpause.style.opacity = '1';   
   btnplay.style.opacity = '.4';   

});

btnpause.addEventListener('click',()=>{
    window.clearInterval(interval);
    btnpause.style.opacity = '.4';
    btnplay.style.opacity = '1';
})

btnreplay.addEventListener('click',()=>{
    btnpause.style.opacity = '1';
    btnplay.style.opacity = '1';
    secounds = 0;
    minutes = 0;
    hours = 0;
    window.clearInterval(interval);
    h1.innerText  =  `${leadingHours = '0'+hours}:${leadingMinutes= '0'+minutes}:${leadingSecound='0'+secounds}`;
})
