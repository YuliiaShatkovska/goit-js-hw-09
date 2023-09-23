function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

startButton.classList.add('start');

startButton.addEventListener('click', onClickChangeColor);
stopButton.setAttribute('disabled', '');

let intervalId = 0;

function onClickChangeColor() {
  intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  startButton.setAttribute('disabled', '');
  stopButton.removeAttribute('disabled');
}

stopButton.addEventListener('click', onClickStopChangeColor);

function onClickStopChangeColor() {
  clearInterval(intervalId);
  startButton.removeAttribute('disabled');
  stopButton.setAttribute('disabled', '');
}
