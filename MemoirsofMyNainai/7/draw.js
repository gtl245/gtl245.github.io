/* code modified from https://p5js.org/examples/input-mouse-press.html */

function setup() {
   canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index','-1');
  strokeWeight(3);
  frameRate(10);
}

function draw() {
/* color changes if mouse if pressed */

  if (mouseIsPressed) {
    stroke(255);
  } else {
    stroke('#7797b0');
  }

/* draws crosses */

  line(mouseX - 20, mouseY, mouseX + 20, mouseY);
  line(mouseX, mouseY - 20, mouseX, mouseY + 20);
}
