$(document).keypress(function (key) {

  var key = key.which;
  ion.sound.play(key);

  changeKeyStyle(keyValues[key]);

});



function changeKeyStyle(key) {
  $(key).css({'-webkit-filter': 'opacity(.8)', 'filter': 'opacity(.8)'});
  setTimeout(function(){
    $(key).css({'-webkit-filter': '', 'filter': ''});
  }, 200);
}


var keyValues = {
  '49' : '.one',
  '50' : '.two',
  '51' : '.three',
  '52' : '.four',
  '53' : '.five',
  '54' : '.six',
  '55' : '.seven',
  '56' : '.eight',
  '57' : '.nine',
  '48' : '.zero'
};



ion.sound({
  sounds: [
    { name: "drumstick", alias: '48'  }, //0
    { name: "bongo1",    alias: '49'  }, //1
    { name: "bongo2",    alias: '50'  }, //2
    { name: "bongo3",    alias: '51'  }, //3
    { name: "bongo4",    alias: '52'  }, //4
    { name: "bongo5",    alias: '53'  }, //5
    { name: "snare",     alias: '54'  }, //6
    { name: "crash",     alias: '55'  }, //7
    { name: "high-hat",  alias: '56'  }, //8
    { name: "triangle",  alias: '57'  }, //9
    { name: "f-major",   alias: '113' }, //q
    { name: "fs-major",  alias: '119' }, //w
    { name: "g-major",   alias: '101' }, //e
    { name: "gs-major",  alias: '114' }, //r
    { name: "a-major",   alias: '116' }, //t
    { name: "as-major",  alias: '121' }, //y
    { name: "b-major",   alias: '117' }, //u
    { name: "c-major",   alias: '105' }, //i
    { name: "cs-major",  alias: '111' }, //o
    { name: "d-major",   alias: '112' }, //p
    { name: "ds-major",  alias: '91'  }, //[
    { name: "e-major",   alias: '93'  }, //]
    { name: "f-minor",   alias: '97'  }, //q
    { name: "fs-minor",  alias: '115' }, //w
    { name: "g-minor",   alias: '100' }, //e
    { name: "gs-minor",  alias: '102' }, //r
    { name: "a-minor",   alias: '103' }, //t
    { name: "as-minor",  alias: '104' }, //y
    { name: "b-minor",   alias: '106' }, //u
    { name: "c-minor",   alias: '107' }, //i
    { name: "cs-minor",  alias: '108' }, //o
    { name: "d-minor",   alias: '59'  }, //p
    { name: "ds-minor",  alias: '39'  }  //[
  ],

  //general configuration
  path: "public/sounds/",
  preload: true,
  multiplay: true,
  volume: 1
});
