/****************************************************
 * index.js
 * 
 ****************************************************/


/****************************************************
 * This is all the variables we need in the game.
 * You can read more about them in the README.md.
 ****************************************************/
let wasp;
let pipes;
let background;
let waspImg;
let backgroundImg;
let presentImg;
let isOver = false;
let score = 0;
let presents;
const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 600;


/**************************************************** 
 * This is a magical p5 function. 
 * preload() loads before setup() function and setup() 
 * waits for it to complete
 * 
 * @p5jsMethod
 ****************************************************/
function preload() {
  backgroundImg = loadImage("images/background.png");
  waspImg = loadImage("images/wasp.png");
  presentImg = loadImage("images/present.png");
}


/****************************************************
 * setup() runs only once and is used to initialize "stuffs"
 * Use the createCanvas() to set the width and height. See p5.js
 * 
 * @p5jsMethod
 ****************************************************/
function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  background = new Background();
  wasp = new Wasp();
  pipes = [];
  pipes.push(new Pipe());
  presents = [];
  presents.push(new Present()); 
}


/****************************************************
 * draw() is a magical p5 function which runs repeatedly and is used to draw graphics/stuffs
 * Draw our background image, then move it at the same speed as the pipes
 * 
 * @p5jsMethod
 ****************************************************/
function draw() {
  background.show();
  background.update();

  wasp.show();
  wasp.update();

  for (let pipe of pipes) {
    pipe.show();
    pipe.update();

    
    // Check if wasp passes a pipe.
    if (pipe.pass(wasp)) {
      score++;
    }
    
    // Check if the wasp hit a pipe.
    if (pipe.hits(wasp)) {
      gameOver();
    }
  }

  if (frameCount % 100 == 0) {
    pipes.push(new Pipe());
  }

  showScores();

  for (let present of presents) {
    present.show();
    present.update();
  }

  if (frameCount % 75 == 0) {
    presents.push(new Present());
  }
}


/****************************************************
 * Set the space button to make the wasp fly
 * 
 * @p5jsMethod
 ****************************************************/
function keyPressed() {
  if (key === " ") {
    wasp.up();
    if (isOver) {
      startGame();
    }
  }
}


/****************************************************
 * Create a new wasp and new pipe
 * Reset the score to 0
 * Reset the moving background to the start poisition
 * 
 * @customMethod
 ****************************************************/
function startGame() {
  backgroundX = 0;
  pipes = [];
  wasp = new Wasp();
  pipes.push(new Pipe());
  isOver = false;
  score = 0;
  loop();
}


/****************************************************
 * Display text on screen, using text function from p5 
 * You can also fill to set paintbrush color and textSize
 * 
 * @customMethod
 ****************************************************/
function gameOver() {
  textSize(50);
  fill(000);
  text("GAME OVER", 50, 300);
  isOver = true;
  noLoop();

}


/****************************************************
 * Display text on screen, using text function from p5
 * You can also use fill to set paintbrush color and textSize
 * 
 * @customMethod
 ****************************************************/
function showScores() {
  fill (000);
  textSize(32);
  text("Score: " + score, 1, 32);
}