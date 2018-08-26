function setupNav() {
  if (buttons.length == 0) {
    buttons = []
    boxw = width/4
    boxh = height/8
    left = width/4 - boxw/2
    right = width - width/4 - boxw/2
    Top = height/4 - boxh/2
    bottom = height - height/4 - boxh/2
    buttons.push(new Button(left, Top, boxw, boxh, function() {setupForce1D();}, '1D Force'))
    buttons.push(new Button(right, Top, boxw, boxh, function() {setupForce2D();}, '2D Force'))
    buttons.push(new Button(left, bottom, boxw, boxh, function() {setupProjectileMotion();}, 'Projectile Motion'))
    buttons.push(new Button(right, bottom, boxw, boxh, function() {setupSandbox();}, 'Sandbox'))
    context = Nav
  }
}

function Nav() {
  image(titleImg, width/2-IMG_D/2, height/2-IMG_D/2, IMG_D, IMG_D)
  textAlign(CENTER)
  fill(TITLE_COL)
  textSize(TITLE_SIZE)
  textStyle(BOLD)
  text("Physics Motion Sandbox", width/2, height/10)
  textStyle(NORMAL)
  textAlign(LEFT)
  textSize(FOOT_SIZE)
  text("Developed by Marcus Belcastro and Bradley Francis under the GNU GPL v3.0 licence",
        10, height-10)
}
