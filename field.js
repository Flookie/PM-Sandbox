// Field Module by Marcus Belcastro
// Object/class that manages fields relating to physical phenomena

class Field {
  constructor(aMag, fMag, angle) {
    //The following function was added as the fromAngle function takes radians.
    //It converts the provided angle to radians while also reversing it which
    //fixes the true direction to that relative to the observer.
    this.a = p5.Vector.fromAngle(toRadians(angle), aMag)
    this.f = p5.Vector.fromAngle(toRadians(angle), fMag)
    this.theta = angle
    this.hide = true
  }

  show() {
    if (!this.hide) {
      stroke(F_COL)
      strokeWeight(F_SIZE)
      //case where the angle is between 45-135 and 225-315 degrees
      if ((this.theta >= 45 && this.theta <= 135) || (this.theta >= 225 && this.theta <= 315)) {
        let hlfLine = height / 2
        let endpoint = hlfLine * tan(this.theta-90)
        for (dist = -20*SPACE; dist <= width+20*SPACE; dist += SPACE) {
          let lnStart = dist - endpoint
          let lnEnd = dist + endpoint
          line(lnStart, 0, lnEnd, height)
        }
      //all other cases
      } else {
        let hlfLine = width / 2
        let endpoint = hlfLine * tan(this.theta)
        for (dist = -20*SPACE; dist <= height+20*SPACE; dist += SPACE) {
          let lnStart = dist + endpoint
          let lnEnd = dist - endpoint
          line(0, lnStart, width, lnEnd)
        }
      }
    }
  }
}
