
class Button {
  constructor(posx, posy, width, height, on_click) {
    this.x = posx;
    this.y = posy;
    this.w = width;
    this.h = height;
    this.on_click = on_click;
  }

  do() {
    return this.onclick();
  }

  isClicked(x, y) {
    console.log('clicked')
    return (this.x < x < this.x + this.w) and (this.y < y < this.y + h)
  }

  show() {
    fill(200);
    noStroke();
    rect(this.x, this.y, this.w, this.h);
  }
}
