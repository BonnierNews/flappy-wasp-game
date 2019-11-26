function christmasPresent() {
  this.y = random(height);
  this.speed = 2;
  this.x = width;
  this.height = 32;
  this.width = 32;

  this.show = function() {
    image(presentImg, this.x, this.y, this.width, this.height);
  }

  this.update = function() {
    this.x -= this.speed;
  }

  this.hits = function(wasp) {
    if (wasp.y > this.y && wasp.y < this.y + this.height) {
      if (wasp.x > this.x && wasp.x < this.x + this.width) {
        console.log("HITS");
        return true;
      }
    }
    return false;
  }
}