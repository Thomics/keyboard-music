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
      '48' : 'sounds/snare.wav',    //0
      '49' : 'sounds/high-hat.wav', //1
      '50' : 'sounds/snare.wav', //2
      '51' : 'sounds/high-hat.wav', //3
      '52' : 'sounds/snare.wav', //4
      '53' : 'sounds/high-hat.wav', //5
      '54' : 'sounds/snare.wav', //6
      '55' : 'sounds/high-hat.wav', //7
      '56' : 'sounds/high-hat.wav', //8
      '57' : 'sounds/high-hat.wav'  //9
    };

    //console.log(vm.sound);

    function getSound(keyNum) {

      return vm.soundList[keyNum];

    }
    
  }
  
})();
