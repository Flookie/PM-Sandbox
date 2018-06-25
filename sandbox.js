  function setupSandbox() {
    buttons = []
    sliders = []
    particles = []
    fields = []
    boxspacing = 355
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
    slidertop = height/2 - sliderh/2
    buttons.push(new Button(boxobject, boxtop, boxw, boxh, newObject, 'New Object'))
    buttons.push(new Button(boxvectors, boxtop, boxw, boxh, showVectors, 'Show Vectors'))
    buttons.push(new Button(boxpause, boxtop, boxw, boxh, pausePlay, 'Pause/Play'))
    buttons.push(new Button(boxreset, boxtop, boxw, boxh, reset, 'Reset'))
    buttons.push(new Button(boxfield, boxtop, boxw, boxh, newField, 'New Field'))
    sliders.push(new Slider(slidermass, slidertop, sliderw, sliderh, 10, 1000, SL_MSS))
    sliders.push(new Slider(slideraccel, slidertop, sliderw, sliderh, 0.5, 5, SL_ACC))
    sliders.push(new Slider(slidervel, slidertop, sliderw, sliderh, 0.1, 1, SL_VEL))
    sliders.push(new Slider(sliderangle, slidertop, sliderw, sliderh, 0, 360, SL_ANG))
    context = Sandbox
  }

  function Sandbox() {

  }

  function newObject() {
    v = p5.Vector.fromAngle(toRadians(sliders[3].state), sliders[2].state)
    particles.push(new Particle(random(width), random(height), v.x, v.y, sliders[0].state, VEL))
  }

  function reset() {
    particles = []
    fields = []
  }

  function newField() {
    fields.push(new Field(sliders[1].state, 0, sliders[3].state))
  }