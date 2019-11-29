# Flappy Wasp Game

This is a guide for making Flappy Wasp Game. Just follow this guide and at the end you will have created a game!

## **Before you start**

- Please visit the links to p5.js's documentation if you get stuck!
- If you still don't get it; you can view the complete code snippet for each step if you click **"Cheatcheet: Complete code"**.

---


## 0. **Getting Started**

### 0.1. **Download project from GitHub**
Download project by clicking the green button named “Clone or download”. When a small dialogue appears, click “Download ZIP”. Unzip the folder.

### 0.2. **Install Visual Studio Code**
Download Visual Studio Code from https://code.visualstudio.com/, install, and open the unzipped folder.

### 0.3. **Install Live Server**
In Visual Studio Code you can install [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) as a plugin from the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/). 

### 0.4. **Start Live Server**
After Live Server is installed, you should be able to click “Go Live” in the bottom right corner of the Visual Studio Code editor.

---


## 1. **Create game**

Get started with p5.js by visiting https://p5js.org/get-started/.

The `index.html` contains `<script>` tags with all the JavaScript files we need to make the game. First we add `https://cdn.jsdelivr.net/npm/p5@0.10.2/lib/p5.js`, the library we are using for creative coding. Then all our custom files `index.js`, `wasp.js`, `pipe.js`, and `present.js`.

---

**ALERT:** This will make all variables accessible globally. So if you declare a variable in `index.js`, you will also be able to use it in, for example, `wasp.js`.

---

To help you, we have predefined all methods and variables you need in the JavaScript files.

---


### 1.1. **Create a canvas**

