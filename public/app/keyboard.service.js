(function() {
  'use strict';
  
  angular
    .module('keyboardApp')
    .service('KeyboardService', KeyboardService);
  
  KeyboardService.$inject = [];
  
  function KeyboardService() {
    
    var vm = this;

    vm.getSound = getSound;


    function getSound(keyNum) {
      //Match keyNum to object, and return audio file.
    }
    
  }
  
})();
