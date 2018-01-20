var ship;
var aliens = [];

function setup(){
  createCanvas(600, 400);
  ship = new Ship();
  for (var i = 0; i < 6; i++) {
    aliens[i] = new Alien(i*80+80, 60);
  }
}

function draw() {
  background(51);
  ship.show();
  for (var i = 0; i < aliens.length; i++) {
    aliens[i].show()
  }
}
//
// function keyPressed() {
//   if (keyCode === RIGHT_ARROW) {
//     ship.move(1);
//   } else if (keyCode === LEFT_ARROW){
//     ship.move(-1);
//   }
// }
