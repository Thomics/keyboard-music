'use strict';
$(document).ready(function() {

  //Global variables
  var keyObj = {start: 0, end: 0, time:[], key:[]};
  var recording = false;
  var playingBack = false;
  var timer;

  /**
   * When the user presses the keyboard, plays the sound, indicates the press and records the note.
   */
  $(document).keypress(function (pressedKey) {
    console.log(pressedKey.which);
    var key = keyNums[pressedKey.which];
    setKeyData(key)
  });


  /**
   * When the user uses the mouse to click on a key, plays the sound, indicates the press and records the note.
   */
  $(document).on("click", '.keys-container', function (event) {
    var key = '.'.concat(event.target.id);
    setKeyData(key);
  });


  /**
   * Takes a key from when a user presses a button, plays the corresponding sound, changes the keys style and if the user
   * is currently recording, records the key press information.
   * @param key the id of the item that was pressed/clicked.
   */
  function setKeyData(key) {
    ion.sound.play(key);
    changeKeyStyle(key);
    recordNotes(key);
  }


  /**
   * Takes a key and temporarily adds a class with a style to indicate hitting the key.
   * @param id this is the keyboard key that is pressed.
   */
  function changeKeyStyle(id) {
    $(id).addClass('key-press');
    setTimeout(function () {
      $(id).removeClass('key-press');
    }, 200);
  }



  /**********************************/
  //Recording the key presses section.
  /**********************************/

  $('.start-record').on('click', startRecord);

  $('.stop-record').on('click', stopRecord);


  /**
   * Takes a key that was pressed and if we are actively recording, saves the key to the keys object.
   * @param key the key that was pressed.
   */
  function recordNotes(key) {

    if (key === ".space") {
      if (recording) {
        stopRecord();
      } else {
        startRecord();
      }
    }

    if(recording) {
      var time = new Date();
      keyObj.time.push(time.getTime() - keyObj.start);
      keyObj.key.push(key);
    }
  }


  /**
   * Starts the program recording users keypresses.
   */
  function startRecord() {
    var time = new Date();
    displayTimer();
    keyObj.start = time.getTime();
    recording = true;
    changeKeyStyle('.start-record');
    $('.start-record').css({'background': '#f37736', 'border' : '1px solid #f37736', 'color' : '#fff'});
  }


  /**
   * Stops the program from recording users keypresses.
   */
  function stopRecord() {
    var time = new Date();
    keyObj.end = time.getTime();
    recording = false;
    changeKeyStyle('.stop-record');
    $('.start-record').removeAttr('style');
    clearInterval(timer);
  }

  var timeKeeper = {
    seconds: 0,
    leftOverTime: 0
  };

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



  /*************************************/
  //Playing back the key presses section.
  /*************************************/

  /**
   * When the user click's the 'play-record' button, the program plays back the users
   * key clicks in order, with the same timing.
   */
  $('.play-record').on('click', function() {
    playingBack = true;
    playback();
    changeKeyStyle('.play-record');
  });


  /**
   * Sets the timing for the playback of the user generated key presses.
   * @param i: i is a counter for keeping track of the keypress that should be played back.
   */
  function playbackTimer(i) {
    var pauseTime = keyObj.time[i];
    var key = keyObj.key[i];

    setTimeout(function () {
      ion.sound.play(key);
      changeKeyStyle(key);
    }, pauseTime, key);
  }


  /**
   * Plays the users generated music back to them.
   */
  function playback() {
    for (var i = 0; i < keyObj.time.length; i++) {
      playbackTimer(i);
    }
  }



  /******************/
  //Metronome section.
  /******************/

  $('.play-metronome').on('click', function() {
    ion.sound.play('.play-metronome');
    changeKeyStyle('.play-metronome');
  });


  $('.stop-metronome').on('click', function() {
    ion.sound.stop('.play-metronome');
    changeKeyStyle('.stop-metronome');
  });


});
