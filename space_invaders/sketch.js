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
  ship.move();

  for (var i = 0; i < bullets.length; i++) {
    bullets[i].show();
    bullets[i].move();
    for (var j = 0; j < aliens.length; j++) {
      if (bullets[i].hits(aliens[j])){
        aliens[j].grow();
        bullets[i].evaporate();
      }
    }
  }

  var edge = false;

  for (var i = 0; i < aliens.length; i++) {
    aliens[i].show();
    aliens[i].move();
    if(aliens[i].x > width || aliens[i].x < 0){
      edge = true;
    }
  }

  if (edge){
    for (var i = 0; i < aliens.length; i++) {
      aliens[i].shiftDown();
    }
  }

  for (var i = bullets.length - 1; i>= 0; i--) {
    if(bullets[i].toDelete){
      bullets.splice(i, 1);
    }
  }
}

function keyReleased(){
  if( key !== " "){
    ship.setDir(0);
  }
}

function keyPressed() {
  if ( key === " "){
    var bullet = new Bullet(ship.x, height);
    bullets.push(bullet);
  }
  if (keyCode === RIGHT_ARROW) {
    ship.setDir(1);
  } else if (keyCode === LEFT_ARROW){
    ship.setDir(-1);
  }
}
