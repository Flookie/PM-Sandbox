  function setupForce2D() {
    buttons = []
    sliders = []
    particles = []
    fields = []
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
    slidertop = height/2 - sliderh/2
    buttons.push(new Button(boxleft, boxtop, boxw, boxh, showVectors, 'Toggle Vectors'))
    buttons.push(new Button(boxmiddle, boxtop, boxw, boxh, pausePlay, 'Pause/Play'))
    buttons.push(new Button(boxright, boxtop, boxw, boxh, reset2D, 'Reset'))
    sliders.push(new Slider(sliderleft, slidertop, sliderw, sliderh, 100, 1000, SL_MSS))
    sliders.push(new Slider(slidermiddle, slidertop, sliderw, sliderh, 0.01, 10, SL_FCE))
    sliders.push(new Slider(sliderright, slidertop, sliderw, sliderh, 0, 360, SL_ANG))
    particles.push(new Particle(particlex, particley, 0, 0, sliders[0].state, FCE))
    fields.push(new Field(0, sliders[1].state, sliders[2].state))
    context = Force2D
  }

  function Force2D() {
    particles[0].mass = sliders[0].state
    fields[0].theta = sliders[2].state
    fields[0].f = p5.Vector.fromAngle(toRadians(sliders[2].state), sliders[1].state) //p5.Vector.fromAngle(toRadians(angle), aMag)
  }

  function reset2D() {
    particles[0].x = width/2
    particles[0].y = height/2
    particles[0].v = createVector(0, 0)
  }
