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


### 1.1. **Open index.html**

This document contains `<script>` tags with all the JavaScript files we need to make the game. First we add `https://cdn.jsdelivr.net/npm/p5@0.10.2/lib/p5.js`, the library we are using for creative coding. Then all our custom files `index.js`, `wasp.js`, `pipe.js`, and `present.js`.


### 1.2. **Open index.js**

The index.js is our main file. To help you, we have predefined all methods you need.


### 1.1. **Create a canvas**

To add a canvas with p5.js we can use their createCanvas() method. [Read documentation here](https://p5js.org/reference/#/p5/createCanvas).

**index.js**

```js
const CANVAS_HEIGHT = 600;
const CANVAS_WIDTH = 400;

function setup() {
  // Use createCanvas() here to create a canvas.
  // Pass CANVAS_WIDTH and CANVAS_HEIGHT as arguments.
  // This will create a white canvas, so nothing will show yet in the browser.
}
```

<details style="border: 1px solid lightgray; padding: 10px;">
<summary><b>Cheatsheet: Complete code</b></summary>
<h4>index.js</h4><pre>
function setup() {
  <b>createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);</b>
}</pre>
</details>


### 1.2. **Load background image**

To add a background we must first load our image `images/background.png` into our variable `backgroundImg`. We can use **p5.js**'s method `loadImage()`.
[Read documentation here](https://p5js.org/reference/#/p5/loadImage).

**index.js**

```js
let backgroundImg;

function preload() {
  // Use loadImage() and assign it to our variable backgroundImg.
}
```

<details style="border: 1px solid lightgray; padding: 10px;">
<summary><b>Cheatsheet: Complete code</b></summary>
<h4>index.js</h4><pre>
let backgroundImg;<br>
function preload() {
  <b>backgroundImg = loadImage("images/background.png");</b>
}</pre>
</details>


### 1.3. **Draw background**

- When we have loaded `backgroundImg`, we can draw it!
- Use **p5.js**'s `image()` method to draw the image on the canvas.
- [Read documentation about image() here](https://p5js.org/reference/#/p5/image).

**index.js**

```js
function draw() {
  // Use image() and pass backgroundImg, x, y, backgroundImg.width,
  // and CANVAS_HEIGHT as arguments. Set the x and y to 0.
}
```

<details style="border: 1px solid lightgray; padding: 10px;">
<summary><b>Cheatsheet: Complete code</b></summary>
<h4>index.js</h4><pre>
function draw() {
  <b>image(backgroundImg, 0, 0, backgroundImg.width, CANVAS_HEIGHT);</b>
}</pre>
</details>

---


## 2. **Create wasp**


### 2.1. **Create wasp instance**

- Start by opening `wasp.js`.
- To create a wasp we must create an instance of the function `Wasp()` in `index.js`.
- [Read documentation about instances here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new).
- Open `index.js`.

**index.js**

```js
function startGame() {
  // Create a new instance of Wasp() and assign it to our variable wasp.
}
```

<details style="border: 1px solid lightgray; padding: 10px;">
<summary><b>Cheatsheet: Complete code</b></summary>
<h4>index.js</h4><pre>
function startGame() {
  <b>wasp = new Wasp();</b>
}</pre>
</details>


### 2.1. **Load wasp image**

- We want to load our `images/wasp.png` image.
- We can use **p5.js**'s method `loadImage()`.
- [Read documentation about loadImage() here](https://p5js.org/reference/#/p5/loadImage).

**index.js**

```js
let backgroundImg;
let waspImg;

function preload() {
  backgroundImg = loadImage("images/background.png");
  // Use loadImage() here.
}
```

<details style="border: 1px solid lightgray; padding: 10px;">
<summary><b>Cheatsheet: Complete code</b></summary>
<h4>index.js</h4><pre>
function preload() {
  <b>waspImg = loadImage("images/wasp.png");</b>
}</pre>
</details>


### 2.2. **Draw wasp image**

- We want to draw the wasp on the canvas.
- Use **p5.js**’s image() method. 
- [Read documentation about image() here](https://p5js.org/reference/#/p5/loadImage).
- Add variables `wasp.x`, `wasp.y` and `wasp.size` as parameters.

**index.js**

```js
let backgroundImg;
let waspImg;

function draw() {
  image(backgroundImg, 0, 0, backgroundImg.width, CANVAS_HEIGHT);
  // Use image() here.
}
```

<details style="border: 1px solid lightgray; padding: 10px;">
<summary><b>Cheatsheet: Complete code</b></summary>
<h4>wasp.js</h4><pre>
this.show = function() {
  <b>image(waspImg, this.x - 16, this.y - 16, 32, 32);</b>
}</pre>
</details>

<details style="border: 1px solid lightgray; padding: 10px;">
<summary><b>Cheatsheet: Complete code</b></summary>
<h4>index.js</h4><pre>
function preload() {
  backgroundImg = loadImage("background.png");
  <b>waspImg = loadImage("wasp.png");</b>
}<br>
function startGame() {
  <b>wasp = new Wasp();</b>
}<br>
function draw() {
  image(backgroundImg, 0, 0, backgroundImg.width, CANVAS_HEIGHT);
  <b>wasp.show();</b>
}</pre>
<h4>wasp.js</h4><pre>
this.show = function() {
  <b>image(waspImg, this.x - 16, this.y - 16, 32, 32);</b>
}</pre>
</details>


### 2.2. **Add gravity**

The wasp should fall to the ground because it is affected by gravity! In `wasp.js`, we need to use `this.gravity`, `this.y`, and `this.velocity` (the wasp’s speed) to create a falling wasp. Try adding gravity in `this.show` in `wasp.js` and then use the `wasp.show()` in the the `draw()` function. **BONUS:** See if you can check if the wasp falls outside the canvas and stop the wasp from falling!

<details style="border: 1px solid lightgray; padding: 10px;">
<summary><b>Cheatsheet: Complete code</b></summary>
<h4>wasp.js</h4><pre>
this.update = function() {
  <b>this.velocity += this.gravity;</b>
  <b>this.velocity += 0.2;</b>
  <b>this.y += this.velocity;</b>
}</pre>
</details>


### 2.3. **Add jump**
Now the wasp is just falling. It must be able to fly! Use the p5.js function named [keyPressed()](https://p5js.org/reference/#/p5/keyPressed) in `index.js`. Check if the space bar key is pressed, then call the `wasp.up()` function.

<details style="border: 1px solid lightgray; padding: 10px;">
<summary><b>Cheatsheet: Complete code</b></summary>
<h4>index.js</h4><pre>
function keyPressed() {
  <b>if (key === " ") {
    wasp.up();
  }</b>
}</pre>
</details><br>

Nothing is happening when calling the `wasp.up()` function? We need to add some code to it! Go to `this.up()` in `wasp.js`. We must change the velocity of the wasp from going down to up.

<details style="border: 1px solid lightgray; padding: 10px;">
<summary><b>Cheatsheet: Complete code</b></summary>
<h4>wasp.js</h4><pre>
this.up = function() {
  <b>this.velocity += this.lift;</b>
}</pre>
</details>

---


## 3. **Create pipes**
We want the wasp to move past obstacles, like the pipes in Flappy Bird.

### 3.1. **Show pipes**
We want to draw pipes both at the top and the bottom of the canvas. We can draw rectangles to the canvas by using p5.js's [rect()](https://p5js.org/reference/#/p5/rect) function. Add two rectangles to the `this.show()` function in `pipe.js`. 

<details style="border: 1px solid lightgray; padding: 10px;">
<summary><b>Cheatsheet: Complete code</b></summary>
<h4>pipe.js</h4><pre>
this.show = function() {
  <b>fill(121, 85, 72);</b>
  <b>rect(this.x, 0, this.width, this.topPipeHeight);</b>
  <b>rect(this.x, CANVAS_HEIGHT - this.bottomPipeHeight, this.width, this.bottomPipeHeight);</b>
}</pre>
<h4>index.js</h4><pre>
function startGame() {
  <b>pipes = [];</b>
  <b>pipes.push(new Pipe());</b>
}<br>
function draw() {
  <b>pipe.show();</b>
}</pre>
</details>


### 3.2. **Add movement to pipes**

<details style="border: 1px solid lightgray; padding: 10px;">
<summary><b>Cheatsheet: Complete code</b></summary>
<h4>pipe.js</h4><pre>
this.update = function() {
  <b>this.x -= this.speed;</b>
}</pre>
</details>

---

## 4. **Game over**
It's game over when you hit a pipe. In `index.js` we have a `gameover()` and here we want to display a text using [text()](https://p5js.org/reference/#/p5/text), which takes plain text and the position. Do not forget to set the `isOver` variable to true, which is declared in the top. To actually end the game so it stops looping, add the [noLoop()](https://p5js.org/reference/#/p5/noLoop) in the function as well. 

<details style="border: 1px solid lightgray; padding: 10px;">
<summary><b>Cheatsheet: Complete code</b></summary>
<h4>index.js</h4><pre>
function gameover() {
<b>  textSize(50);</b>
<b>  fill(000);</b>
<b>  text("GAME OVER", 50, 300);</b>
<b>  isOver = true;</b>
<b>  noLoop();</b>
}</pre>
</details>

Add `isOver` and `startgame()` in `keyPressed()` to reset the game. 

<details style="border: 1px solid lightgray; padding: 10px;">
<summary><b>Cheatsheet: Complete code</b></summary>
<h4>index.js</h4><pre>
function keyPressed() {
  if (key === " ") {
    wasp.up();
      <b>if (isOver) startgame();</b>
  }
}</pre>
</details><br>

---


## 5. **Create score**
Of course we want to show off our score and here we will check if the wasp has passed a pipe and add a score.
Here we should add more logic in the for-loop in `index.js`, that goes through each pipe which we just did in the step above!

<details style="border: 1px solid lightgray; padding: 10px;">
<summary><b>Cheatsheet: Complete code</b></summary>
<h4>index.js</h4><pre>
  <b>if (pipes[i].pass(wasp)) {</b>
    <b>score++;</b>
  <b>}</pre></b>
</details>

We also have to use the score variable in `startgame()`, so the score starts at 0.

<details style="border: 1px solid lightgray; padding: 10px;">
<summary><b>Cheatsheet: Complete code</b></summary>
<h4>index.js</h4><pre>
function startgame() {
  backgroundX = 0;
  pipes = [];
  wasp = new Wasp();
  pipes.push(new Pipe());
  isOver = false;
<b>score = 0;</b>
  loop();
}</pre>
</details>

### 5.1 **Display score**
In `showScores()` we want to display the score, which is plain text, here we can use p5 function's, such as [text()](https://p5js.org/reference/#/p5/text) function. We have to pass in the text, variable and position. The position can be e.g 1, 32.

Feel free to play around with the different function's but we will come a long way with text size and color.

<details style="border: 1px solid lightgray; padding: 10px;">
<summary><b>Cheatsheet: Complete code</b></summary>
<h4>index.js</h4><pre>
function showScores() {
  <b>fill(000);</b>
  <b>textSize(32);</b>
  <b>text("Score: " + score, 1, 32);</b>
}</pre>
</details>

### 5.2 **Call the score function**
Do not forget to call the `showScores()` we just created in `index.js`. Call the function inside the for-loop that goes through each pipe, without this step nothing will happen.

<details style="border: 1px solid lightgray; padding: 10px;">
<summary><b>Cheatsheet: Complete code</b></summary>
<h4>index.js</h4><pre>
<b>showScores();</pre></b>
</details>

---


## 6. **Create presents**
We want something that the wasp can collect to get extra score. To make the game more christmas-y we can generate christmas presents that randomly flies against the wasp. But this time, compared to the pipes, we actually want to hit each present to be able to get extra score. 

To start off with the presents we jump to `index.js` where we find a global variable in the top called `presentImg;`. Next up we want to use the variable and set to a [loadImage()](https://p5js.org/reference/#/p5/loadimage), which is a magical p5 function, and take the present.png image which you will find in the images folder and use it inside of the `preload()`.

<details style="border: 1px solid lightgray; padding: 10px;">
<summary><b>Cheatsheet: Complete code</b></summary>
<h4>index.js</h4><pre>
let presentImg;
<br>
function preload() {
  waspImg = loadImage('wasp.png');
  backgroundImg = loadImage('background.png');
<b>  presentImg = loadImage('present.png');</b>
<b>}</pre></b>
</details>

### 6.1 **Show presents**
In `present.js` we have to functions: `this.show = function()` and `this.update = function()`. Now we actually want to show the presents so add the present variable, x, y, width and height as parameters in the show function.

The `update()` will update the presents so they start moving from right to left of the canvas. Take the x variable and substract with the speed variable.

<details style="border: 1px solid lightgray; padding: 10px;">
<summary><b>Cheatsheet: Complete code</b></summary>
<h4>present.js</h4><pre>
this.show = function() {
<b> image(presentImg, this.x, this.y, this.width, this.height);</b>
<b>}</b>
<br>
this.update = function() {
<b> this.x -= this.speed;</b>
<b>}</pre></b>
</details>


When the steps above is completed we actually have to draw the presents in `function draw()` in `index.js`. To draw infinite loops of present we have to loop through all presents and for each present call the `show()` and `update()`.

<details>
<summary><b>Cheatsheet: Check the code here</b></summary>
<h4>index.js</h4><pre>
<b>for (let i = presents.length-1; i >= 0; i--) {</b>
<b>   presents[i].show();</b>
<b>   presents[i].update();</b>
<b>}</pre></b>
</details>

### 6.2 **Hit detection**
At this point we want something to happen when the wasp actually hits a present. Here we must do a calculation, a quite similar one to the calculation for the hit detection for the pipes. Use `this.hits = function(wasp)` in `present.js`.

We must check if the height of the wasp is greater than the presents height and... you try to finish the calculation ;).  
Write a `console.log` in the if-statement to check if it works. 

<details style="border: 1px solid lightgray; padding: 10px;">
<summary><b>Cheatsheet: Complete code</b></summary>
<h4>present.js</h4><pre>
this.hits = function(wasp) {
<b>   if (wasp.y > this.y && wasp.y < this.y + this.height) {</b>
<b>     if (wasp.x > this.x && wasp.x < this.x + this.width) {</b>
<b>       console.log("HITS");</b>
<b>      return true;</b>
<b>     }</b>
<b>   }</b>
<b>  return false;</b>
<b> }</pre></b>
</details>

Now we want a new present to generate each 75% of the frame, use [frameCount()](https://p5js.org/reference/#/p5/frameCount) and push the presents to `christmasPresent()` in `index.js`.

<details style="border: 1px solid lightgray; padding: 10px;">
<summary><b>Cheatsheet: Check the code here</b></summary>
<h4>index.js</h4><pre>
<b>if (frameCount % 75 == 0) {</b>
<b>    presents.push(new christmasPresent());</b>
<b> }</pre></b>
</details>

### 6.3 **Get extra score**
To make the game more fun we can set that the user will get extra score when hitting a present. Add extra score in `index.js` in the for-loop we created in 5.1.
<details style="border: 1px solid lightgray; padding: 10px;">
<summary><b>Cheatsheet: Check the code here</b></summary>
<h4>index.js</h4><pre>
  for (let i = presents.length-1; i >= 0; i--) {
    presents[i].show();
    presents[i].update();
<b>    if (presents[i].hits(wasp)) {</b>
<b>      score += 3;</b>
<b>      presents.splice(i, 1);</b>
<b>    }</b>
  }</pre>
</details>

### 6.4 **Reset presents**
When we start a new game we want the presents array to be empty. Add an empy array in `index.js` in the `startgame()`:

<details style="border: 1px solid lightgray; padding: 10px;">
<summary><b>Cheatsheet: Check the code here</b></summary>
<h4>index.js</h4><pre>
function startgame() {
  backgroundX = 0;
  pipes = [];
  wasp = new Wasp();
  pipes.push(new Pipe());
  isOver = false;
  score = 0;
  loop();
<b>  presents = [];</b>
<b>  presents.push(new christmasPresent());</b>
}</pre>
</details>


---


## 7. **More ideas**
- The game gradually increases in speed.
- Make start screen with the Expressen, Code Pub, or Netlight logo.
- Add a start game button


