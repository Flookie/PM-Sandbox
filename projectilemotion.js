//Projectile motion functions by Bradley Francis, modified by Marcus Belcastro
//The functions that run the projectile motion simulation

function setupProjectileMotion() {
  //clear all global objects
  buttons = []
  sliders = []
  particles = []
  fields = []
  //set up referential variables for positions
  spacing = width/16
  backboxh = height/10
  backboxw = width/8
  backboxx = 5
  backboxy = height - backboxh - backboxx
  boxw = width/6
  boxh = height/8
  sliderw = width/24
  sliderh = height/2
  particlex = width/4
  particley = height - 200
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
  buttons.push(new Button(boxmiddle, boxtop, boxw, boxh, pausePlayProjectile, 'Pause/Play'))
  buttons.push(new Button(boxright, boxtop, boxw, boxh, resetProjectile, 'Reset'))
  buttons.push(new Button(backboxx, backboxy, backboxw, backboxh, function() {context = null}, '← Back'))
  sliders.push(new Slider(sliderleft, slidertop, sliderw, sliderh, 0, 90, SL_ANG, ANG))
  sliders.push(new Slider(slidermiddle, slidertop, sliderw, sliderh, 0.5, 30, SL_VEL, VEL))
  sliders.push(new Slider(sliderright, slidertop, sliderw, sliderh, 0.25, 1, SL_ACC, ACC))
  particles.push(new Particle(particlex, particley, 0, 0, 1, VEL))
  fields.push(new Field(sliders[2].state, 0, 270))
  resetProjectile()
  //make the context the simulation function
  context = ProjectileMotion
}

//MAIN FUNCTION
function ProjectileMotion() {
  strokeWeight(5)

  trace() //particle trace as specified by the client

  stroke(LN_STK)
  inity = height - 200
  line(0, inity, width, inity)  //make a line that depicts the origin point

  //update the acceleration
  fields[0].a = p5.Vector.fromAngle(toRadians(270), sliders[2].state)

  //sets initial velocity only if the particle is being reconfigured
  if (particles[0].reset) {
    particles[0].v = p5.Vector.fromAngle(toRadians(sliders[0].state), sliders[1].state)
  }

  //automatically resets the particle if it hits the origin
  if (particles[0].y > inity) {
    resetProjectile()
  }
}

function pausePlayProjectile() {
  if (particles[0].reset) {particles[0].reset = !particles[0].reset}
  particles[0].frozen = !particles[0].frozen
}

function resetProjectile() {
  particles[0].reset = true
  particles[0].frozen = true
  particles[0].x = width/4
  particles[0].y = height - 200
}

//allows for the path of the object to be traced
function trace() {
  let p = particles[0]

  if (p.reset) {p.points = [];}  //overloads the particle object with a new array
  else {
    if (p.points.length < 1) {p.points[0] = [width/4, height - 200];}
    if (!p.frozen) {
      p.points.push([p.x, p.y]) //add another point for where the particle has been
    }
  }

  //draw the stored path of the object if there exists a path
  stroke(255)
  if (p.points.length > 1) {
    let prevPoint = p.points[0]
    for (let i = 1; i < p.points.length; i++) {
      line(prevPoint[0], prevPoint[1], p.points[i][0], p.points[i][1])
      prevPoint = p.points[i]
    }
  }
}
