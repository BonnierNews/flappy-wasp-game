https://github.com/BonnierNews/expressen-lifestyle-netlight-codepub

# Flappy Wasp Game

This is a guide for making Flappy Wasp Game. Just follow this guide and at the end you will have created a game!

---


# 0. **Getting Started**

## 0.1. **Download project from GitHub**
Download project by clicking the green button named “Clone or download”. When a small dialogue appears, click “Download ZIP”. Unzip the folder.

## 0.2. **Install Visual Studio Code**
Download Visual Studio Code from https://code.visualstudio.com/, install, and open the unzipped folder.

## 0.3. **Install Live Server**
In Visual Studio Code you can install [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) as a plugin from the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/). 

## 0.4. **Start Live Server**
After Live Server is installed, you should be able to click “Go Live” in the bottom right corner of the Visual Studio Code editor.

## 0.5 **How to read code examples**

To help you, we have predefined all methods and variables you need in the JavaScript files. In the code examples, we will use `/* ... */` as a comment to let you know when there is written code earlier but we don't want to show all of it.

---


# 1. **Create game**

We will use a library called **p5.js** to create our game. Get started with **p5.js** by visiting https://p5js.org/get-started/.

The `index.html` contains `<script>` tags with all the JavaScript files we need to make the game. First we add `https://cdn.jsdelivr.net/npm/p5@0.10.2/lib/p5.js`, the **p5.js** library. Then all our custom files `index.js`, `wasp.js`, `pipe.js`, and `present.js`.

We have created a file called `index.js`. This is where our main **methods** and **variables** for our game are predefined.

---


## 1.1. **Load images**

