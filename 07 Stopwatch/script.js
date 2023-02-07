const hours = document.querySelector(".hours")
const minutes = document.querySelector(".minutes")
const seconds = document.querySelector(".seconds")
const miliseconds = document.querySelector(".miliseconds")

const startbtn = document.querySelector(".start")
const stopbtn = document.querySelector(".stop")
const resetbtn = document.querySelector(".reset")

// Event listeners
startbtn.addEventListener("click", start);
stopbtn.addEventListener("click", stop);
resetbtn.addEventListener("click", reset);

let [hr, min, sec, ms] = [0, 0, 0, 0]
let startTimer
// Functions

function start() {
    startbtn.classList.add("inactive")
    stopbtn.classList.remove("inactive")
    startTimer = setInterval(() => {
        ms++

        if (ms == 100) {
            sec++;
            ms = 0
        }
        if (sec == 60) {
            min++;
            sec = 0;
        }
        if (min == 60) {
            hr++;
            min = 0;
        }
        display()
    }, 10)

}

function stop() {
    startbtn.classList.remove("inactive")
    stopbtn.classList.add("inactive")
    clearInterval(startTimer)
}

function reset() {
    startbtn.classList.remove("inactive")
    stopbtn.classList.add("inactive")
    clearInterval(startTimer)
    hr = min = sec = ms = 0;
    display()


}

function display() {
    hours.textContent = hr < 10 ? "0" + hr : hr
    minutes.textContent = min < 10 ? "0" + min : min
    seconds.textContent = sec < 10 ? "0" + sec : sec
    miliseconds.textContent = ms < 10 ? "0" + ms : ms
}