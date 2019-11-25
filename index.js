let wasp;
let trees = [];
let waspImg;
let backgroundImg;

function preload() {
  waspImg = loadImage('wasp.png');
  backgroundImg = loadImage('background.png');
}

function setup() {
  createCanvas(400, 600);
  wasp = new Wasp();
  trees.push(new Tree());
}

function draw() {
  background(200, 96, 34);  
  image(backgroundImg, 0, 0, 800, 600);

  for (let i = trees.length-1; i >= 0; i--) {
    trees[i].show();
    trees[i].update();

    if (trees[i].hits(wasp)) {
      console.log('HIT!!:)');
    }

    if (trees[i].offscreen()) {
      trees.splice(i, 1);
    }
  }

  wasp.show();
  wasp.update();

  if (frameCount % 100 == 0) {
    trees.push(new Tree());
  }

}

function keyPressed() {
  if (key == ' ') {
    wasp.up();
  }
}