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

    //$(document).keypress(function(key) {
    //  console.log(key.which);
    //  vm.sound = KeyboardService.getSound([key.which]);
    //  document.getElementById("audio").src = vm.sound;
    //  play();
    //
    //});

    $(document).keypress(function(key) {


      if (key.which === 49) {


        var audio1 = document.getElementById("audio1");
        audio1.mediaGroup = 'key';
        //audio1.pause();
        audio1.currentTime = 0;
        audio1.play();

      }

      if (key.which === 50) {
        var audio2 = document.getElementById("audio2");
        audio2.mediaGroup = 'key';
        //document.getElementById("audio2").src = vm.sound;
        audio2.play();
      }

      if (key.which === 51) {
        var audio3 = document.getElementById("audio3");
        audio3.mediaGroup = 'key';
        //document.getElementById("audio2").src = vm.sound;
        audio3.play();
      }

    });




  }

})();
