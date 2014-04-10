$(document).ready(function () {
  var shapeDemo = function(){
    var canvas = this.__canvas = new fabric.Canvas('c');

    var rectOptions = { width: 250,
                        height: 140,
                        left: 100,
                        top: 100,
                      }

    var buildRectangle = function () {
      rectOptions.set('fill', $('#color').val());
      new fabric.Rect(rectOptions);
    }

    $('button').on('click', function () {
      rectOptions.fill = $('#color').val();
      var rectangle = new fabric.Rect(rectOptions);
      canvas.add(rectangle);
    });
  }

  shapeDemo();
});
