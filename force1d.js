//Force1D functions by Bradley Francis
//The functions that run the 1 dimensional force simulation

//the setup function which places all objects and sets up the scene
function setupForce1D() {
  //clear all global objects
  buttons = []
  sliders = []
  particles = []
  fields = []
  //set up referential variables for positions
  spacing = width/14
  backboxh = height/10
  backboxw = width/8
  backboxx = 5
  backboxy = height - backboxh - backboxx
  boxw = width/6
  boxh = height/8
  sliderw = width/25
  sliderh = height/2
  particlex = width/2
  particley = height/2
  boxleft = width/8 - boxw/2
  boxmiddle = width/2 - boxw/2
  boxright = width - width/8 - boxw/2
  boxtop = height/8 - boxh/2
  sliderleft = width/8 - boxw/2
  sliderright = sliderleft + spacing
  slidertop = height/2 - sliderh/3
  //add objects with referential coordinates
  buttons.push(new Button(boxleft, boxtop, boxw, boxh, showVectors, 'Toggle Vectors'))
  buttons.push(new Button(boxmiddle, boxtop, boxw, boxh, pausePlay, 'Pause/Play'))
  buttons.push(new Button(boxright, boxtop, boxw, boxh, reset1D, 'Reset'))
  buttons.push(new Button(backboxx, backboxy, backboxw, backboxh, function() {context = null}, '← Back'))
  sliders.push(new Slider(sliderleft, slidertop, sliderw, sliderh, 100, 1000, SL_MSS, MSS))
  sliders.push(new Slider(sliderright, slidertop, sliderw, sliderh, -10, 10, SL_FCE, FCE))
  particles.push(new Particle(particlex, particley, 0, 0, sliders[0].state, FCE))
  fields.push(new Field(0, sliders[1].state, 0))
  particles[0].frozen = true
  buttons[1].state = true
  //make the context the simulation function
  context = Force1D
}

//MAIN FUNCTION
function Force1D() {
  particles[0].mass = sliders[0].state              //update mass
  fields[0].f = createVector(sliders[1].state, 0)   //update force
}

 function reset1D() {
   particles[0].x = width/2
   particles[0].y = height/2
   particles[0].v = createVector(0, 0)
   particles[0].frozen = true
   buttons[1].state = true
 }
