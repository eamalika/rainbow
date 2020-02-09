var cols, rows;
var w = 40;
var grid = [];


function setup() {
  createCanvas(windowWidth, windowHeight);

  cols = floor(width / w);
  rows = floor(height / w);

  console.log(mouseX, mouseY);

  for (var j = 0; j < rows; j++) {
    for (var i = 0; i < cols; i++) {
      var cell = new Cell(i, j);
      grid.push(cell);
    }
  }
}

function draw() {
  background(0);

  for (var i = 0; i < grid.length; i++) {
    grid[i].show();
  }

  if (mouseIsPressed) {
    for (var j = 0; j < rows; j++) {
      for (var k = 0; k < cols; k++) {
        randomColor = color(random(255), random(255), random(255));
        fill(randomColor);
        rect(k * w, j * w, w, w);
      }
    }
  }




}

function Cell(i, j) {
  this.i = i;
  this.j = j;

  this.show = function() {
    var x = this.i * w;
    var y = this.j * w;
    stroke(225);
    line(x, y, x + w, y);
    line(x + w, y, x + w, y + w);
    line(x + w, y + w, x, y + w);
    line(x, y + w, x, y);

  };

}
