
class Slider {
  constructor(posx, posy, width, height, val_min, val_max, orientation) {
    this.primslide_x = posx;
    this.primslide_y = posy;
    this.primslide_w = width;
    this.primslide_h = height;
    this.secslide_x = posx;
    this.secslide_y = posy;
    this.secslide_d = width;
    this.min = val_min;
    this.max = val_max;
    this.val = (val_min+val_max)/2
  }

  show() {
    fill(200);
    noStroke();
    rect(this.primslide_x, this.primslide_y, this.primslide_w, this.primslide_h);
    fill(0)
    rect(this.secslide_x, this.secslide_y, this.secslide_d, this.secslide_d);
  }
}
