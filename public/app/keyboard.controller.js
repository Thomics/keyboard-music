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
      audio.play();

    }

    $(document).keypress(function(key) {
      console.log(key.which);

      vm.sound = KeyboardService.sound[key.which];

      console.log(vm.sound);

      if(key.which == 49) {

        play();

      }

    });



  }

})();
