
const display = document.getElementById("display");
const startBtn = document.getElementById("start-timer");
const pauseBtn = document.getElementById("pause-timer");
const resetBtn = document.getElementById("reset-timer");

let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let timer;
 
function startTimer() {
    timer = setInterval(function() {
        milliseconds += 10;
        if (milliseconds >= 1000) {
            milliseconds = 0;
            seconds++;
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
                if (minutes >= 60) {
                    minutes = 0;
                    hours++;
                }
            }
        }
        display.innerHTML = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}.${formatTime(milliseconds)}`;
    }, 10);
    startBtn.disabled = true;
}

// Function to pause the stopwatch
function pauseTimer() {
    clearInterval(timer);
    startBtn.disabled = false;
}

// Function to reset the stopwatch
function resetTimer() {
    clearInterval(timer);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    display.innerHTML = "00:00:00.000";
    startBtn.disabled = false;
}

// Function to format time values
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Adding event listeners
startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);
