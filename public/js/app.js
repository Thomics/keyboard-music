$(document).ready(function() {

  $(document).keypress(function (key) {

    var key = keyNums[key.which];
    ion.sound.play(key);
    changeKeyStyle(key);

  });


  $(document).on("click", ".keys-container", function (event) {

    var id = '#'.concat(event.target.id);
    ion.sound.play(id);
    changeKeyStyle(id);

  });


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


  ion.sound({
    sounds: [
      {name: "drumstick", alias: '#zero'},  //key: 0, ascii: 48
      {name: "bongo1",    alias: '#one'},   //key: 1, ascii: 49
      {name: "bongo2",    alias: '#two'},   //key: 2, ascii: 50
      {name: "bongo3",    alias: '#three'}, //key: 3, ascii: 51
      {name: "bongo4",    alias: '#four'},  //key: 4, ascii: 52
      {name: "bongo5",    alias: '#five'},  //key: 5, ascii: 53
      {name: "snare",     alias: '#six'},   //key: 6, ascii: 54
      {name: "crash",     alias: '#seven'}, //key: 7, ascii: 55
      {name: "high-hat",  alias: '#eight'}, //key: 8, ascii: 56
      {name: "triangle",  alias: '#nine'},  //key: 9, ascii: 57
      {name: "f-major",   alias: '#q'},     //key: q, ascii: 113
      {name: "fs-major",  alias: '#w'},     //key: w, ascii: 119
      {name: "g-major",   alias: '#e'},     //key: e, ascii: 101
      {name: "gs-major",  alias: '#r'},     //key: r, ascii: 114
      {name: "a-major",   alias: '#t'},     //key: t, ascii: 116
      {name: "as-major",  alias: '#y'},     //key: y, ascii: 121
      {name: "b-major",   alias: '#u'},     //key: u, ascii: 117
      {name: "c-major",   alias: '#i'},     //key: i, ascii: 105
      {name: "cs-major",  alias: '#o'},     //key: o, ascii: 111
      {name: "d-major",   alias: '#p'},     //key: p, ascii: 112
      {name: "ds-major",  alias: '#lbracket'}, //key: [, ascii: 91
      {name: "e-major",   alias: '#rbracket'}, //key: ], ascii: 93
      {name: "f-minor",   alias: '#a'},     //key: a, ascii: 97
      {name: "fs-minor",  alias: '#s'},     //key: s, ascii: 115
      {name: "g-minor",   alias: '#d'},     //key: d, ascii: 100
      {name: "gs-minor",  alias: '#f'},     //key: f, ascii: 102
      {name: "a-minor",   alias: '#g'},     //key: g, ascii: 103
      {name: "as-minor",  alias: '#h'},     //key: h, ascii: 104
      {name: "b-minor",   alias: '#j'},     //key: j, ascii: 106
      {name: "c-minor",   alias: '#k'},     //key: k, ascii: 107
      {name: "cs-minor",  alias: '#l'},     //key: l, ascii: 108
      {name: "d-minor",   alias: '#colon'}, //key: ;, ascii: 59
      {name: "ds-minor",  alias: '#apostrophe'} //key: ', ascii: 39
    ],

      //general configuration
      path: "public/sounds/",
      preload: true,
      multiplay: true,
      volume: 1
    });

  });


  var keyNums = {
    '49'  : '#one',
    '50'  : '#two',
    '51'  : '#three',
    '52'  : '#four',
    '53'  : '#five',
    '54'  : '#six',
    '55'  : '#seven',
    '56'  : '#eight',
    '57'  : '#nine',
    '48'  : '#zero',
    '113' : '#q',
    '119' : '#w',
    '101' : '#e',
    '114' : '#r',
    '116' : '#t',
    '121' : '#y',
    '117' : '#u',
    '105' : '#i',
    '111' : '#o',
    '112' : '#p',
    '91'  : '#lbracket',
    '93'  : '#rbracket',
    '#a'  : '97',
    '115' : '#s',
    '100' : '#d',
    '102' : '#f',
    '103' : '#g',
    '104' : '#h',
    '106' : '#j',
    '107' : '#k',
    '108' : '#l',
    '59'  : '#colon',
    '39'  : '#apostrophe'
  };


//var keyClasses = {
//  '#one'  : '49',
//  '#two'  : '50',
//  '#three': '51',
//  '#four' : '52',
//  '#five' : '53',
//  '#six'  : '54',
//  '#seven': '55',
//  '#eight': '56',
//  '#nine' : '57',
//  '#zero' : '48',
//  '#q'    : '113',
//  '#w'    : '119',
//  '#e'    : '101',
//  '#r'    : '114',
//  '#t'    : '116',
//  '#y'    : '121',
//  '#u'    : '117',
//  '#i'    : '105',
//  '#o'    : '111',
//  '#p'    : '112',
//  '#lbracket' : '91',
//  '#rbracket' : '93',
//  '#a'    : '97',
//  '#s'    : '115',
//  '#d'    : '100',
//  '#f'    : '102',
//  '#g'    : '103',
//  '#h'    : '104',
//  '#j'    : '106',
//  '#k'    : '107',
//  '#l'    : '108',
//  '#colon' : '59',
//  '#apostrophe' : '39'
//};