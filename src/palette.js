console.log("in pixel js");

(function() {
  'use strict';

  var brush;

  //create canvas
  function newCanvas() {
    var pixel;
    var canvas = $('#canvas')

    for (var i=0; i < 2214; i++) {
      canvas.append($('<div class="pixel"></div>'));
    }
  }

  newCanvas();

  function newPalette() {

  }

  $('.pixel').on('click', function(e){
    console.log("am i firing?");
     $(this).css("background-color", "red");
  });

  $('.paint-color').on('click', function(){
    color = $(this).css('background-color');

  })


}());
