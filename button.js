
class Button {
  constructor(posx, posy, width, height, on_click) {
    this.x = posx;
    this.y = posy;
    this.w = width;
    this.h = height;
    this.on_click = on_click;
    this.lock = false;
    this.hide = false;
  }

  do() {
    if (!this.lock) {
      return this.on_click();
    }
  }

  isClicked(x, y) {
    return (this.x < x && x < this.x + this.w) && (this.y < y && y < this.y + this.h);
  }

  show() {
    if (!this.hide) {
      if (this.lock) {
        //different colour and text to indicate locked button
      } else {
        fill(200);
        noStroke();
        rect(this.x, this.y, this.w, this.h);
      }
    }
  }
}
