/****************************************************
 * wasp.js
 * 
 * Our predefined variables:
 * 
 *  - speed     we will animate the wasp to move so it will have a speed.
 *  - x         the wasp's x-axis position.
 *  - y         the wasp's y-axis position.
 *  - width     the wasp's width.
 *  - height    the wasp's height.
 *  - gravity   the wasp will have a gravity for "falling" animation.
 *  - lift      the wasp will have a lift for "jumping" animation.
 * 
 * Our predefined methods:
 * 
 *  - show()    that we will use for drawing the image.
 *  - update()  that we will use for animation, in this case, creating gravity.
 *  - up()      that we will use for creating jump animation when user press `Space Bar`.
 * 
 ****************************************************/

class Wasp {
  speed = 0;
  x = 64;
  y = CANVAS_HEIGHT / 2;
  width = 32;
  height = 32;
  gravity = 0.1;
  lift = -7;


  /****************************************************
   * Show the wasp by using the image() from p5,
   * which takes img, x, y and size
   * @custom
   ****************************************************/
  show() {

  }


  /****************************************************
   * Create gravity
   * @custom
   ****************************************************/
  update() {

  }


  /****************************************************
   * Make the wasp go upwards
   * @custom
   ****************************************************/
  up() {

  }
}
