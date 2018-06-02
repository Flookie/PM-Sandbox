// Particle Module by Marcus Belcastro
// Object/class that manages individual particles and objects on the screen

class Particle {
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

  applyField(field) {
    this.a.add(field.a)
    this.f.add(field.f)
  }

  calcPos() {
    this.x += this.v.x
    this.y += this.v.y
  }

  calcVelocity() {
    this.v.add(this.a)
  }

  calcAcceleration() {
    this.a.add(createVector(this.f.x / this.mass, this.f.y / this.mass))
  }

  update() {
    if (!this.frozen) {
      this.calcAcceleration()
      this.calcVelocity()
      this.calcPos()
      if (this.x < 0 || this.x > width) {
        this.v.x *= -1
      }
      if (this.y < 0 || this.y > height) {
        this.v.y *= -1
      }
      this.show()
      this.a = createVector(0, 0)
      this.f = createVector(0, 0)
    }
  }

  getVector() {
    if (this.vectPointer == VEL) {
      return this.v
    } else if (this.vectPointer == ACC) {
      return this.a
    } else if (this.vectPointer == FCE) {
      return this.f
    }
  }

  show() {
    fill(P_COL)
    ellipse(this.x, this.y, P_RAD)
    if (this.showVectors) {
      vect = this.getVector
      tempx = vect.x
      tempy = vect.y
      coeffx = tempx * V_SCALE
      coeffy = tempy * V_SCALE
      strokeWeight(V_STROKE)
      stroke(V_COL)
      line(this.x, this.y, this.x+coeffx, this.y)
      line(this.x, this.y, this.x, this.y+coeffy)
      if (tempx != 0 && tempy != 0) {
        stroke(HYP_COL[0], HYP_COL[1], HYP_COL[2])
        line(this.x, this.y, this.x+coeffx, this.y+coeffy)
        theta = invtan(abs(tempy/tempx))
        textSize(T_SIZE)
        //the operations with tempy here determine whether to place the theta
        //text above or below the particle based on the sign of the vertical
        //component of the vector.
        text('°', this.x, 10*(tempy/abs(tempy)))
      }
    }
  }
}