- To add a canvas with **p5.js** we can use their `createCanvas()` method. [Read documentation here](https://p5js.org/reference/#/p5/createCanvas).
- This will create a white canvas.
- Arguments for `createCanvas()`;
  - `CANVAS_WIDTH` is a predefined variable that contains the canvas width.
  - `CANVAS_HEIGHT` is a predefined variable that contains the canvas height.

**`index.js`**

```js
function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
}
```

---


### 1.2. **Load images**

- Then we want to load some images;
  - `images/background.png` is our background image.
  - `images/wasp.png` is our main character in the game!
- To add our background we must first load the image.
- We can use **p5.js** method `loadImage()`. [Read documentation here](https://p5js.org/reference/#/p5/loadImage).
- Pass `"images/background.png"` and `"images/wasp.png"` as an argument to `loadImage()`.
- Assign the return value to our predefined variable `backgroundImg` and `waspImg`.

**`index.js`**

```js
function preload() {
  backgroundImg = loadImage("images/background.png");
  waspImg = loadImage("images/wasp.png");
}
```

---


## 2. **Create background**


### 2.1. **`background.js`**

- We have created a separate file `background.js` to handle all background-related code.
- The background will have a `speed`, `x`, `y`, `width` and `height` variable.
- It also contains the methods;
  - `show()` that we will use for drawing.
  - `update()` that we will use for animation.

---


### 2.2. **Create instance**

- To use our `Background` class in our `index.js` file, we must create a new instance object.
- In our `index.js`, we can use the keyword `new` to create a new instance object and save it in our predefined variable `background`.

**`index.js`**

```js
function setup() {
  background = new Background();
}
```

---


### 2.3. **Define drawing**

- Now we have to tell **p5.js** how we want to draw the background on the canvas.
- Use **p5.js**'s `image()` method. [Read documentation here](https://p5js.org/reference/#/p5/image).
- Arguments to `image()`;
  - `backgroundImg`: Global variable defined in our `index.js` file. Contains the actual image file.
  - `this.x`: Variable defined in `background.js`. Contains the image x position.
  - `this.y`: Variable defined in `background.js`. Contains the image y position.
  - `this.width`: Variable defined in `background.js`. Contains the image width.
  - `this.height`: Global variable defined in our `index.js` file. Contains the image height.

**`background.js`**

```js
show() {
  image(backgroundImg, this.x, this.y, this.width, this.height);
}
```

---

### 1.6. **Draw background**

- The most important **p5.js** method for drawing is the `draw()` method! [Read documentation here](https://p5js.org/reference/#/p5/draw).
- If we don't add our `background.show()` here, nothing will show, so let's add it!

**`index.js`**

```js
function draw() {
  background.show();
}
```

---

- **We should now see a background image on our canvas!**

---


### 1.6. **Move background**

- We also want our background to move. Let's add some code to our `update()` method in `background.js`.

**`background.js`**

```js
update() {
  this.x -= this.speed;
  if (this.x <= -this.width + CANVAS_WIDTH) {
    image(backgroundImg, this.x + this.width, 0, this.width, height);
    if (this.x <= -this.width) {
      this.x = 0;
    }
  }
}
```

- Then just add the `background.update()` beneath the `background.show()` in the `index.js` file.

**`index.js`**

```js
function draw() {
  background.show();
  background.update();
}
```

---

- **We should now have a moving background!**

---


## 3. **Create wasp**


### 3.1. **`wasp.js`**

- We have created a separate file `wasp.js` to handle all wasp-related code.
- The wasp will have a `speed`, `x`, `y`, `width`, `height`, `gravity`, and `lift` variable.
- It also contains the methods;
  - `show()` that we will use for drawing the image.
  - `update()` that we will use for animation, in this case, creating gravity.
  - `up()` that we will use for creating jump animation when user press `Space Bar`.

---


### 3.2. **Create instance object**

- We must first create an instance object of `Wasp` in `index.js` to use it there.
- Assign the instance object to our predefined variable `wasp`.

**`index.js`**

```js
function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  background = new Background();
  wasp = new Wasp();
}
```

---


### 3.3. **Define drawing**

- In the Wasp's `show()` method, we want to use **p5.js**’s `image()` method.
- Pass `waspImg`, `this.x`, `this.y`, `this.width`, and `this.height` as parameters.

**`wasp.js`**

```js
show() {
  image(waspImg, this.x, this.y, this.width, this.height);
}
```

---


### 3.4. **Draw wasp**

- Let's add our `wasp.show()` method.
- We should now see a wasp image on our canvas!
- We must also call the `wasp.show()` in `index.js` to draw the wasp.

**`index.js`**

```js
function draw() {
  wasp.show();
}
```

---


### 3.5. **Add gravity**

- The wasp should fall to the ground because it is affected by gravity! 
- In `wasp.js`, we need to use `this.gravity`, `this.y`, and `this.speed` to create a falling wasp.

**`wasp.js`**

```js
update() {
  this.speed += this.gravity;
  this.y += this.speed;
}
```

---

- **Don't forget to call `wasp.show()` in `index.js`!**

---

**`index.js`**

```js
function draw() {
  // ... (earlier code)

  wasp.show();
  wasp.update();
}
```

---

- **We should now have a falling wasp!**

---


### 3.6. **Add jumping wasp**

- Now the wasp is just falling. It must be able to fly!
- Use the p5.js function named [keyPressed()](https://p5js.org/reference/#/p5/keyPressed) in `index.js`.
- Check if the space bar key is pressed, then call the `wasp.up()` function.

```js
function keyPressed() {
  if (key === " ") {
    wasp.up();
  }
}
```

- Nothing is happening when calling the `wasp.up()` function? We need to add some code to it!
- In `wasp.js`, go to `up()`.
- We can make the wasp fly by adding a positive lift force to `this.speed`.

**`wasp.js`**

```js
up() {
  this.speed += this.lift;
}
```

---

- **We should now have a jumping wasp!**

---


### 3.7. **Stop wasp from falling outside canvas**

- At the moment the wasp just disappears when falling outside the canvas.
- To stop the wasp from falling outside the canvas, we can add some code to the `update()` in `wasp.js`.

**`wasp.js`**

```js
update() {
  // ... (earlier code)

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

---


## 4. **Create pipes**

We want the wasp to move past obstacles, like the pipes in Flappy Bird.


### 4.1. **`pipe.js`**

- We have created a separate file `pipe.js` to handle all pipe-related code.
- The pipe will have a `speed`, `top`, and `bottom` variable.
  - `top` contains an object with properties for the upper pipe.
  - `bottom` contains an object with properties for the lower pipe.
- It also contains the methods;
  - `show()` that we will use for drawing the image.
  - `update()` that we will use for animation, in this case, creating gravity.
  - `hits()`
  - `pass()`
  - `offscreen()`

---


### 4.2. **Create instance**

- We must first create an instance object of `Wasp` in `index.js` to use it there.
- Assign the instance object to our predefined variable `wasp`.

**`index.js`**

```js
function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  background = new Background();
  wasp = new Wasp();
  pipe = new Pipe();
}
```

---


### 4.1. **Define drawing**

- We want to draw pipes both at the top and the bottom of the canvas.
- First we use **p5.js** `fill()` method to define which color to use. [Read documentation here](https://p5js.org/reference/#/p5/rect).
- Then we add two rectangles by using **p5.js** `rect()` method.

**pipe.js**
```js
show() {
  fill(121, 85, 72);
  rect(this.x, 0, this.width, this.topPipeHeight);
  rect(this.x, CANVAS_HEIGHT - this.bottomPipeHeight, this.width, this.bottomPipeHeight);
}
```

---


### 4.2. **Add new pipes**

- Because we want to have many pipes, we create an array to store our pipes in.
- We can then start by adding a pipe to the array.

**`index.js`**

```js
function setup() {
  // ... (earlier code)

  pipes = [];
  pipes.push(new Pipe());
}
```

### 4.3. **Show pipes**

- Because we have an array of pipes, we need to loop the array to be able to call the `pipe.show()`.

**`index.js`**

```js
function draw() {
  // ... (earlier code)

  for (let pipe of pipes) {
    pipe.show();
  }
}
```

### 4.4. **Add movement to pipes**

- In `pipe.js`, we can add movement to the pipes by subtracting `this.speed` (the pipe's speed) from `this.x` (the pipes x position).

**pipe.js**

```js
update() {
  this.x -= this.speed;
}
```

- Don't forget to also call the `pipe.update()` function in `index.js`.

**`index.js`**

```js
function draw() {
  // ... (earlier code)

  for (let pipe of pipes) {
    pipe.show();
    pipe.update();
  }
}
```

### 4.5. **Repeatedly add new pipes**

- Now we only get two pipes and then nothing more.

**`index.js`**

```js
function draw() {
  // ... (earlier code)

  if (frameCount % 100 == 0) {
    pipes.push(new Pipe());
  }
}
```

---

## 4. **Game over**

- It's game over when you hit a pipe.
- In `index.js` we have a `gameover()` and here we want to display a text using [text()](https://p5js.org/reference/#/p5/text), which takes plain text and the position.
- Do not forget to set the `isOver` variable to true, which is declared in the top. To actually end the game so it stops looping, add the [noLoop()](https://p5js.org/reference/#/p5/noLoop) in the function as well. 

**`index.js`**

```js
function gameover() {
  textSize(50);
  fill(000);
  text("GAME OVER", 50, 300);
  isOver = true;
  noLoop();
}
```

- Add `isOver` and `startgame()` in `keyPressed()` to reset the game. 

**`index.js`**

```js
function keyPressed() {
  if (key === " ") {
    wasp.up();
    if (isOver) startGame();
  }
}
```

---


## 5. **Create score**

Of course we want to show off our score and here we will check if the wasp has passed a pipe and add a score.
Here we should add more logic in the for-loop in `index.js`, that goes through each pipe which we just did in the step above!

**`index.js`**

```js
if (pipes[i].pass(wasp)) {
  score++;
}
```

We also have to use the score variable in `startgame()`, so the score starts at 0.

**`index.js`**

```js
function startgame() {
  backgroundX = 0;
  pipes = [];
  wasp = new Wasp();
  pipes.push(new Pipe());
  isOver = false;
  score = 0;
  loop();
}
```

### 5.1. **Display score**

In `showScores()` we want to display the score, which is plain text, here we can use p5 function's, such as [text()](https://p5js.org/reference/#/p5/text) function. We have to pass in the text, variable and position. The position can be e.g 1, 32.

Feel free to play around with the different function's but we will come a long way with text size and color.

**`index.js`**

```js
function showScores() {
  fill(000);
  textSize(32);
  text("Score: " + score, 1, 32);
}
```

### 5.2 **Call the score function**

Do not forget to call the `showScores()` we just created in `index.js`. Call the function inside the for-loop that goes through each pipe, without this step nothing will happen.

**`index.js`**

```js
showScores();
```

---


## 6. **Create presents**

We want something that the wasp can collect to get extra score. To make the game more christmas-y we can generate christmas presents that randomly flies against the wasp. But this time, compared to the pipes, we actually want to hit each present to be able to get extra score. 

To start off with the presents we jump to `index.js` where we find a global variable in the top called `presentImg;`. Next up we want to use the variable and set to a [loadImage()](https://p5js.org/reference/#/p5/loadimage), which is a magical p5 function, and take the present.png image which you will find in the images folder and use it inside of the `preload()`.

**`index.js`**

```js
function preload() {
  waspImg = loadImage("images/wasp.png");
  backgroundImg = loadImage("images/background.png");
  presentImg = loadImage("images/present.png");
}
```

### 6.1. **Show presents**

In `present.js` we have to functions: `this.show = function()` and `this.update = function()`. Now we actually want to show the presents so add the present variable, x, y, width and height as parameters in the show function.

The `update()` will update the presents so they start moving from right to left of the canvas. Take the x variable and substract with the speed variable.

**`present.js`**

```js
this.show = function() {
  image(presentImg, this.x, this.y, this.width, this.height);
}

this.update = function() {
 this.x -= this.speed;
}
```

When the steps above is completed we actually have to draw the presents in `function draw()` in `index.js`. To draw infinite loops of present we have to loop through all presents and for each present call the `show()` and `update()`.

**`index.js`**

```js
for (let i = presents.length-1; i >= 0; i--) {
  presents[i].show();
  presents[i].update();
}
```

### 6.2 **Hit detection**

At this point we want something to happen when the wasp actually hits a present. Here we must do a calculation, a quite similar one to the calculation for the hit detection for the pipes. Use `this.hits = function(wasp)` in `present.js`.

We must check if the height of the wasp is greater than the presents height and... you try to finish the calculation ;).  
Write a `console.log` in the if-statement to check if it works. 

**`present.js`**

```js
this.hits = function(wasp) {
  if (wasp.y > this.y && wasp.y < this.y + this.height) {
    if (wasp.x > this.x && wasp.x < this.x + this.width) {
      console.log("HITS");
     return true;
    }
  }
 return false;
}
```

Now we want a new present to generate each 75% of the frame, use [frameCount()](https://p5js.org/reference/#/p5/frameCount) and push the presents to `christmasPresent()` in `index.js`.

**`index.js`**

```js
if (frameCount % 75 == 0) {</b>
  presents.push(new christmasPresent());
}
```

### 6.3 **Get extra score**

To make the game more fun we can set that the user will get extra score when hitting a present. Add extra score in `index.js` in the for-loop we created in 5.1.

**`index.js`**

```js
for (let i = presents.length-1; i >= 0; i--) {
  presents[i].show();
  presents[i].update();
  if (presents[i].hits(wasp)) {
    score += 3;
    presents.splice(i, 1);
  }
}
```

### 6.4 **Reset presents**

When we start a new game we want the presents array to be empty. Add an empy array in `index.js` in the `startgame()`:

**`index.js`**

```js
function startgame() {
  backgroundX = 0;
  pipes = [];
  wasp = new Wasp();
  pipes.push(new Pipe());
  isOver = false;
  score = 0;
  loop();
  presents = [];
  presents.push(new christmasPresent());
}
```

---


## 7. **More ideas**

- The game gradually increases in speed.
- Make start screen with, for example, the Expressen, Code Pub, or Netlight logo.