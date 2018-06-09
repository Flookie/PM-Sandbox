
class Slider {
  constructor(posx, posy, width, height, range_min, range_max) {
    this.primslide_x = posx
    this.primslide_y = posy
    this.primslide_w = width
    this.primslide_h = height
    this.secslide_x = posx
    this.secslide_y = posy
    this.secslide_d = width
    this.halfheight = height / 2
    this.maxrange = range_max          //input value later
    this.minrange = range_min           //input value later
    this.lock = false
    this.hide = false
    this.state = range_min
  }

  calcSliderPos() {
    this.secslide_y = mouseY - this.halfheight;
  }

  calcState() {
    normalisevalue = lerp(this.primslide_y + this.halfheight, this.primslide_y + this.primslide_h - this.halfheight, this.secslide_y);
    this.state = (normalisevalue * (this.maxrange - this.minrange)) + this.minrange;
  }

  checkClicked() {
    if (!this.lock) {
      this.calcSliderPos()
      this.calcState()
    }
  }

  show() {
    stroke(255);
    if (this.lock = true) {
      fill(100, 0, 0);
    } else {
      fill(200, 0, 0);
    }
    rect(this.primslide_x, this.primslide_y, this.primslide_w,
      this.primslide_h, 10);
    rect(this.secslide_x, this.secslide_y, this.secslide_d, this.secslide_d, 10);
  }
}