- Open index.js. Go to function preload().
- We want to load images into our game.
- We can use **p5.js** method [loadImage()](https://p5js.org/reference/#/p5/loadImage).

**`index.js`**
```js
function preload() {
  backgroundImg = loadImage("images/background.png");
  waspImg = loadImage("images/wasp.png");
  presentImg = loadImage("images/present.png");
}
```

---


## 1.2. **Create a canvas**

- We want to add a canvas.
- With **p5.js** we can use their [createCanvas()](https://p5js.org/reference/#/p5/createCanvas) function.
- We pass our predefined variables `CANVAS_HEIGHT` and `CANVAS_WIDTH` as arguments.

**`index.js`**
```js
function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
}
```

- Open browser. Check that we have a canvas.

---


# 2. **Create background**

![](images/background.png)


## 2.1. **Create instance**

- Open index.js. Go to function [setup()](https://p5js.org/reference/#/p5/draw).
- We create a new instance of our class Background.

**`index.js`**
```js
function setup() {
  /* ... */
  background = new Background();
}
```

---


## 2.2. **Define drawing**

- Open background.js.
- Go to function show().
- To draw the image, we can use **p5.js**'s drawing method [image()](https://p5js.org/reference/#/p5/image).

**`background.js`**
```js
show() {
  image(backgroundImg, this.x, this.y, this.width, this.height);
}
```

- Open index.js.
- Go to function draw().

**`index.js`**
```js
function draw() {
  background.show();
}
```

---


## 2.3. **Define moving animation**

- Open background.js.
- Go to function update().
- To move the background, we subtract the speed from the background's x position.

**`background.js`**
```js
update() {
  this.x -= this.speed;
}
```

- Open index.js.
- Go to function draw().

**`index.js`**
```js
function draw() {
  /* ... */
  background.update();
}
```

- Go to browser. We should now see a moving background image on our canvas.

---


## 2.4. **Loop background**

- Open background.js. Go to function update().
- We add logic to make the background repeat itself in an infinite loop.

**`background.js`**
```js
update() {
  /* ... */
  if (this.x + this.width <= CANVAS_WIDTH) {
    image(backgroundImg, this.x + this.width, 0, this.width, this.height);
    if (this.x <= -this.width) this.x = 0;
  }
}
```

- Go to browser. We should now see a never ending background.

---


# 3. **Create wasp**

![](images/wasp.png)


## 3.1. **Create instance**

- Open index.js.
- Go to function [setup()](https://p5js.org/reference/#/p5/draw).
- We create a new instance of our class Wasp.

**`index.js`**
```js
function setup() {
  /* ... */
  wasp = new Wasp();
}
```

---


## 3.2. **Define drawing**

- Open wasp.js.
- Go to function show().
- We use **p5.js**'s function [image()](https://p5js.org/reference/#/p5/image) to draw the wasp.

**`wasp.js`**
```js
show() {
  image(waspImg, this.x, this.y, this.width, this.height);
}
```

- Open index.js.
- Go to function draw().

**`index.js`**
```js
function draw() {
  /* ... */
  wasp.show();
}
```

- Open browser. Check that we have a wasp.

---


## 3.3. **Add gravity animation**

- To make the wasp fall to the ground, we add gravity to the wasp's speed, then add that speed to the wasp's y position to create accelerated falling wasp.
- Open wasp.js.
- Go to function update().

**`wasp.js`**
```js
update() {
  this.speed += this.gravity;
  this.y += this.speed;
}
```

- Open index.js.
- Go to function draw().

**`index.js`**
```js
function draw() {
  /* ... */
  wasp.update();
}
```

- Open browser. Check that we have a falling wasp.

---


## 3.4. **Add jump animation**

- We want to add a lift force to the wasp's speed to make wasp jump.
- Open wasp.js.
- Go to function up().

**`wasp.js`**
```js
up() {
  this.speed += this.lift;
}
```

- Open index.js.
- Go to function [keyPressed()](https://p5js.org/reference/#/p5/keyPressed).
- If the space key is pressed we want to call the wasp.up() function that we made in step 3.1.

**`index.js`**
```js
function keyPressed() {
  if (key === " ") wasp.up();
}
```

- Open browser. Check that the wasp can jump by pressing space.

---


## 3.5. **Set wasp position limits**

- We want to prevent the wasp from falling outside the canvas. We can do that by checking the wasp's position relative to the canvas height.
- Open wasp.js.
- Go to function update().

**`wasp.js`**
```js
update() {
  /* ... */
  if (this.y > CANVAS_HEIGHT) {
    this.y = CANVAS_HEIGHT;
    this.speed = 0;
  }
  if (this.y < 0) {
    this.y = 0;
    this.speed = 0;
  }
}
```

- Open browser. Check that the wasp cannot disappear from canvas.

---


# 4. **Create pipes**

We want the wasp to move past obstacles, like the pipes in Flappy Bird.


## 4.1. **Define drawing and animation**

- Open pipe.js.
- Go to function show().
- We use **p5.js** [fill()](https://p5js.org/reference/#/p5/fill) method to define which color to use. 
- Then we add two rectangles by using **p5.js** [rect()](https://p5js.org/reference/#/p5/rect) method.

**`pipe.js`**
```js
show() {
  fill(121, 85, 72);
  rect(this.x, 0, this.width, this.topHeight);
  rect(this.x, this.bottomY, this.width, this.bottomHeight);
}
```

- Go to function update().
- Add movement to the pipes by subtracting the pipe's speed from the pipes x position.

**`pipe.js`**
```js
update() {
  this.x -= this.speed;
}
```

---


## 4.2. **Add pipes**

- Open index.js. Go to function draw().
- The **p5.js** variable [frameCount](https://p5js.org/reference/#/p5/frameCount) contains the number of frames that have been displayed since the game started. We can use that number to add new pipes.
- We will use the [modulo operation](https://en.wikipedia.org/wiki/Modulo_operation) to do that inside draw() method, and add a new pipe every 100 frame.
- We will use the function push() to add a new pipe to the pipes array.

**`index.js`**
```js
function draw() {
  /* ... */
  if (frameCount % 100 === 0) pipes.push(new Pipe());
}
```

---


## 4.3. **Show pipes on canvas**

- Add this code after step 4.2.
- We need to loop the array of pipes to be able to call pipe.show() and pipe.update().

**`index.js`**
```js
function draw() {
  /* ... */
  for (let pipe of pipes) {
    pipe.show();
    pipe.update();
  }
}
```

- Open browser. Check that we have pipes moving from right to left on canvas.

---


# 5. **Game over**

It's game over when you hit a pipe. At the moment, nothing will happen when we hit a pipe. So it's time for us to implement the game over functionality!


## 5.1. **Check if wasp hits a pipe**

- Open pipe.js.
- Go to function hits().
- We will add logic for checking if the wasp's x and y position is inside the x and y position for a pipe.

**`pipe.js`**
```js
hits(wasp) {
  if (wasp.y < this.topHeight || wasp.y > CANVAS_HEIGHT - this.bottomHeight) {
    if (wasp.x > this.x && wasp.x < this.x + this.width) return true;
  }
  return false;
}
```

---


## 5.2. **Define drawing for "game over"**

- Open index.js. Go to function gameOver().
- We will add following:
  - Set our text size using **p5.js** [textSize()](https://p5js.org/reference/#/p5/textsize) method.
  - Set our fill color using **p5.js** [fill()](https://p5js.org/reference/#/p5/fill) method.
  - Add a text "GAME OVER" using **p5.js** [text()](https://p5js.org/reference/#/p5/text) method.
  - Set our predefined variable `isOver` to true. We will use it later in function keyPressed() to restart the game.
  - To pause the game, add **p5.js** [noLoop()](https://p5js.org/reference/#/p5/noLoop) method.

**`index.js`**
```js
function gameOver() {
  textSize(50);
  fill(000);
  text("GAME OVER", 50, 300);
  isOver = true;
  noLoop();
}
```

---

## 5.3. **Show "game over"**

- Go to function draw().
- Inside the for-loop we defined in step 4.3, we can check when the wasp is hitting a pipe and show a game over screen.

**`index.js`**
```js
function draw() {
  /* ... */
  for (let pipe of pipes) {
    /* ... */
    if (pipe.hits(wasp)) gameOver();
  }
}
```

- Open browser. Check that we get a "game over" screen when hitting a pipe.

---

## 5.4. **Start a new game**

- Go to function startGame().
- To start a new game we have to add some code in the startGame() function that will reset all values we have used.

**`index.js`**
```js
function startGame() {
  background = new Background();  // Reset the background's x position.
  wasp = new Wasp();              // we create a new wasp to original position.
  pipes = [];                     // We will need an empty pipes array to reset pipe positions.
  presents = [];                  // We will need an empty presents array. We will implement later.
  isOver = false;                 // Set isOver to false when starting the game again.
  loop();                         // Start looping again (adding frames), else game will be paused.
  score = 0;                      // We set the score to 0. We will implement this in the next step!
}
```

- Go to function keyPressed().
- We want to start a new game when the player presses the `Space` key.
- Check if `isOver` is true. If true, run `startGame()` to start a new game.
- This will make sure we only start a new game when the variable `isOver` is set to true.

**`index.js`**
```js
function keyPressed() {
  if (key === " ") {
    wasp.up();
    if (isOver) startGame();
  }
}
```

- Open browser. Check that we can start a new game after we get to the "game over" screen by pressing space key.

---


# 6. **Create score**

Of course we want to show off our score and here we will check if the wasp has passed a pipe and add a score.

---


## 6.1. **Check if wasp passes a pipe**

- Open pipe.js. Go to function pass().
- We add logic the check if the wasp has passed a pipe. If the wasp's x position is bigger than the pipe's x position it means that the wasp has passed the pipe!

**`pipe.js`**
```js
pass(wasp) {
  if (wasp.x > this.x && !this.passed) {
    this.passed = true;
    return true;
  }
  return false;
}
```

---


## 6.2. **Increase score**

- Open index.js. Go to function draw().
- In the pipe-loop. Check if wasp passes a pipe and increase the score.

**`index.js`**
```js
function draw() {
  /* ... */
  for (let pipe of pipes) {
    /* ... */
    if (pipe.pass(wasp)) score++;
  }
}
```

---


## 6.3. **Display score**

- Go to function showScore().
- We want to display the score, which is plain text, here we can use **p5.js** functions, such as [text()](https://p5js.org/reference/#/p5/text) function. We have to pass in the text and position.

**`index.js`**
```js
function showScore() {
  fill(000);
  textSize(32);
  text("Score: " + score, 1, 32);
}
```

- Go to function draw().
- Call function showScore().

**`index.js`**
```js
function draw() {
  /* ... */
  showScore();
}
```

---


# 7. **Create presents**

![](images/present.png)

We want something that the wasp can collect to get extra score. To make the game more christmas-y we can generate christmas presents that randomly flies against the wasp. But this time, compared to the pipes, we actually want to hit each present to be able to get extra score. 

---


## 7.1. **Define drawing and animation**

- Open present.js. Go to function show().
- We add the present's x, y, width and height as parameters to image().

**`present.js`**
```js
show() {
  image(presentImg, this.x, this.y, this.width, this.height);
}
```

- Go to function update().
- We will update the presents so they start moving from right to left on the canvas. We take the present's x position and substract with the present's speed.

**`present.js`**
```js
update() {
 this.x -= this.speed;
}
```

---

## 7.2. **Add presents**

- Open index.js. Go to function draw().
- We will add a new present when frameCount % 75 is 0.
- We will use the function push() to add a new present to the presents array.

**`index.js`**
```js
function draw() {
  /* ... */
  if (frameCount % 75 === 0) presents.push(new Present());
}
```

---


## 7.3. **Show presents**

- We need to loop the array of presents to be able to call show() and update().

**`index.js`**
```js
function draw() {
  /* ... */
  for (let present of presents) {
    present.show();
    present.update();
  }
}
```

---


## 7.4 **Add hit detection**

- Open present.js. Go to function hits().
- At this point we want something to happen when the wasp actually hits a present. Here we must do a calculation, a quite similar one to the calculation for the hit detection for the pipes. We must check if the height of the wasp is greater than the presents height and... you try to finish the calculation ;).

**`present.js`**
```js
hits(wasp) {
  if (wasp.y > this.y && wasp.y < this.y + this.height) {
    if (wasp.x > this.x && wasp.x < this.x + this.width) {
      if (!this.taken) {
        this.taken = true;
        return true;
      }
    }
  }
  return false;
}
```

---


## 7.3 **Catch presents**

- Open index.js. Go to function draw().
- To make the game more fun we can set that the user will get extra score when hitting a present in the present-loop.
- We then remove the present from the canvas by using the splice() function.

**`index.js`**
```js
function draw() {
  /* ... */
  for (let present of presents) {
    /* ... */
    if (present.hits(wasp)) {
      score += 3;
      presents.splice(presents.indexOf(present), 1);
    }
  }
}
```

---

# 8. **You finished the game**

## 8.1. **More ideas**

- If you are done, but still have time left? Try implementing your own ideas or try out these below:
  - Make the wasp fly faster and faster as the game progresses.
  - Experiment with the physics of the wasp, such as gravity and lift.
  - Show a high score-list of best scores.
  - Make a start screen, to show before the game starts.

---

_Note: This project is inspired by 
[The Coding Train](https://thecodingtrain.com/). Check him out - he has many more fun coding challenges like this on his YouTube channel!_
