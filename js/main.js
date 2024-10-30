//DOM Elements
const calendar = document.querySelector('#calendar');
const dates = document.querySelector('#dates')
const all_dates = document.querySelectorAll('td');
const event_section = document.querySelector('.event_section');
const time = document.getElementById('time');

console.log(event_section);
//Start
// let year = 2024;
// let month = 0;

let timer_interval = setInterval(()=>{
    const now = new Date();
    console.log('hello');
    time.textContent = now.getHours() +":" + now.getMinutes() + ":" + now.getSeconds();
}, 1000);



for(let i = 0; i < all_dates.length; i++){
    all_dates[i].addEventListener(('click'), (e)=>{
        console.log('working');

        if(event_section.style.display === 'flex'){
            event_section.style.display = 'none';
        } else{
            event_section.style.display = 'flex'
        }
    });
}