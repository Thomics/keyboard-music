(function() {
  'use strict';
  
  angular
    .module('keyboardApp')
    .service('KeyboardService', KeyboardService);
  
  KeyboardService.$inject = [];
  
  function KeyboardService() {
    
    var vm = this;

    vm.getSound = getSound;


    vm.sound = {
      '48' : 'sounds/snare.wav',    //0
      '49' : 'sounds/high-hat.wav', //1
      '50' : 'sounds/high-hat.wav', //2
      '51' : 'sounds/high-hat.wav', //3
      '52' : 'sounds/high-hat.wav', //4
      '53' : 'sounds/high-hat.wav', //5
      '54' : 'sounds/high-hat.wav', //6
      '55' : 'sounds/high-hat.wav', //7
      '56' : 'sounds/high-hat.wav', //8
      '57' : 'sounds/high-hat.wav'  //9
    };


    function getSound(keyNum) {

      return vm.sound[keyNum];

    }
    
  }
  
})();
