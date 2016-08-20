var timeKeeper = {
  seconds: 0,
  leftOverTime: 0
};

var timer;

/**
 * Creates a timer using setInterval and the Date object.
 */
function displayTimer() {
  var time = new Date();
  timeKeeper.seconds = time.getSeconds();
  timer = setInterval(setTime, 60);
}

/**
 *
 * @param seconds the seconds to offset the time so we don't start recording at times other than 0 seconds.
 */
function setTime() {
  var time = new Date();

  var seconds = time.getSeconds() - timeKeeper.seconds + timeKeeper.leftOverTime;

  if ( (time.getSeconds() - timeKeeper.seconds) < 0 ) {
    timeKeeper.leftOverTime =  60 - timeKeeper.seconds;
    timeKeeper.seconds = 0;
  }

  if ( seconds > 59 ) {
    clearInterval(timer);
  }

  var milliseconds = time.getMilliseconds();

  $('.timer').html( seconds + ':' + milliseconds );
}
