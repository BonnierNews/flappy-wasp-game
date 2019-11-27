# Flappy Wasp Game

This is a guide for making the Flappy Wasp Game.

---


## 0. **Getting Started**

### 0.1. **Download project from GitHub**
Download project by clicking the green button named “Clone or download”. When a small dialogue appears, click “Download ZIP” in the right bottom corner to download it to your computer. Or if you have `git` installed, you can just clone the project.

### 0.2. **Install Visual Studio Code**
Download Visual Studio Code from https://code.visualstudio.com/ or use editor of your choice. You also need a running local server on your computer.

**TIP:** In Visual Studio Code you can install [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) as a plugin from the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/). When Live Server is installed, you should be able to click “Go Live” in the bottom right corner of the Visual Studio Code editor.

---


## 1. **Create game**

### 1.1. **Create a canvas**
Get started with p5.js by visiting https://p5js.org/get-started/. The first thing we need to do is add a canvas by using the [createCanvas()](https://p5js.org/reference/#/p5/createCanvas) function. Add it in the `index.js` file. See example [here](https://p5js.org/reference/#/p5/createCanvas).

<details>
<summary><b>Cheatsheet: Check the code here</b></summary>

<h4>index.js</h4><pre>
function setup() {
  <b style="color: green;">createCanvas(400, 600);</b>
}</pre>

</details>

### 1.2. **Add a background**
When we have a canvas we can add a background image. In `index.js`, use p5.js’s [image()](https://p5js.org/reference/#/p5/image) function to add the `background.png` image. See example [here](https://p5js.org/reference/#/p5/image). 

<details>
<summary><b>Cheatsheet: Check the code here</b></summary>

<h4>index.js</h4><pre>
<b style="color: green;">let backgroundImg;</b>
function preload() {
  <b style="color: green;">backgroundImg = loadImage("background.png");</b>
}
function draw() {
  <b style="color: green;">image(backgroundImg, 0, 0, 400, 600);</b>
}</pre>

</details>

---


## 2. **Create wasp**


### 2.1. **Show wasp**
In `wasp.js`, use p5.js’s [image()](https://p5js.org/reference/#/p5/image) function in the `this.show()` function. Pass the variables `this.x`, `this.y` and `this.size` as parameters to the image() function.

Then in `index.js`, create a new wasp instance and call the wasp’s `show()` function in the `draw()` function.

<details>
<summary><b>Cheatsheet: Check the code here</b></summary>

<h4>index.js</h4><pre>
function preload() {
  backgroundImg = loadImage('background.png');
  <b style="color: green;">waspImg = loadImage('wasp.png');</b>
}
function draw() {
  wasp.update();
  wasp.show();
}</pre>

<h4>wasp.js</h4><pre>
this.show = function() {
  <b style="color: green;">image(waspImg, this.x - 16, this.y - 16, 32, 32);</b>
}</pre>

</details>


### 2.2. **Add gravity**
The wasp should fall to the ground because it is affected by gravity! In `wasp.js`, we need to use `this.gravity`, `this.y`, and `this.velocity` (the wasp’s speed) to create a falling wasp. Try adding gravity in `this.show` in `wasp.js` and then use the `wasp.show()` in the the `draw()` function.

<details>
<summary><b>Cheatsheet: Check the code here</b></summary>

<h4>wasp.js</h4><pre>
this.update = function() {
  <b style="color: green;">this.velocity += this.gravity;</b>
  <b style="color: green;">this.velocity += 0.2;</b>
  <b style="color: green;">this.y += this.velocity;</b>
}</pre>

</details>

**BONUS:** See if you can check if the wasp falls outside the canvas and stop the wasp from falling!


### 2.3. **Add jump**
Now the wasp is just falling. It must be able to fly! 

<details>
<summary><b>Cheatsheet: Check the code here</b></summary>

<h4>index.js</h4><pre>
function keyPressed() {
  <b style="color: green;">if (key === " ") {
    wasp.up();
  }</b>
}</pre>

<h4>wasp.js</h4><pre>
this.up = function() {
  <b style="color: green;">this.velocity += this.lift;</b>
}</pre>

</details>

---


## 3. **Create pipes**


### 3.1. **Show pipes**
Show the pipes!

<details>
<summary><b>Cheatsheet: Check the code here</b></summary>

<h4>pipe.js</h4><pre>
this.show = function() {
  <b style="color: green;">fill(121, 85, 72);
  rect(this.x, 0, this.w, this.top);
  rect(this.x, height-this.bottom, this.w, this.bottom);</b>
}
this.update = function() {
  <b style="color: green;">this.x -= this.speed;</b>
}</pre>

<h4>index.js</h4><pre>
function keyPressed() {
  <b style="color: green;">if (key === " ") {
    wasp.up();
  }</b>
}</pre>

</details>

---


## 4. **Create score**

---


## 5. **Create presents**

---


## 6. **More ideas**
- The game gradually increases in speed.
- Make start screen with the Expressen, Code Pub, or Netlight logo.


