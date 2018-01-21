function Bullet(x, y){
  this.x = x
  this.y = y;
  this.r = 8;


  this.show = function(){
    noStroke();
    fill(150, 0, 255);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }

  this.hits = function(alien){
    var d = dist(this.x, this.y, alien.x, alien.y);
    if (d < this.r + alien.r){
      return true;
    } else {
      return false;
    }
  }

  this.move = function() {
    this.y = this.y - 5
  }

}
