class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval( () =>  {
      this.currentTime ++;
      if (typeof callback === "function") callback();
    }, 1000)
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60) ;
    return minutes;
  }

  getSeconds() {
    let seconds = Math.floor(this.currentTime % 60);
    return seconds;
  }

  computeTwoDigitNumber(value) {
    let result = value < 10 ? '0' + value : value;
    return String(result);
  }

  stop() {
  clearInterval(this.intervalId);
  }

  reset() {
  this.currentTime = 0;
  }

  split() {
   let m = this.computeTwoDigitNumber(this.getMinutes());
   let s = this.computeTwoDigitNumber(this.getSeconds());
   return `${m}:${s}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
