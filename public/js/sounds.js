/**
 * Sets the corresponding sounds to the key classes.
 */
ion.sound({
  sounds: [
    //Row 1 - 0
    {name: "Perc1",    alias: '.zero', volume:.7},  //key: 0, ascii: 48
    {name: "Kick1",    alias: '.one'},   //key: 1, ascii: 49
    {name: "Kick2",    alias: '.two'},   //key: 2, ascii: 50
    {name: "Kick3",    alias: '.three'}, //key: 3, ascii: 51
    {name: "Kick4",    alias: '.four'},  //key: 4, ascii: 52
    {name: "Clap1",    alias: '.five'},  //key: 5, ascii: 53
    {name: "Clap2",    alias: '.six'},   //key: 6, ascii: 54
    {name: "Clap3",    alias: '.seven'}, //key: 7, ascii: 55
    {name: "Clap4",    alias: '.eight'}, //key: 8, ascii: 56
    {name: "Perc10",   alias: '.nine'},  //key: 9, ascii: 57

    //Row qwerty
    {name: "Perc9",    alias: '.q'},     //key: q, ascii: 113
    {name: "Perc7",    alias: '.w'},     //key: w, ascii: 119
    {name: "Perc3",    alias: '.e'},     //key: e, ascii: 101
    {name: "Perc4",    alias: '.r'},     //key: r, ascii: 114
    {name: "Perc6",    alias: '.t'},     //key: t, ascii: 116
    {name: "Perc8",    alias: '.y'},     //key: y, ascii: 121
    {name: "Perc2",    alias: '.u'},     //key: u, ascii: 117
    {name: "Perc5",    alias: '.i'},     //key: i, ascii: 105
    {name: "triangle", alias: '.o'},     //key: o, ascii: 111
    {name: "snap",     alias: '.p'},     //key: p, ascii: 112

    //Row asdf
    {name: "synth5",   alias: '.a'},     //key: a, ascii: 97
    {name: "synth6",   alias: '.s'},     //key: s, ascii: 115
    {name: "synth7",   alias: '.d'},     //key: d, ascii: 100
    {name: "synth8",   alias: '.f'},     //key: f, ascii: 102
    {name: "synth9",   alias: '.g'},     //key: g, ascii: 103
    {name: "bass",     alias: '.h'},     //key: h, ascii: 104
    {name: "ah",       alias: '.j'},     //key: j, ascii: 106
    {name: "do",       alias: '.k'},     //key: k, ascii: 107
    {name: "uhh",      alias: '.l'},     //key: l, ascii: 108
    {name: "oh",       alias: '.colon'}, //key: ;, ascii: 59

    //Row zxcv
    {name: "synth6",       alias: '.z'}, //key: z, ascii: 122
    {name: "synth6",       alias: '.x'}, //key: x, ascii: 120
    {name: "synth6",       alias: '.c'}, //key: c, ascii: 99
    {name: "synth6",       alias: '.v'}, //key: v, ascii: 118
    {name: "synth6",       alias: '.b'}, //key: b, ascii: 98
    {name: "synth6",       alias: '.n'}, //key: n, ascii: 110
    {name: "synth6",       alias: '.m'}, //key: m, ascii: 109
    {name: "synth6",       alias: '.comma'}, //key: comma, ascii: 44
    {name: "synth6",       alias: '.period'}, //key: period, ascii: 46

    {name: "metronome",   alias: '.play-metronome', loop: true, volume: .3}

  ],

  //general configuration
  path: "public/sounds/",
  preload: true,
  multiplay: true,
  volume: 1
});


var keyNums = {
  '49'  : '.one',
  '50'  : '.two',
  '51'  : '.three',
  '52'  : '.four',
  '53'  : '.five',
  '54'  : '.six',
  '55'  : '.seven',
  '56'  : '.eight',
  '57'  : '.nine',
  '48'  : '.zero',
  '113' : '.q',
  '119' : '.w',
  '101' : '.e',
  '114' : '.r',
  '116' : '.t',
  '121' : '.y',
  '117' : '.u',
  '105' : '.i',
  '111' : '.o',
  '112' : '.p',
  '97'  : '.a',
  '115' : '.s',
  '100' : '.d',
  '102' : '.f',
  '103' : '.g',
  '104' : '.h',
  '106' : '.j',
  '107' : '.k',
  '108' : '.l',
  '59'  : '.colon',
  '122' : '.z',
  '120' : '.x',
  '99'  : '.c',
  '118' : '.v',
  '98'  : '.b',
  '110' : '.n',
  '109' : '.m',
  '44'  : '.comma',
  '46'  : '.period',
  '32'  : '.space',
  '15'  : '.shift',

  //Muted Sounds
  '13'  : '.return',
  '39'  : '.apostrophe',
  '45'  : '.minus',
  '47'  : '.fslash',
  '61'  : '.plus',
  '91'  : '.lbracket',
  '92'  : '.bslash',
  '93'  : '.rbracket',
  '96'  : '.tilde'
};
