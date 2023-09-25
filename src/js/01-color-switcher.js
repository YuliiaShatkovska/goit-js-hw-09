function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

startButton.classList.add('start');
stopButton.classList.add('stop');

startButton.addEventListener('click', onClickChangeColor);
stopButton.disabled = true;

let intervalId = 0;

function onClickChangeColor() {
  intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  startButton.disabled = true;
  stopButton.disabled = false;
}

stopButton.addEventListener('click', onClickStopChangeColor);

function onClickStopChangeColor() {
  clearInterval(intervalId);
  startButton.disabled = false;
  stopButton.disabled = true;
}
