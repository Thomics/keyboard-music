ion.sound({
  sounds: [
    { name: "bongo1", alias: '49' },
    { name: "crash", alias: '50' }
  ],

  //general configuration
  path: "sounds/",
  preload: true,
  multiplay: true,
  volume: 1
});


$(document).keypress(function(key) {

  ion.sound.play(key.which);

});
