var ship;
var aliens = [];
var bullets = [];

function setup(){
  createCanvas(600, 400);
  ship = new Ship();
  // bullet = new Bullet(width/2, height/2);
  for (var i = 0; i < 6; i++) {
    aliens[i] = new Alien(i*80+80, 60);
  }
}

function draw() {
  background(51);
  ship.show();
  for (var i = 0; i < bullets.length; i++) {
    bullets[i].show();
    bullets[i].move();
    for (var j = 0; j < aliens.length; j++) {
      if (bullet[i].hits(aliens[j])){
        console.log("CONNECTION");
      }

  }


  for (var i = 0; i < aliens.length; i++) {
    aliens[i].show();
  }
}

function keyPressed() {
  if (key === " "){
    var bullet = new Bullet(ship.x, height);
    bullets.push(bullet);
  }
  if (keyCode === RIGHT_ARROW) {
    ship.move(1);
  } else if (keyCode === LEFT_ARROW){
    ship.move(-1);
  }
}
