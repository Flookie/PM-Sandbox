
class Slider {
  constructor(posx, posy, width, height) {
    this.primslide_x = posx;
    this.primslide_y = posy;
    this.primslide_w = width;
    this.primslide_h = height;
    this.secslide_x = posx;
    this.secslide_y = posy;
    this.secslide_w = height;
    this.secslide_h = height;
  }

  show() {
    fill(200);
    noStroke();
    rect(this.primslide_x, this.primslide_y, this.primslide_w,
      this.primslide_h);
    fill(0)
    rect(this.secslide_x, this.secslide_y, this.primeslide_w,
      this.primeslide_h);
  }
}
