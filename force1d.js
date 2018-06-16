//This will be called once
function setupForce1D() {
  //Clear all arrays
  buttons = []
  sliders = []
  particles = []
  fields = []
  //Set up referential variables for positions
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
  sliderright = sliderleft + spacing
  slidertop = height/2 - sliderh/2
  //Add objects with referential coordinates
  buttons.push(new Button(boxleft, boxtop, boxw, boxh, function() {particles[0].showVectors = !particles[0].showVectors;}, 'Toggle Vectors'))
  buttons.push(new Button(boxmiddle, boxtop, boxw, boxh, function() {particles[0].frozen = !particles[0].frozen;}, 'Pause/Play'))
  buttons.push(new Button(boxright, boxtop, boxw, boxh, reset1D, 'Reset'))
  sliders.push(new Slider(sliderleft, slidertop, sliderw, sliderh, 100, 1000, SL_MSS))
  sliders.push(new Slider(sliderright, slidertop, sliderw, sliderh, -10, 10, SL_FCE))
  particles.push(new Particle(particlex, particley, 0, 0, sliders[0].state, FCE))
  fields.push(new Field(0, sliders[1].state, 0))
  //Make the context the simulation function
  context = Force1D
}

//This will be called every frame
function Force1D() {
  //simulation stuff
  particles[0].mass = sliders[0].state
  fields[0].f = createVector(sliders[1].state, 0)
}

 function reset1D() {
   particles[0].x = width/2
   particles[0].y = height/2
   particles[0].v = createVector(0, 0)
 }
