class Particle {
  constructor(posx, posy, v0x, v0y, mass, vectType) {
    this.x = posx
    this.y = posy
    this.mass = mass
    this.v = vector(v0x, v0y)   //velocity
    this.a = vector(0, 0)			  //acceleration
    this.f = vector(0, 0)			  //force
    this.frozen = false
    this.showVectors = false
    this.vectPointer = vectType
  }

  function applyField(field) {
    this.a.add(field.a);
    this.f.add(field.f);
  }

  function calcPos() {
    //
  }

  function calcVelocity() {
    //
  }

  function calcAcceleration() {
    //
  }

  function update() {
    //
  }
}
