let timer;
let timeLeft = 25 * 60;
let running = false;

function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    document.getElementById("timer").textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function startTimer() {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                running = false;
            }
        }, 1000);
    }
}



function resetTimer() {
    clearInterval(timer);
    timeLeft = 25 * 60;
    updateDisplay();
    running = false;
}

function stopTimer() {
    clearInterval(timer);
    timeLeft = 0;
    updateDisplay();
    running = false;
}

function setMode(minutes) {
    clearInterval(timer);
    timeLeft = minutes * 60;
    updateDisplay();
    running = false;
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("short-break").addEventListener("click", () => setMode(5));
document.getElementById("long-break").addEventListener("click", () => setMode(15));

updateDisplay();