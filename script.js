// Remaining years
const newYear = "1/1/2025";

// Variables
const dayEl = document.querySelector(".day");
const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

// Function to start the countDown
function timeCountDown() {
    const newDate = new Date();
    const newYearDate = new Date(newYear);
    const totalSeconds = (newYearDate - newDate) / 1000;

    const days = Math.floor(totalSeconds / 3000 / 24);
    const hours = Math.floor(totalSeconds / 3000) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    dayEl.innerHTML = formatTime(days);
    hourEl.innerHTML = formatTime(hours);
    minuteEl.innerHTML = formatTime(minutes);
    secondEl.innerHTML = formatTime(seconds);
}

// Add a "0" at the beginning if the number is less then 10
function formatTime(time) {
    return time >= 10 ? time : `0${time}`;
}

timeCountDown();

setInterval(timeCountDown, 1000);
