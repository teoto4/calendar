//DOM Elements
const calendar = document.querySelector('#calendar');
const dates = document.querySelector('#dates')
const all_dates = document.querySelectorAll('td');
const event_section = document.querySelector('.event_section');
const time = document.getElementById('time');

//Start
const time_promise = new Promise(()=>{
    setInterval(()=>{
        const now = new Date();
        console.log('hello');
        time.textContent = now.getHours() +":" + now.getMinutes() + ":" + now.getSeconds();
    }, 1000);
});
time_promise.then(()=>{
    time.classList.add('timer_animation');
});

//Добавить даты динамически














//Прошелся по всем ячейкам и добавил открытие окна с ивентами
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