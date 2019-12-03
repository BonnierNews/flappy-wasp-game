/****************************************************
 * background.js
 * 
 * Our predefined variables:
 * 
 *  - speed     we will animate the background to move so it will have a speed.
 *  - x         the background's x-axis position.
 *  - y         the background's y-axis position.
 *  - width     the background's width.
 *  - height    the background's height.
 * 
 * Our predefined methods:
 * 
 *  - show()    that we will use for drawing the background onto the canvas.
 *  - update()  that we will use for animating the background.
 * 
 ****************************************************/

class Background {
  speed = 1;
  x = 0;
  y = 0;
  width = 800;
  height = 600;


  /****************************************************
   * Show the background by using the image() from p5,
   * which takes img, x, y and size
   * @custom
   ****************************************************/
  show() {
    image(backgroundImg, this.x, this.y, this.width, this.height);
  }


  /****************************************************
   * Background starts to the right of the canvas and
   * moves to the left
   * This function updates in draw()
   * @custom
   ****************************************************/
  update() {
    // This will make the image move to the left.
    this.x -= this.speed;

    // This will make the image loop infinitely by adding a new image when the old one ends.
    if (this.x <= CANVAS_WIDTH - this.width) {
      image(backgroundImg, this.x + this.width, 0, this.width, this.height);
      if (this.x <= -this.width) this.x = 0;
    }
  }
}