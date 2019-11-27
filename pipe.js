function Pipe() {
    this.top = random(height/2);
    this.bottom = random(height/2);
    this.x = width;
    this.w = 20;
    this.speed = 2;


    /**
     * Hit detection: when the wasp hits the pipe
     * @custom
     */
    this.hits = function(wasp) {

    }


    /**
     * When the wasp passes a pipe
     * @custom
     */
    this.pass = function(wasp) {

    }


    /**
     * Create pipes
     * Use fill and rect from p5 together with 
     * the variables in the top
     * @custom
     */
    this.show = function() {
 
    }


    /**
     * Each pipe starts to the right of the canvas and
     * moves to the left
     * This function updates in draw()
     * @custom
     */
    this.update = function() {
      
    }


    /**
     * Check if the pipe is offscreen or not
     * Use the variables in the top
     * @custom
     */
    this.offscreen = function() {

    }
}