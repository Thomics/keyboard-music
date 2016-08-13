(function() {
  'use strict';
  
  angular
    .module('keyboardApp')
    .service('KeyboardService', KeyboardService);
  
  KeyboardService.$inject = [];
  
  function KeyboardService() {
    
    var vm = this;

    vm.getSound = getSound;

    vm.soundList = {
      '48' : 'sounds/drumstick.wav',    //0
      '49' : 'sounds/bongo1.wav', //1
      '50' : 'sounds/bongo2.wav', //2
      '51' : 'sounds/bongo3.wav', //3
      '52' : 'sounds/bongo4.wav', //4
      '53' : 'sounds/bongo5.wav', //5
      '54' : 'sounds/snare.wav', //6
      '55' : 'sounds/crash.wav', //7
      '56' : 'sounds/high-hat.wav', //8
      '57' : 'sounds/triangle.wav',  //9
      '113' : 'sounds/guitar/f-major.wav',  //q
      '119' : 'sounds/guitar/fs-major.wav', //w
      '101' : 'sounds/guitar/g-major.wav',  //e
      '114' : 'sounds/guitar/gs-major.wav',  //r
      '116' : 'sounds/guitar/a-major.wav', //t
      '121' : 'sounds/guitar/as-major.wav',  //y
      '117' : 'sounds/guitar/b-major.wav', //u
      '105' : 'sounds/guitar/c-major.wav',  //i
      '111' : 'sounds/guitar/cs-major.wav',  //o
      '112' : 'sounds/guitar/d-major.wav', //p
      '91' : 'sounds/guitar/ds-major.wav',   //[
      '93' : 'sounds/guitar/e1-major.wav'   //]

    };

    //console.log(vm.sound);

    function getSound(keyNum) {

      return vm.soundList[keyNum];

    }
    
  }
  
})();
