'use strict';
$(document).ready(function() {

  //Global variables
  var keyData = {
    start: 0,
    end: 0,
    time:[],
    key:[],
    clearData: function() {
      this.start = 0;
      this.end = 0;
      this.time = [];
      this.key = [];
    }
  };

  var state = {
    recording: false,
    hasRecording: false,
    playingBack: false
  };


  /**
   * When the user presses the keyboard, plays the sound, indicates the press and records the note.
   */
  $(document).keypress(keyPressed);

  function keyPressed(pressedKey) {
    //Gets the key's class from the object of key class pairs.
    var key = keyNums[pressedKey.which];
    setKeyData(key);
    paintKey(key);
  }


  $(document).on("click", '.keys-container', mouseClicked);

  /**
   * When the user uses the mouse to click on a key, plays the sound, indicates the press and records the note.
   * @param keyClicked - the key that the user clicks on with the mouse.
   */
  function mouseClicked(keyClicked) {
    var key = '.'.concat(keyClicked.target.className.split('key ')[1]);
    setKeyData(key);
  }


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

  $('.record-input').on('click', setRecording);

  $('.stop-playback').on('click', stopRecord);


  /**
   * Toggles the recording feature to the opposite of it's current state.
   */
  function setRecording() {

    console.log(state.playingBack);
    if ( state.recording ) {
      stopRecord();
    } else {
      startRecord();
    }

  }


  /**
   * Takes a key that was pressed and if we are actively recording, saves the key to the keys object.
   * @param key the key that was pressed.
   */
  function recordNotes(key) {

    //Checks if the user selects a key to stop the recording.
    checkStopRecord(key);

    //If the program is currently recording, adds the key and the time to the keyData object.
    if(state.recording && !state.playingBack) {
      var time = new Date();
      keyData.time.push(time.getTime() - keyData.start);
      keyData.key.push(key);
    }
  }


  function checkStopRecord(key) {
    if (key === ".space" && !state.playingBack) {
      setRecording();
    }
  }


  /**
   * Starts the program recording users keypresses.
   */
  function startRecord() {

    if( !state.playingBack ) {
      keyData.clearData();
      var time = new Date();
      keyData.start = time.getTime();
      state.recording = true;
      $('.timeline').removeAttr('style');
      displayTimer();
      displayTimeline();
      $('.record-input').addClass('recording');
    }

  }


  /**
   * Stops the program from recording users keypresses.
   */
  function stopRecord() {
    var time = new Date();
    keyData.end = time.getTime();
    state.recording = false;
    $('.record-input').removeClass('recording');
    $('.timeline').stop(); //Stops the timeline animation.
    clearInterval(timer);
  }


  /*************************************/
  //Playing back the key presses section.
  /*************************************/

  $('.start-playback').on('click', playRecord);

  /**
   * When the user click's the 'play-record' button, the program plays back the users
   * key clicks in order, with the same timing.
   */
  function playRecord() {

    if ( !state.playingBack && !state.recording) {
      state.playingBack = true;
      displayTimer();

      setTimeout(function() {
        state.playingBack = false;
        $('.start-playback').removeClass('hide');
        $('.stop-playback').addClass('hide');
        clearInterval(timer);
      }, keyData.end - keyData.start );

      $('.start-playback').addClass('hide');
      $('.stop-playback').removeClass('hide');
      playback();
    }

  }


  /**
   * Sets the timing for the playback of the user generated key presses.
   * @param i: i is a counter for keeping track of the keypress that should be played back.
   */
  function playbackTimer(i) {
    var pauseTime = keyData.time[i];
    var key = keyData.key[i];

    setTimeout(function () {
      ion.sound.play(key);
      changeKeyStyle(key);
    }, pauseTime, key);
  }


  /**
   * Plays the users generated music back to them.
   */
  function playback() {
    for (var i = 0; i < keyData.time.length; i++) {
      playbackTimer(i);
    }
  }



  function paintKey(key) {
    key = key.split('.')[1];
    if ( state.recording && key != 'space' ) {
      var width = $('.timeline').width();
      $('.timeline').append('<div class="key-stroke ' + key + '" style="left: ' + width + 'px;" </div>');
    }
  }


  function displayTimeline() {

    $('.timeline')
      .empty()
      .animate({width: '950px'}, 19500, 'linear');

  }


});
