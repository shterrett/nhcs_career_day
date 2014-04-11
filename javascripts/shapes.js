$(document).ready(function () {
  var shapeDemo = function(){
    var canvas = this.__canvas = new fabric.Canvas('c');

    var rectOptions = { width: 250,
                        height: 140,
                        left: 100,
                        top: 100,
                        fill: 'blue'
                      }

    var userOptions = function() {
      return { width: parseInt($('#width').val()),
               height: parseInt($('#height').val()),
               left: parseInt($('#left').val()),
               top: parseInt($('#top').val()),
               fill: $('#color').val()
             }
    }

    var optionKeys = ['width', 'height', 'left', 'top', 'fill']

    var mergeOptions = function () {
      suppliedOptions = userOptions()
      resultOptions = {}
      optionKeys.forEach(function(value, index) {
        if (suppliedOptions[value]) {
          resultOptions[value] = suppliedOptions[value];
        } else {
          resultOptions[value] = rectOptions[value];
        }
      }, this)
      return resultOptions;
    }

    var buildRectangle = function () {
      return new fabric.Rect(mergeOptions());
    }

    $('button#render').on('click', function () {
      canvas.add(buildRectangle());
    });

    $('button#clear').on('click', function () {
      canvas.clear();
    });
  }

  shapeDemo();
});
