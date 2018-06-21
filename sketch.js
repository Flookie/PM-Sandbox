// Main module by Marcus Belcastro
// This is the main file for the program and is the first code to be executed

// Global object lists
var buttons = []
var sliders = []
var particles = []
var fields = []
var context = null
var titleImg
var backgroundImg

// Colours
var BG_COL = 35                  //background
var BUT_COL = [255, 255, 255]        //base button
var BUT_STK = [0, 0, 0]        //button stroke
var LOCK_COL = 75                //locked button/slider
var TEXT_COL = 20                //button/slider text
var P_COL = 150                  //particle
var V_COL = 255                  //vector
var HYP_COL = [255, 117, 26]     //hypotenuse
var F_COL = 255                  //field lines
var SL_VEL = [0, 200, 0]         //velocity slider
var SL_ACC = [200, 0, 0]         //acceleration slider
var SL_FCE = [0, 0, 200]         //force slider
var SL_ANG = [0, 125, 125]       //angle slider
var SL_MSS = [255, 0, 100]       //mass slider
var SL_OTH = [125, 125, 0]       //default slider
var SL_STK = 255                 //slider stroke
var LN_STK = [125, 0, 0]         //line for particle origin on projectile simulation

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

function preload() {
  titleImg = loadImage('https://raw.githubusercontent.com/Flookie/Physics-Motion-Sandbox/master/motion_sandbox.png');
}

function setup() {
  angleMode(DEGREES)
  createCanvas(windowWidth, windowHeight)
}

function mousePressed() {
  //handle button presses
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].isClicked(mouseX, mouseY)) {
      buttons[i].do(buttons[i])
    }
  }
  for (let i = 0; i < sliders.length; i++) {
    sliders[i].checkClicked()
  }
}

function mouseDragged() {
  for (let i = 0; i < sliders.length; i++) {
    sliders[i].checkClicked()
  }
}

function draw() {
  background(BG_COL)
  //execute simulation preset or navigation
  if (context == null) {
    setupNav()
  } else {
    context()
  }

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

//Global functions for simulations
function toRadians(a) {return -a*(PI/180);}

function showVectors() {
  for (let i = 0; i < particles.length; i++) {
    particles[i].showVectors = !particles[i].showVectors
  }
  for (let i = 0; i < fields.length; i++) {
    fields[i].hide = !fields[i].hide
  }
}

function pausePlay() {
  for (let i = 0; i < particles.length; i++) {
    particles[i].frozen = !particles[i].frozen
  }
}
