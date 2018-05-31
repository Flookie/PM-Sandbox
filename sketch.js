// Main module by Marcus Belcastro
// This is the main file for the program and is the first code to be executed

// Global object lists
var buttons = [];
var sliders = [];
var particles = [];
var fields = [];

// Colours
var BG_COL = 35;                  //background
var BASE_COL = 200;               //base button/slider
var LOCK_COL = 75;                //locked button/slider
var TEXT_COL = 20;                //button/slider text
var P_COL = 150;                  //particle
var V_COL = 255;                  //vector
var HYP_COL = [255, 117, 26]      //Hypotenuse

//Vector character codes
var VEL = 'V'
var ACC = 'A'
var FCE = 'F'

// Numerical constants
var P_RAD = 3;                    //particle radius
var V_SCALE = 1;                  //vector scale
var V_STROKE = 5;                 //vector stroke weight
var T_SIZE = 16;                  //text size

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
  background(BG_COL)
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].show();
  }
  for (let i = 0; i < sliders.length; i++) {
    sliders[i].show();
  }
}
