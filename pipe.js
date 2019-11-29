/****************************************************
 * pipe.js
 * @todo add introduction here.
 *
 *
 *
 ****************************************************/

class Pipe {
  topPipeHeight = random(height / 2);
  bottomPipeHeight = random(height / 2);
  x = width;
  width = 20;
  speed = 2;

  /****************************************************
   * Create pipes
   * Use fill and rect from p5 together with
   * the variables in the top
   * @custom
   ****************************************************/
  show() {

  }

  /****************************************************
   * Each pipe starts to the right of the canvas and
   * moves to the left
   * This function updates in draw()
   * @custom
   ****************************************************/
  update() {

  }

  /****************************************************
   * Hit detection: when the wasp hits the pipe
   * @custom
   ****************************************************/
  hits(wasp) {

  }

  /****************************************************
   * When the wasp passes a pipe
   * @custom
   ****************************************************/
  pass(wasp) {

  }

  /****************************************************
   * Check if the pipe is offscreen or not
   * Use the variables in the top
   * @custom
   ****************************************************/
  offscreen() {

  }
}
