//Slider module by Bradley Francis, modified by Marcus Belcastro
//Provides a value slider functionality in the viewport

class Slider {
  //constructor loads constants for the object
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
    this.colour = colour
    this.label = label
    //constant pixel values that represent the start and end of the possible value area
    this.startRange = posy + this.halfheight
    this.endRange = posy + height - this.halfheight
  }

  //calculates the new position for the secondary slider based on mouse position
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

  //calculates a value based on the range of values possible and the secondary slider position
  calcState() {
    //The following is from a code segment from an existing project made
    //by one of the developers to solve a similar issue.
    this.state = (((this.secslide_y+this.halfheight - this.startRange)
                  * (this.maxrange - this.minrange)) /
                  (this.endRange - this.startRange)) + this.minrange
  }

  //handles what happens when the user clicks the slider and checks whether it is clicked
  checkClicked() {
    let x = mouseX
    let y = mouseY
    if (!this.lock && (this.primslide_x < x && x < this.primslide_x + this.primslide_w)
        && (this.primslide_y < y && y < this.primslide_y + this.primslide_h)) {
      this.calcSliderPos()
      this.calcState()
    }
  }

  //renders the slider in the viewport
  show() {
    stroke(SL_STK)
    strokeWeight(SL_STROKE)
    //if the slider is locked, it will be greyed-out
    if (this.lock == true) {
      fill(LOCK_COL)
    //otherwise it will be its default colour
    } else {
      fill(this.colour)
    }
    //draw the main body of the slider
    rect(this.primslide_x, this.primslide_y, this.primslide_w, this.primslide_h, 10)
    //draw the button that slides up and down the slider
    rect(this.secslide_x, this.secslide_y, this.secslide_d, this.secslide_d, 10)

    //render the text on and above the slider
    noStroke()
    fill(SL_STK)
    textAlign(CENTER)
    textSize(SL_T_SIZE)
    //value for in the middle of the slider
    let xpos = this.secslide_x+(this.secslide_d/2)
    //value for halfway down the internal slider
    let ypos = this.secslide_y+(this.secslide_d/2)+5
    //value for just above the whole slider
    let yposLabel = this.primslide_y-20
    text(nfc(this.state, 2), xpos, ypos)  //slider value text
    textSize(T_SIZE)
    text(this.label, xpos, yposLabel)     //title of the slider
  }
}
