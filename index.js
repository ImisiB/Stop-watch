let [milliseconds, seconds, minutes] = [0, 0, 0];
let display = document.getElementById('display');
let timer = null;

document.getElementById('startBtn').addEventListener('click', () => {
    if(timer !== null) clearInterval(timer);
    timer = setInterval(displayTimer, 10);
});

document.getElementById('stopBtn').addEventListener('click', () => {
    clearInterval(timer);
});

document.getElementById('resetBtn').addEventListener('click', () => {
    clearInterval(timer);
    [milliseconds, seconds, minutes] = [0, 0, 0];
    display.innerHTML = '00:00:00';
});

function displayTimer() {
    milliseconds += 10;
    if(milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if(seconds == 60) {
            seconds = 0;
            minutes++;
        }
    }

    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    display.innerHTML = `${m}:${s}:${ms.toString().slice(0,2)}`;
}
