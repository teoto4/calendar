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




//Start
function updateTime(){
    const now = new Date();
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

const mainDate = new Date();
let currentMonth = mainDate.getMonth();
let currentYeare = mainDate.getFullYear();
let currentDay = mainDate.getDate();


function render() {
    p_Mounth_Years.textContent = month[currentMonth] + " " + currentYeare.toString();

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
    let date = 1;


    for (let i = 0; i < firstDayIndex; i++) {
        const td = all_dates[i];
        td.textContent = backMonthLastDate - firstDayIndex + i + 1;
        td.classList.add('prev-month');
        all_dates[i].addEventListener('click', back_month_func);
    }
    
    
    for (let i = firstDayIndex; i < firstDayIndex + lastDay.getDate(); i++) {
        all_dates[i].textContent = date;
        date++;
        all_dates[i].classList.remove('prev-month', 'next-month');
    }

    for (let i = lastDay.getDate() + firstDayIndex; i < 35; i++) {
        all_dates[i].textContent = i - firstDayIndex - lastDate + 1;
        all_dates[i].classList.add('next-month');
        all_dates[i].addEventListener('click', next_month_func);
    }
    
}


function next_month_func() {
    if (currentMonth < 11) {
        currentMonth++;
    } else {
        currentMonth = 0;
        currentYeare++;
    }
    render();
}

function back_month_func(){
    if (currentMonth > 0) {
        currentMonth--;
    } else {
        currentMonth = 11;
        currentYeare--;
    }
    render();
}



//Переключение месяцев
next_month.addEventListener(('click'), ()=>{
    if (currentMonth < 11) {
        currentMonth++;
    } else{
        currentMonth = 0;
        currentYeare++;
    }
    render();
})

back_month.addEventListener(('click'), ()=>{
    if (currentMonth > 0) {
        currentMonth--;
    } else{
        currentMonth = 11;
        currentYeare--;
    }
    render();
})





render();
















//Прошелся по всем ячейкам и добавил открытие окна с ивентами
for(let i = 0; i < all_dates.length; i++){
    all_dates[i].id = `date#${currentYeare}-${currentMonth}-${i}`;
    all_dates[i].addEventListener(('click'), (e)=>{
        e.preventDefault();

        if(event_section.style.display === 'flex'){
            event_section.style.display = 'none';
        } else{
            event_section.style.display = 'flex'
        }

        // form_button.addEventListener(('click'), (e)=>{
        //     e.preventDefault();

        //     tasks.textContent = event_text.value;
        //     eventTime.textContent = event_time.value.toString();
            
        //     const eventTime = event_time.value;
        //     const eventText = event_text.value;
        //     const eventKey = all_dates[i].id;
        //     const event1 = ADD_event(eventTime, eventText);
        //     console.log(event1);
            
        //     localStorage.setItem(eventKey, event1);
        //     addEvents(eventKey);
        // })
        
    });
}


//Работа с ивентами
const myForm = document.getElementById('myForm');
const event_time = document.getElementById('event_time');
const event_text = document.getElementById('event_text');
const form_button = document.getElementById('form_button');
const tasks_time = document.querySelector('.tasks_time');
const tasks = document.querySelector('.tasks');

// function ADD_event(time, tasks) {
//     this.time = time;
//     this.tasks = tasks;
// }

// function addEvents(eventKey){
//     tasks.textContent = localStorage.getItem(eventKey)
// }

form_button.addEventListener('click', (e)=>{
    e.preventDefault();
    tasks_time.textContent = '';
    const li_task = document.createElement('li');
    const li_time = document.createElement('li');
    li_task.textContent = ` - ${event_text.value}`;
    li_time.textContent =  event_time.value.toString();
    tasks_time.append(li_time);
    tasks.append(li_task);
    event_text.value = '';
    event_time.value = 0;
})