// Particle Module by Marcus Belcastro
// Object/class that manages individual particles and objects on the screen

class Particle {
  //constructor loads constants for the object
  constructor(posx, posy, v0x, v0y, mass, vectType) {
    this.x = posx
    this.y = posy
    this.mass = mass
    this.v = createVector(v0x, v0y)   //velocity
    this.a = createVector(0, 0)			  //acceleration
    this.f = createVector(0, 0)			  //force
    this.frozen = false
    this.showVectors = false
    this.vectPointer = vectType
  }

  //applies the acceleration and force of a field provided
  applyField(field) {
    this.a.add(field.a)
    this.f.add(field.f)
  }

  //applies the velocity and finds the new position of the particle
  calcPos() {
    this.x += this.v.x
    this.y += this.v.y
  }

  //applies acceleration to determine the new velocity
  calcVelocity() {
    this.v.add(this.a)
  }

  //applies force to determine the new acceleration
  calcAcceleration() {
    this.a.add(createVector(this.f.x / this.mass, this.f.y / this.mass))
  }

  //performs all the required calculations to render and move the particle
  update() {
    //the particle will not move if it is frozen
    //this means no calculations occur
    if (!this.frozen) {
        this.calcAcceleration()
        this.calcVelocity()
        this.calcPos()
      }
      //Check whether the particle hits the left or right side of the viewport.
      //The statement for this in the pseudocode had to be changed to fix a bug
      //where the particle left the viewport
      if (this.x < 0) {
        this.v.x *= -1
        this.x = 0
      } else if (this.x > width) {
        this.v.x *= -1
        this.x = width
      }

      //Check whether the particle hits the top or bottom of the viewport
      if (this.y < 0) {
        this.v.y *= -1
        this.y = 0
      } else if (this.y > height) {
        this.v.y *= -1
        this.y = height
      }

      //show the particle
      this.show()
      //erase vectors after showing them
      this.a = createVector(0, 0)
      this.f = createVector(0, 0)
  }

  //returns the vector objects for associated string codes so that the appropriate vector is rendered
  getVector() {
    if (this.vectPointer == VEL) {
      return this.v
    } else if (this.vectPointer == ACC) {
      return this.a
    } else if (this.vectPointer == FCE) {
      return this.f
    }
  }

  //function that renders the particle onto the scene
  show() {
    //draw the particle as a circle
    fill(P_COL)
    textSize(T_SIZE)
    noStroke()
    ellipse(this.x, this.y, P_RAD)

    //draw the vectors only if it is set to show them
    if (this.showVectors) {
      let vect = this.getVector() //get the vector to show
      let tempx = vect.x  //set its x component to a temporary variable
      let tempy = vect.y  //set its y component to a temporary variable
      //calculate their relative sizes based on the scale constant
      let coeffx = tempx * V_SCALE
      let coeffy = tempy * V_SCALE

      //render the text for the x and y components
      fill(V_COL)
      //the following ternary operators fix an issue where vectors should be zero
      //but were not, this producing invalid values
      let xcomp = (-0.001 < tempx && tempx < 0.001) ? 0 : tempx
      let ycomp = (-0.001 < tempy && tempy < 0.001) ? 0 : tempy
      text(nfc(xcomp, 2), this.x+coeffx+50*(tempx/abs(tempx)), this.y)
      text(nfc(-1*ycomp, 2), this.x, this.y+coeffy+50*(tempy/abs(tempy)))

      //create the x and y component lines
      strokeWeight(V_STROKE)
      stroke(V_COL)
      line(this.x, this.y, this.x+coeffx, this.y)
      line(this.x, this.y, this.x, this.y+coeffy)

      //create the hypotenuse and angle only if the angle is non-zero
      if (tempx != 0 && tempy != 0) {
        stroke(HYP_COL)
        line(this.x, this.y, this.x+coeffx, this.y+coeffy) //draw the hypotenuse
        let theta = atan(abs(tempy/tempx))  //calculate the angle
        fill(HYP_COL)
        noStroke()
        //render the text for the angle
        text(round(theta) + '°', this.x-50*(tempx/abs(tempx)), this.y-50*(tempy/abs(tempy)))
        //render the text for the value of the magnitude
        text(nfc(vect.mag(), 2), this.x+coeffx+50*(tempx/abs(tempx)), this.y+coeffy+50*(tempy/abs(tempy)))
      }
    }
  }
}
