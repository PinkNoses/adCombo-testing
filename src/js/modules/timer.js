function initTimer() {
  /* Timer */

  let workTime = 10;

  let seconds = "00";

  //display
  window.onload = () => {};
  document.getElementById("min").innerHTML = workTime;
  document.getElementById("sec").innerHTML = seconds;

  start();

  //start timer
  function start() {
    //change the time
    seconds = 59;
    let workMinutes = workTime - 1;
    if (workMinutes < 10) {
      workMinutes = "0" + workMinutes;
    }

    //countdown
    let timerFunction = () => {
      //change the display
      document.getElementById("min").innerHTML = workMinutes;
      document.getElementById("sec").innerHTML = seconds;

      //start
      seconds = seconds - 1;

      if (seconds <= 9 && seconds >= 0) {
        seconds = "0" + seconds;
      }
      if (seconds < 0) {
        seconds = 59;
        workMinutes = workMinutes - 1;
        if (workMinutes <= 9 && workMinutes >= 0) {
          workMinutes = "0" + workMinutes;
        }
        if (workMinutes < 0) {
          workMinutes = "0" + 9;
        }
      }
    };

    //start countdown
    setInterval(timerFunction, 1000);
  }
}
export default initTimer;
