//DOM Elements
const calendar = document.querySelector('#calendar');
const dates = document.querySelector('#dates')
const all_dates = document.querySelectorAll('td');
const all_day_week = document.querySelectorAll('th');
const event_section = document.querySelector('.event_section');
const time = document.getElementById('time');
const p_Mounth_Years = document.getElementById('p_Mounth_Years');
const back_month = document.getElementById('back_month');
const next_month = document.getElementById('next_month');


console.log(p_Mounth_Years);

//Start
function updateTime(){
    const now = new Date();
    // console.log('hello');
    time.textContent = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
}
const time_promise = new Promise((resolve)=>{
    updateTime();
    resolve();
});
time_promise.then(()=>{
    time.classList.add('timer_animation');
});

setInterval(updateTime, 1000);
//Добавить даты динамически
console.log(all_day_week);
const mainDate = new Date();
let currentMonth = mainDate.getMonth();
let currentYeare = mainDate.getFullYear();


function render() {
    const firstDay = new Date(currentYeare, currentMonth, 1);
    const lastDay = new Date(currentYeare, currentMonth + 1, 0);
    let firstDayIndex = firstDay.getDay() - 1;
    if (firstDayIndex < 0) {
        firstDayIndex = 6;
    }
    const lastDate = lastDay.getDate();
    

 
    all_dates.forEach(date => {
        date.textContent = '';
    });


    const backMonth = new Date(currentYeare, currentMonth, 0);
    const backMonthLastDate = backMonth.getDate();
    console.log(backMonth);
    console.log(backMonthLastDate);
    let date = 1;


    for (let i = 0; i < firstDayIndex; i++) {
        const td = all_dates[i];
        td.textContent = backMonthLastDate - firstDayIndex + i + 1;
        td.classList.add('prev-month');
    }
    
    
    for (let i = firstDayIndex; i < firstDayIndex + lastDay.getDate(); i++) {
        all_dates[i].textContent = date;
        date++;
        all_dates[i].classList.remove('prev-month', 'next-month');
    }

    for (let i = lastDay.getDate() + firstDayIndex; i < 35; i++) {
        all_dates[i].textContent = i - firstDayIndex - lastDate + 1;
        all_dates[i].classList.add('next-month');
    }
    
}








//Переключение месяцев
p_Mounth_Years.textContent = month[currentMonth] + " " + currentYeare.toString();
next_month.addEventListener(('click'), ()=>{
    if (currentMonth < 11) {
        console.log(currentMonth);
        currentMonth++;
    } else{
        currentMonth = 0;
        currentYeare++;
    }
    
    p_Mounth_Years.textContent = month[currentMonth] + " " + currentYeare.toString();
    render();
})

back_month.addEventListener(('click'), ()=>{
    if (currentMonth > 0) {
        console.log(currentMonth);
        currentMonth--;
    } else{
        currentMonth = 11;
        currentYeare--;
    }
    
    p_Mounth_Years.textContent = month[currentMonth] + " " + currentYeare.toString();
    render();
})





render();
















//Прошелся по всем ячейкам и добавил открытие окна с ивентами
for(let i = 0; i < all_dates.length; i++){
    all_dates[i].addEventListener(('click'), (e)=>{
        console.log('working');

        if(event_section.style.display === 'flex'){
            event_section.style.display = 'none';
        } else{
            event_section.style.display = 'flex'
        }
        form_button.addEventListener(('click'), (e)=>{
            e.preventDefault();

            const eventTime = event_time.value;
            const eventText = event_text.value;
            const eventKey = i.toString() + " " + currentMonth.toString() + " " + currentYeare.toString();
            localStorage.setItem(eventKey, eventTime + " " + eventText)
        })
    });
}


//Работа с ивентами
const myForm = document.getElementById('myForm');
const event_time = document.getElementById('event_time');
const event_text = document.getElementById('event_text');
const form_button = document.getElementById('form_button');
const tasks_time = document.querySelector('.tasks_time');
const tasks = document.querySelector('.tasks');

console.log(myForm);
console.log(event_time);
console.log(event_text.value);
console.log(form_button);
console.log(tasks);
console.log(tasks_time);


