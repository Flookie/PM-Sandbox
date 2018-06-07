// Main module by Marcus Belcastro
// This is the main file for the program and is the first code to be executed

// Global object lists
var buttons = []
var sliders = []
var particles = []
var fields = []

// Colours
var BG_COL = 35                  //background
var BASE_COL = 200               //base button/slider
var LOCK_COL = 75                //locked button/slider
var TEXT_COL = 20                //button/slider text
var P_COL = 150                  //particle
var V_COL = 255                  //vector
var HYP_COL = [255, 117, 26]     //hypotenuse
var F_COL = 255                  //field lines

//Vector character codes
var VEL = 'V'
var ACC = 'A'
var FCE = 'F'

// Numerical constants
var P_RAD = 20                   //particle radius
var V_SCALE = 10                 //vector scale
var V_STROKE = 5                 //vector stroke weight
var T_SIZE = 30                  //text size
var SPACE = 200                  //spacing of field lines
var F_SIZE = 2                   //stroke weight of field lines

// Function to fix scrollbars on the canvas
function windowResized() {
  resizeCanvas(1, 1)
  setTimeout(function() {resizeCanvas(windowWidth, windowHeight);}, 20);
}

function setup() {
  angleMode(DEGREES)
  createCanvas(windowWidth, windowHeight)
  //sliders.push(new Slider(20, 20, 75, 275))
  //buttons.push(new Button(200, 200, 275, 75, function() {console.log("Clicked");}, 'TEXT'))
  //fields.push(new Field(0.1, 1, 440))
  //fields[0].hide = false
  //particles.push(new Particle(0, 0, 1, 0, 10, VEL))
  //particles[0].showVectors = true
}

function mousePressed() {
  //handle button presses
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].isClicked(mouseX, mouseY)) {
      buttons[i].do(buttons[i])
    }
  }
}

function draw() {
  background(BG_COL)
  //show all the fields
  for (let i = 0; i < fields.length; i++) {
    fields[i].show()
  }

  //show all particles and apply all fields to particles
  for (let i = 0; i < particles.length; i++) {
    for (let j = 0; j < fields.length; j++) {
      particles[i].applyField(fields[j])
    }
    particles[i].update()
  }

  //show all buttons
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].show()
  }

  //show all sliders
  for (let i = 0; i < sliders.length; i++) {
    sliders[i].show()
  }

}
