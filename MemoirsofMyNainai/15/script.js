/* parallax function from https://codepen.io/Pots1988/pen/mpNRag */

var $layer_1 = $('.layer-1'),
    $container = $('body'),
    container_w = $container.width(),
    container_h = $container.height();

$(window).on('mousemove', function(event) {
  var pos_x = event.pageX,
      pos_y = event.pageY,
      left  = 0,
      top   = 0;


/* calculations from mouse position */

  left = container_w / 2 - pos_x;
  top  = container_h / 2 - pos_y;



/* transformation based off calculations*/
  TweenMax.to(
    $layer_1, 
    1, 
    { 
      css: { 
        transform: 'translateX(' + left / 12 + 'px) translateY(' + top / 6 + 'px)' 
      }, 
      ease:Expo.easeOut, 
      overwrite: 'all' 
    });
});