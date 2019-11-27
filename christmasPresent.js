function christmasPresent() {
  this.y = random(height);
  this.speed = 2;
  this.x = width;
  this.height = 32;
  this.width = 32;


  /**
   * Show the present image by using image() from p5, 
   * together with x, y, width and height
   * @custom
   */
  this.show = function() {
  
  }


  /**
   * Make the present start outside of the canvas to the right and
   * move to the left. 
   * Use x and speed.
   */
  this.update = function() {
    
  }

  /**
   * Here you want the wasp to hit the present
   */
  this.hits = function(wasp) {

  }
}