function Pipe() {
    this.top = random(height/2);
    this.bottom = random(height/2);
    this.x = width;
    this.w = 20;
    this.speed = 2;

    this.highlight = false;

    this.hits = function(wasp) {
      if (wasp.y < this.top || wasp.y > height - this.bottom) {
        if (wasp.x > this.x && wasp.x < this.x + this.w) {
          this.highlight = true;
          return true;
        }
      }
      this.highlight = false;
      return false;
    }

    this.pass = function(wasp) {
      if (wasp.x > this.x && !this.passed) {
        this.passed = true;
        return true;
      }
      return false;
    }

    this.show = function() {
      fill(121, 85, 72);
      if (this.highlight) {
        fill(255, 0, 0);
      }
      rect(this.x, 0, this.w, this.top);
      rect(this.x, height-this.bottom, this.w, this.bottom);  
    }

    this.update = function() {
      this.x -= this.speed;
    }

    this.offscreen = function() {
      if (this.x < -this.w) {
        return true; 
      } else {
        return false; 
      }
    }
}