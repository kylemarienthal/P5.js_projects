function Alien(x, y){
  this.x = x
  this.y = y;
  this.r = 30;

  this.grow = function() {
    this.r += 2;
  }


  this.show = function(){
    fill(0, 93, 255);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }

}
