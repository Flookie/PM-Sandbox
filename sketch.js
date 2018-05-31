var buttons = [];
var sliders = [];
var particles = [];
var fields = [];
var BASE_COL = 200;
var LOCK_COL = 75;
var TEXT_COL = 20;

// Function to fix scrollbars on the canvas
function windowResized() {
  resizeCanvas(1, 1);
  createStatic();
  setTimeout(function() {resizeCanvas(windowWidth, windowHeight);}, 20);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //sliders.push(new Slider(20, 20, 75, 275))
  buttons.push(new Button(20, 20, 275, 75, test, 'TEXT'));
}

function mousePressed() {
  for (let i = 0; i < buttons.length; i++) {
    b = buttons[i]
    if (b.isClicked(mouseX, mouseY)) {
      b.do(b);
    }
  }
}

function draw() {
  background(35)
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].show();
  }
  for (let i = 0; i < sliders.length; i++) {
    sliders[i].show();
  }
}
