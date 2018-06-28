//Sandbox functions by Bradley Francis, modified by Marcus Belcastro
//The functions that run the free-for-all sandbox simulation

function setupSandbox() {
  //clear all global objects
  buttons = []
  sliders = []
  particles = []
  fields = []
  //set up referential variables for positions
  boxspacing = 275
  sliderspacing = 100
  boxw = 250
  boxh = 100
  sliderw = 65
  sliderh = 425
  particlex = width/2
  particley = height/2
  boxobject = width/8 - boxw/2
  boxvectors = boxobject + boxspacing
  boxpause = boxvectors + boxspacing
  boxreset = boxpause + boxspacing
  boxfield = boxreset + boxspacing
  boxtop = height/8 - boxh/2
  slidermass = width/8 - boxw/2
  sliderangle = boxfield + boxw - sliderw
  slidervel = sliderangle - sliderspacing
  slideraccel = slidervel - sliderspacing
  slidertop = height/2 - sliderh/3
  //add objects with referential coordinates
  buttons.push(new Button(boxobject, boxtop, boxw, boxh, newObject, 'New Object'))
  buttons.push(new Button(boxvectors, boxtop, boxw, boxh, showVectors, 'Show Vectors'))
  buttons.push(new Button(boxpause, boxtop, boxw, boxh, pausePlay, 'Pause/Play'))
  buttons.push(new Button(boxreset, boxtop, boxw, boxh, reset, 'Reset'))
  buttons.push(new Button(boxfield, boxtop, boxw, boxh, newField, 'New Field'))
  sliders.push(new Slider(slidermass, slidertop, sliderw, sliderh, 10, 1000, SL_MSS, MSS))
  sliders.push(new Slider(slideraccel, slidertop, sliderw, sliderh, 0, 1, SL_ACC, ACC))
  sliders.push(new Slider(slidervel, slidertop, sliderw, sliderh, 0, 5, SL_FCE, FCE))
  sliders.push(new Slider(sliderangle, slidertop, sliderw, sliderh, 0, 360, SL_ANG, ANG))
  //make the context the simulation function
  context = Sandbox
}

//MAIN FUNCTION
function Sandbox() {}

function newObject() {
  newP = new Particle(random(width), random(height), 0, 0, sliders[0].state, VEL)
  newP.showVectors = buttons[1].state
  particles.push(newP)
}

function reset() {
  particles = []
  fields = []
}

function newField() {
  newF = new Field(sliders[1].state, sliders[2].state, sliders[3].state)
  newF.hide = !buttons[1].state
  fields.push(newF)
}
