alert('Пожалуйста проверьте мою работу 19 числа <3')

const time = document.querySelector('.time');
const dateToday = document.querySelector('.date')


function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    setTimeout(showTime, 1000);
    showDate()
}

showTime();




function showDate() {
    const date = new Date();
    const options = { weekday: 'long', month: 'long', day: '2-digit'};
    const currentDate = date.toLocaleDateString('en-US', options);
    dateToday.textContent = currentDate
}

