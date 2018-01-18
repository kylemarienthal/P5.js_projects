function Alien(x, y){
  this.x = x
  this.y = y;


  this.show = function(){
    fill(0, 93, 255);
    ellipse(this.x, this.y, 60, 60);
  }

}
