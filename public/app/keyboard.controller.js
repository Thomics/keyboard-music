(function() {
  'use strict';

  angular
    .module('keyboardApp')
    .controller('KeyboardController', KeyboardController);

  KeyboardController.$inject = ['KeyboardService'];

  function KeyboardController(KeyboardService) {

    var vm = this;

    //vm.getSound = KeyboardService.getSound;

    vm.sound;



    function play() {
      var audio = document.getElementById("audio");
      document.getElementById("audio").src = vm.sound;
      audio.play();
    }

    $(document).keypress(function(key) {
      vm.sound = KeyboardService.getSound([key.which]);
      play();
    });



  }

})();
