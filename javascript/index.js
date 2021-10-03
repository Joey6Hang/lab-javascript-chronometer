const chronometer = new Chronometer();
console.log(chronometer);
// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime(minutes , seconds) {
printMinutes(minutes);
printSeconds(seconds);
}

function printMinutes() {
  const string = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.textContent = string [0];
  minUniElement.textContent = string [1];

}

function printSeconds() {
const string = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
secDecElement.textContent = string [0]; // the decimals (1 to 19)
secUniElement.textContent = string [1]; // the units (9 of 19)
}

// ==> BONUS
function printMilliseconds() {
}

function printSplit(time) {

}

function clearSplits() {
  let ulsplit = document.getElementById('splits');
  ulsplit.innerHTML = '';
}

function setStopBtn() {
chronometer.start(printTime)
btnLeftElement.textContent = 'STOP';
btnLeftElement.classList.toggle('stop');
btnLeftElement.classList.toggle('start')

}

function setSplitBtn() {
chronometer.reset()
btnRight.innerHTML = 'SPLIT';
btnRightElement.classList.toggle('reset');
btnRightElement.classList.toggle('split')

}

function setStartBtn() {
  chronometer.stop()
btnLeftElement.innerHTML = 'START'
btnLeftElement.classList.toggle('stop');
btnLeftElement.classList.toggle('start')

}

function setResetBtn() {
  chronometer.split()
  btnRight.innerHTML = 'RESET';
  btnRightElement.classList.toggle('reset');
  btnRightElement.classList.toggle('split')
  }

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerHTML === 'START') {
    setStopBtn();
    setSplitBtn();
  } else {
    setStartBtn();
    setResetBtn();
  }
  

});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRight.innerHTML === 'RESET'){
    chronometer.resetClick();
    clearSplits();
  } else {
    chronometer.splitClick();
    printSplit()
  }
});
