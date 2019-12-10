function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index','-1');

}


function draw() {
//  noStroke();
  
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
//  fill(r, g, b);
//  ellipse(mouseX, mouseY, 5);
  strokeWeight(5);
  stroke(r, g, b);
  line(mouseX, mouseY, pmouseX, pmouseY);
}

function mousePressed() {
  clear();
}
