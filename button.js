//Button module by Marcus Belcastro
//This object/class is an interfaceable button that executes functionality on-click

class Button {
  constructor(posx, posy, width, height, on_click, text) {
    this.x = posx
    this.y = posy
    this.w = width
    this.h = height
    this.on_click = on_click
    this.state = null
    this.lock = false
    this.hide = false
    this.label = text
  }

  do(arg) {
    if (!this.lock) {
      this.state = this.on_click(arg);
    }
  }

  isClicked(x, y) {
    return (this.x < x && x < this.x + this.w) && (this.y < y && y < this.y + this.h);
  }

  show() {
    if (!this.hide) {
      if (this.lock) {
        fill(LOCK_COL)
      } else {
        fill(BUT_COL);
      }
      stroke(BUT_STK);
      strokeWeight(1);
      rect(this.x, this.y, this.w, this.h, 10);
      textAlign(CENTER);
      textSize(T_SIZE);
      fill(TEXT_COL);
      text(this.label, this.x+this.w/2, this.y+this.h/1.6)
    }
  }
}
