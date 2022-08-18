

const time = document.querySelector('.time');
const dateToday = document.querySelector('.date')
const greeting = document.querySelector('.greeting')
const userName = document.querySelector('.name')
const body = document.querySelector('body')
const slideNext = document.querySelector('.slide-next')
const sliderPrev = document.querySelector('.slide-prev')

// DATE
function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    setTimeout(showTime, 1000);
    showDate()
    showGreeting()

}

showTime();




function showDate() {
    const date = new Date();
    const options = { weekday: 'long', month: 'long', day: '2-digit'};
    const currentDate = date.toLocaleDateString('en-US', options);
    dateToday.textContent = currentDate;
}

// Greeting

function getTimeOfDay() {
    const date = new Date();
    const hours = date.getHours();
    
    if (hours >= 4 && hours <= 11) {
        return 'morning'
    } else if (hours > 11 && hours <= 15) {
        return 'afternoon'
    } else if (hours > 15 && hours <= 22) {
        return 'evening'
    } else return 'night'
}
function showGreeting() {

    getTimeOfDay()
    const timeOfDay = getTimeOfDay();
    const greetingText = `Good ${timeOfDay},`;
    greeting.textContent = greetingText
}

function setLocalStorage() {
    localStorage.setItem('userName', userName.value);
  }
  window.addEventListener('beforeunload', setLocalStorage)

  function getLocalStorage() {
    if(localStorage.getItem('userName')) {
        userName.value = localStorage.getItem('userName');
    }
  }
  window.addEventListener('load', getLocalStorage)


//   SLIDER


body.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/18.jpg')";

function getRandomNum(min, max) {
    min = Math.ceil(1);
    max = Math.floor(20);
    return Math.floor(Math.random() * (max - min)) + min;
}


    let bgNum = getRandomNum()
    bgNum = bgNum.toString().padStart(2, '0')
    const timeOfDay = getTimeOfDay()
    
function setBg() {
    const img = new Image();
    img.src = "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/18.jpg";
    img.addEventListener('load', () => {
        let bgNum = getRandomNum()
    bgNum = bgNum.toString().padStart(2, '0')
    return body.style.backgroundImage = `url(https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg)`
    })
    
}

setBg()
let randomNum;
slideNext.addEventListener('click', getSlideNext)

function getSlideNext() {
    randomNum = bgNum
    randomNum = +randomNum 
    if (randomNum === 1) {
        randomNum = 20
    } else randomNum++
    bgNum = bgNum.toString().padStart(2, "0");
    body.style.backgroundImage = `url(https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg)`
    setBg()
}



sliderPrev.addEventListener('click',function getSlidePrev() {
    randomNum = bgNum
    randomNum = +randomNum 
    if (randomNum === 20) {
        randomNum = 1
    } else randomNum--
    bgNum = bgNum.toString().padStart(2, "0");
     body.style.backgroundImage = `url(https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg)`
     setBg()
})

// WEATHER


