function Wasp() {
  this.y = height / 2;
  this.x = 64;
  this.gravity = 0.1;
  this.lift = -10;
  this.velocity = 0;

  this.show = function() {
    image(waspImg, this.x - 16, this.y - 16, 32, 32);
  }

  this.up = function() {
    this.velocity += this.lift; 
  }

  this.update = function() {
    this.velocity += this.gravity;
    this.velocity += 0.2;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }
}