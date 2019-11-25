let wasp;
let pipes;
let waspImg;
let backgroundImg;
let backgroundX = 0;
let polkaImg;
let isOver = false;
let score = 0;

function preload() {
  waspImg = loadImage('wasp.png');
  backgroundImg = loadImage('background.png');
  polkaImg = loadImage('polka.png');
}

function setup() {
  createCanvas(400, 600);
  reset();
}

function draw() {
  // Draw our background image, then move it at the same speed as the pipes
  background(255);  
  image(backgroundImg, backgroundX, 0, backgroundImg.width, height);
  backgroundX -= pipes[0].speed * 0.6;
  // this handles the "infinite loop" by checking if the right
  // edge of the image would be on the screen, if it is draw a
  // second copy of the image right next to it
  // once the second image gets to the 0 point, we can reset backgroundX to
  // 0 and go back to drawing just one image.
  if (backgroundX <= -backgroundImg.width + width) {
    image(backgroundImg, backgroundX + backgroundImg.width, 0, backgroundImg.width, height);
    if (backgroundX <= -backgroundImg.width) {
      backgroundX = 0;
    }
  }

  // Draw infinite loop of new pipes.
  for (let i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].pass(wasp)) {
      score++;
    }

    if (pipes[i].hits(wasp)) {
      gameover();
    }

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }

  wasp.update();
  wasp.show();

  if (frameCount % 100 == 0) {
    pipes.push(new Pipe());
  }

  showScores();

}

function keyPressed() {
  if (key == ' ') {
    wasp.up();
    if (isOver) reset();
  }
}

function gameover() {
  textSize(64);
  textAlign(CENTER, CENTER);
  text("GAMEOVER", width / 2, height / 2);
  isOver = true;
  noLoop();
}

function reset() {
  backgroundX = 0;
  pipes = [];
  wasp = new Wasp();
  pipes.push(new Pipe());
  isOver = false;
  score = 0;
  loop();
}

function showScores() {
  textSize(32);
  text("score: " + score, 1, 32);
}