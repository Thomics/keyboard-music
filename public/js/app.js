'use strict';
$(document).ready(function() {

  var keyArr = {start: 0, end: 0, time:[], key:[]};
  var recording = false;


  $(document).keypress(function (pressedKey) {

    var key = keyNums[pressedKey.which];
    ion.sound.play(key);
    changeKeyStyle(key);

    console.log(key);
    recordNotes(key);

  });


  function recordNotes(key) {
    if(key === '#space' && recording) {

      recording = !recording;

      startRecord();
    }
    if(recording) {
      var time = new Date();
      keyArr.time.push(time.getTime() - keyArr.start);
      keyArr.key.push(key);
    }
  }


  //Mouse click
  $(document).on("click", '.keys-container', function (event) {
    var id = '#'.concat(event.target.id);
    ion.sound.play(id);
    changeKeyStyle(id);
  });


  $('#play-metronome').on('click', function() {
    ion.sound.play('#play-metronome');
    changeKeyStyle('#play-metronome');
  });


  $('#stop-metronome').on('click', function() {
    ion.sound.stop('#play-metronome');
    changeKeyStyle('#stop-metronome');
  });


  $('#start-record').on('click', startRecord);

  $('#stop-record').on('click', stopRecord);


  function startRecord() {
    var time = new Date();
    keyArr.start = time.getTime();
    recording = true;
    changeKeyStyle('#start-record');
    $('.recording').css({'background': '#83d0c9'});
  }

  function stopRecord() {
    var time = new Date();
    keyArr.end = time.getTime();
    recording = false;
    changeKeyStyle('#stop-record');
    $('.recording').css({'background': '#800080'});
  }





  /**
   * Takes a key and changes the corresponding classes style to match up with the key press.
   * @param id this is the keyboard key that is pressed.
   */
  function changeKeyStyle(id) {
    $(id).css({'-webkit-filter': 'opacity(.8)', 'filter': 'opacity(.8)'});
    setTimeout(function () {
      $(id).css({'-webkit-filter': '', 'filter': ''});
    }, 200);
  }


  $('#play-record').on('click', function() {
    playback();
    changeKeyStyle('#play-record');
  });


  function playbackTimer(i) {
    var pauseTime = keyArr.time[i];
    var key = keyArr.key[i];

    setTimeout(function () {
      ion.sound.play(key);
      changeKeyStyle(key);
    }, pauseTime, key);
  }


  function playback() {
    for (var i = 0; i < keyArr.time.length; i++ ) {
      playbackTimer(i);
    }
  }


});
