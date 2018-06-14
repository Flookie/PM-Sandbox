function setupNav() {
  if (buttons.length == 0) {
    buttons = []
    boxw = 500
    boxh = 125
    left = width/4 - boxw/2
    right = width - width/4 - boxw/2
    Top = height/4 - boxh/2
    bottom = height - height/4 - boxh/2
    buttons.push(new Button(left, Top, boxw, boxh, function() {setupForce1D();}, '1D Force'))
    buttons.push(new Button(right, Top, boxw, boxh, function() {console.log("Clicked");}, '2D Force'))
    buttons.push(new Button(left, bottom, boxw, boxh, function() {console.log("Clicked");}, 'Projectile Motion'))
    buttons.push(new Button(right, bottom, boxw, boxh, function() {console.log("Clicked");}, 'Sandbox'))
    context = Nav
  }
}

function Nav() {
  image(titleImg, width/2-titleImg.width/2, height/2-titleImg.height/2)
}
