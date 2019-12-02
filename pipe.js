/****************************************************
 * pipe.js
 *
 ****************************************************/

class Pipe {
  speed         = 2;
  width         = 20;
  x             = CANVAS_WIDTH;
  passed        = false;
  topHeight     = random(CANVAS_HEIGHT / 2);
  bottomHeight  = random(CANVAS_HEIGHT / 2);
  topY          = 0;
  bottomY       = CANVAS_HEIGHT - this.bottomHeight;

  /****************************************************
   * Create pipes
   * Use fill and rect from p5 together with
   * the variables in the top
   * @custom
   ****************************************************/
  show() {
    fill(121, 85, 72);
    rect(this.x, 0, this.width, this.topHeight);
    rect(this.x, this.bottomY, this.width, this.bottomHeight);
  }

  /****************************************************
   * Each pipe starts to the right of the canvas and
   * moves to the left
   * This function updates in draw()
   * @custom
   ****************************************************/
  update() {
    this.x -= this.speed;
  }

  /****************************************************
   * Hit detection: when the wasp hits the pipe
   * @custom
   ****************************************************/
  hits(wasp) {
    // Check if the wasp is touching a top or bottom pipe y position.
    if (wasp.y < this.topHeight || wasp.y > CANVAS_HEIGHT - this.bottomHeight) {
      
      // Check if the wasp is touching a top pipe x position.
      if (wasp.x > this.x && wasp.x < this.x + this.topWidth) {
        return true;
      }

      // Check if the wasp is touching a bottom pipe x position.
      if (wasp.x > this.x && wasp.x < this.x + this.width) {
        return true;
      }
    }

    // Else just return false – the wasp is not touching a pipe.
    return false;
  }


  /****************************************************
   * When the wasp passes a pipe
   * @custom
   ****************************************************/
  pass(wasp) {
    // If the wasp's x position is bigger than the pipe's x position
    // it means that the wasp has passed the pipe! 
    if (wasp.x > this.x && !this.passed) {
      this.passed = true;
      return true;
    }
    // Else return false, the wasp has not passed the pipe.
    return false;
  }

  /****************************************************
   * Check if the pipe is offscreen or not
   * Use the variables in the top
   * @custom
   ****************************************************/
  offscreen() {

  }
}