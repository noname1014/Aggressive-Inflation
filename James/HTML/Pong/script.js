var animate = window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  function(callback) { window.setTimeout(callback, 1000/60) };

var canvas;
var ctx;
var canvasWidth = 600;
var canvasHeight = 400;
/*
var keysDown = {};

window.addEventListener("keydown", function(event) {
  keysDown[event.keyCode] = true;
});

window.addEventListener("keyup", function(event) {
  delete keysDown[event.keyCode];
});
*/

window.onload = function() {
  document.body.appendChild(canvas);
  animate(step);
};

var Ball = class {
  constructor() {
    this.xPos=canvasWidth/2;
    this.yPos=canvasHeight/2;
    this.xSpeed=Math.random()*5-2.5;
    this.ySpeed=Math.random()*5-2.5;
    this.ballRad=10
  }
  bounceX() {
    this.xSpeed=this.xSpeed*-1;
  }
  bounceY(){
    this.ySpeed=this.ySpeed*-1;
  }
  draw(){
    ctx.beginPath();
    ctx.arc(this.xPos, this.yPos, this.ballRad, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'white';
    ctx.stroke();
  }
  move(){
    this.xPos=this.xPos+this.xSpeed;
    this.yPos=this.yPos+this.ySpeed;
    if (this.xPos < 0 || this.xPos > 600) {this.bounceX()}
    if (this.yPos < 0 || this.yPos > 400) {this.bounceY()}
  }
};

/*
var Paddle =  class {
  constructor(xPosition) {
    this.width = 20;
    this.height = 100;
    this.xPos = xPosition;
    this.yPos = canvasHeight/2;
    this.xSpeed = 0;
    this.ySpeed = 0;
  }

  draw(){
    ctx.fillStyle = white;
    ctx.fillRect(this.xPos, this.yPos, this.height, this.width);
  }

  move(){
    for(var key in keysDown) {
      var value = Number(key);
      if(value == 37) {
        if(this.xSpeed>-8){this.xSpeed-=1}
      }
      }
    }
  }
}
*/

canvas=document.createElement("canvas");
canvas.width = canvasWidth;
canvas.height = canvasHeight;
ctx = canvas.getContext("2d");
document.body.appendChild(canvas);

var BallInstance = new Ball();
//var Paddle1 = new Paddle(20);

var step = function(){
    init();
    updatePositions();
    draw();
    animate(step);
}

function init(){};
    
function updatePositions(){
    BallInstance.move();
};
function draw(){
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    BallInstance.draw();
    //Paddle1.draw();
};
function animate(step){};