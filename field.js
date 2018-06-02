// Field Module by Marcus Belcastro
// Object/class that manages fields relating to physical phenomena

class Field {
              //set slider to 0-360
  constructor(aMag, fMag, angle) {
    this.a = p5.Vector.fromAngle(angle, aMag)
    this.f = p5.Vector.fromAngle(angle, fMag)
    this.theta = angle
    this.hide = true
  }

  show() {
    if (!this.hide) {
      stroke(F_COL)
      if ((this.theta >= 45 && this.theta <= 135) || (this.theta >= 225 && this.theta <= 315)) {
        let hlfLine = height / 2
        let endpoint = hlfLine * tan(this.theta-90)
        for (dist = -20*SPACE; dist <= width+20*SPACE; dist += SPACE) {
          let lnStart = dist - endpoint
          let lnEnd = dist + endpoint
          line(lnStart, 0, lnEnd, height)
        }
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
