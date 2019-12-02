/****************************************************
 * pipe.js
 *
 * Our predefined variables:
 * 
 *   - speed         contains the pipe speed that we will use for moving animation.
 *   - width         the width of the pipe.
 *   - x             x-axis position of pipe.
 *   - topY          the upper pipe's y-axis positioning.
 *   - bottomY       the lower pipe's y-axis positioning.
 *   - topHeight     the upper pipe's height.
 *   - bottomHeight  the lower pipe's height.
 * 
 * Our predefined methods:
 * 
 *   - show()        will be used for drawing an upper and lower pipe.
 *   - update()      will be used for animation, in this case, moving the pipes from right to left on the canvas.
 *   - hits()        will be used for checking if our wasp hits a pipe.
 *   - pass()        will be used for checking if our wasp passes (NOT hits) a pipe.
 *   - offscreen()   will be used for checking of the pipe has moved outside the canvas.
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