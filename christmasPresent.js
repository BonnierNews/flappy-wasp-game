function christmasPresent() {
  this.y = random(height);
  this.speed = 2;
  this.x = width;

  this.show = function() {
    image(presentImg, this.x, this.y, 32, 32);
  }

  this.update = function() {
    this.x -= this.speed;
  }

  // fortsätt här
  // this.highlight = false;

  // this.hits = function(wasp) {
  //   if (wasp.y < this.top || wasp.y > height - this.bottom) {
  //     if (wasp.x > this.x && wasp.x < this.x + this.w) {
  //       this.highlight = true;
  //       return true;
  //     }
  //   }
  //   this.highlight = false;
  //   return false;
  // }
}