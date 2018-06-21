
class Slider {
  constructor(posx, posy, width, height, range_min, range_max, colour, label) {
    this.primslide_x = posx
    this.primslide_y = posy
    this.primslide_w = width
    this.primslide_h = height
    this.secslide_x = posx
    this.secslide_y = posy
    this.secslide_d = width
    this.halfheight = width / 2
    this.maxrange = range_max
    this.minrange = range_min
    this.lock = false
    this.hide = false
    this.state = range_min
    this.startRange = posy + this.halfheight
    this.endRange = posy + height - this.halfheight
    this.colour = colour
    this.label = label
  }

  calcSliderPos() {
    this.secslide_y = mouseY - this.halfheight
    let lower = this.endRange - this.halfheight
    let higher = this.startRange - this.halfheight
    if (this.secslide_y > lower) {
      this.secslide_y = lower
    } else if (this.secslide_y < higher) {
      this.secslide_y = higher
    }
  }

  calcState() {
    //The following is from a code segment from an existing project made
    //by one of the developers to solve a similar issue.
    this.state = (((this.secslide_y+this.halfheight - this.startRange)
                  * (this.maxrange - this.minrange)) /
                  (this.endRange - this.startRange)) + this.minrange
  }

  checkClicked() {
    let x = mouseX
    let y = mouseY
    if (!this.lock && (this.primslide_x < x && x < this.primslide_x + this.primslide_w)
        && (this.primslide_y < y && y < this.primslide_y + this.primslide_h)) {
      this.calcSliderPos()
      this.calcState()
    }
  }

  show() {
    stroke(SL_STK)
    strokeWeight(SL_STROKE)
    if (this.lock == true) {
      fill(LOCK_COL)
    } else {
      fill(this.colour)
    }
    rect(this.primslide_x, this.primslide_y, this.primslide_w, this.primslide_h, 10)
    rect(this.secslide_x, this.secslide_y, this.secslide_d, this.secslide_d, 10)

    noStroke()
    fill(SL_STK)
    textAlign(CENTER)
    textSize(SL_T_SIZE)
    let xpos = this.secslide_x+(this.secslide_d/2)
    let ypos = this.secslide_y+(this.secslide_d/2)+5
    let yposLabel = this.primslide_y-20
    text(nfc(this.state, 2), xpos, ypos)
    textSize(T_SIZE)
    text(this.label, xpos, yposLabel)
  }
}
