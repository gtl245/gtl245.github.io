var mx;
var my;
var size = 100;
var xpos = 0.0;
var ypos = 0.0;
var hover = false;
var check = false;


function setup() {
  createCanvas(1400, 750);
  mx = width / 2.0;
  my = height / 2.0;


}


function draw() {
  background(81, 99, 101);
  textSize(20);
  text('Click, Drag, and Hover over the Circle! Press S to make the Circle smaller and B to make the Circle bigger!', 60, 130, 200);
  if ((mx - size)<mouseX  && (mx + size)> mouseX && (my - size) < mouseY && (my + size)> mouseY) {
    hover = true;
    noStroke();
    textSize(50);
    text('Hello!', mx-60, 130);
  } 
  else {
    fill(238, 107, 97);
    hover = false;
  }

  noStroke();
  ellipse(mx, my, size * 2, size * 2);
}

function mouseDragged() {
  if (check) {
    mx = mouseX - xpos;
    my = mouseY - ypos;
  }
}

function mousePressed() {
  if (hover) {
    check = true;
    fill(127, 157, 157);
  } 

  else {
    check = false;
  }
  xpos = mouseX - mx;
  ypos = mouseY - my;
}


function keyPressed() {
  if (keyCode === 83) {
    size = 40;
  } 
  if (keyCode === 66) {
    size = 100;
  }
}



function mouseReleased() {
  check = false;
}
