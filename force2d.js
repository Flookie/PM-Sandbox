//Force2D functions by Bradley Francis
//The functions that run the 2 dimensional force simulation

function setupForce2D() {
  //clear all global objects
  buttons = []
  sliders = []
  particles = []
  fields = []
  //set up referential variables for positions
  spacing = 100
  boxw = 250
  boxh = 100
  sliderw = 65
  sliderh = 425
  particlex = width/2
  particley = height/2
  boxleft = width/8 - boxw/2
  boxmiddle = width/2 - boxw/2
  boxright = width - width/8 - boxw/2
  boxtop = height/8 - boxh/2
  sliderleft = width/8 - boxw/2
  slidermiddle = sliderleft + spacing
  sliderright = slidermiddle + spacing
  slidertop = height/2 - sliderh/3
  //add objects with referential coordinates
  buttons.push(new Button(boxleft, boxtop, boxw, boxh, showVectors, 'Toggle Vectors'))
  buttons.push(new Button(boxmiddle, boxtop, boxw, boxh, pausePlay, 'Pause/Play'))
  buttons.push(new Button(boxright, boxtop, boxw, boxh, reset2D, 'Reset'))
  sliders.push(new Slider(sliderleft, slidertop, sliderw, sliderh, 100, 1000, SL_MSS, MSS))
  sliders.push(new Slider(slidermiddle, slidertop, sliderw, sliderh, 0.01, 10, SL_FCE, FCE))
  sliders.push(new Slider(sliderright, slidertop, sliderw, sliderh, 0, 360, SL_ANG, ANG))
  particles.push(new Particle(particlex, particley, 0, 0, sliders[0].state, FCE))
  fields.push(new Field(0, sliders[1].state, sliders[2].state))
  buttons[1].state = true
  particles[0].frozen = true
  //make the context the simulation function
  context = Force2D
}

//MAIN FUNCTION
function Force2D() {
  particles[0].mass = sliders[0].state    //update mass
  fields[0].theta = sliders[2].state      //update force angle
  //update force magnitude
  fields[0].f = p5.Vector.fromAngle(toRadians(sliders[2].state), sliders[1].state)
}

function reset2D() {
  particles[0].x = width/2
  particles[0].y = height/2
  particles[0].v = createVector(0, 0)
  particles[0].frozen = true
  buttons[1].state = true
}
