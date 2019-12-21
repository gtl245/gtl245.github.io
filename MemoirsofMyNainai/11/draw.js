//code modified from https://editor.p5js.org/khamiltonuk/sketches/nn_VjtTnq//

//draws heart//
var points = []
var i = 0

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index','-1');
}

function draw() {
  noFill()
  translate(width/2, height/2)
  stroke('#cf6f6c')
  strokeWeight(8)
  
  
  beginShape()
  points.forEach(point => {
    vertex(point.x,point.y)
  })
  endShape()
  
 
 //heart shape calculations//   
i+= 0.01
      var r = 10
      var x = r * 16 * pow(sin(i), 3)
      var y = - r * 1* (13 * cos(i) - 5 * cos(2*i) - 2*cos(3*i) - cos(4* i))
      points.push({x, y})
  
  

}