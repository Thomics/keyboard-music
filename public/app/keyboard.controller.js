(function() {
  'use strict';

  angular
    .module('keyboardApp')
    .controller('KeyboardController', KeyboardController);

  KeyboardController.$inject = ['KeyboardService'];

  function KeyboardController(KeyboardService) {

    var vm = this;

    vm.sound;


    function play() {
      var audio = document.getElementById("audio");
      document.getElementById("audio").src = vm.sound;
      audio.play();
    }

    $(document).keypress(function(key) {
      console.log(key.which);
      vm.sound = KeyboardService.getSound([key.which]);
      play();
    });


  }

})();
