var timeKeeper = {
  timeOffset: 0,
  leftOverTime: 0
};

var timer;

/**
 * Creates a timer using setInterval and the Date object.
 */
function displayTimer() {
  var time = new Date();
  timeKeeper.timeOffset = time.getSeconds();
  console.log(timeKeeper.timeOffset);
  timer = setInterval(setTime, 20);
}

/**
 *
 * @param seconds - the amount of seconds to offset the time so we don't start recording at times other than 0 seconds.
 */
function setTime() {
  var time = new Date();
  //Sets seconds to 0.
  var seconds = time.getSeconds() - timeKeeper.timeOffset + timeKeeper.leftOverTime;
  var milliseconds = time.getMilliseconds();

  if ( seconds > 19 ) {
    clearInterval(timer);
  }

  if ( (time.getSeconds() - timeKeeper.timeOffset) < 0 ) {
    timeKeeper.leftOverTime =  60 - timeKeeper.timeOffset;
    timeKeeper.timeOffset = 0;
  }

  $('.timer').html( seconds + ':' + milliseconds );

}


