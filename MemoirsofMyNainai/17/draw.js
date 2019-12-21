/* code modified from  https://editor.p5js.org/ag3439/sketches/Skgh1ZQtQ */
/* blinking stars */

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index','-1');
  noCursor();
  noStroke();
  frameRate(5);
  background(47,73,95); 
}

function draw() {
  //background with transparancy
  background(47,73,95,50); 
  
  //blinking stars
  var galaxy = { 
  locationX : random(width),
  locationY : random(height),
  size : random(windowWidth/140, windowHeight/250)
}
  ellipse(mouseX ,mouseY, galaxy.size, galaxy.size);
  ellipse(galaxy.locationX ,galaxy.locationY, galaxy.size, galaxy.size);


}

