const circularProgressBar = document.querySelector(".circular-progress")
const progressValue = document.querySelector(".progress-value")
const startButton = document.querySelector("#starbtn")

// event listener
startButton.addEventListener("click", starCountdown)

function starCountdown() {

    let input = Number(progressValue.textContent);
    let startValue = input;
    // let degrees = Math.round((input * 100) / input)
    let degrees = 100

    if (input > 0) {
        let progress = setInterval(() => {

            progressValue.textContent = `${input}`
            circularProgressBar.style.background = `conic-gradient(#7d2ae8 ${degrees * 3.60}deg, #ededed 0deg)`

            input--
            degrees = Math.round(degrees - (100 / startValue));

            if (input < 0) {
                clearInterval(progress)
            }

        }, 1000)
    }

}
