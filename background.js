/****************************************************
 * background.js
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
    if (this.x <= -this.width + CANVAS_WIDTH) {
      image(backgroundImg, this.x + this.width, 0, this.width, this.height);
      if (this.x <= -this.width) {
        this.x = 0;
      }
    }
  }
}