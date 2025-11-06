var bgred = 0;
var bggreen = 0;
var bgblue = 255;
var score = 0;

var ballx = 200;
var bally = 200;

var disToball;

var ballsize = 100;

var difficulty = 25;

var spacegunpic;

var bam;

function preload(){
  img = loadImage('falien.png');
  spacegunpic = loadImage ('gunfirstpersonnobackground.png');
  bam = loadImage('transparentfiremacro.png');
}

function setup() {
createCanvas (500, 500);
textAlign(CENTER);
rectMode(CENTER);
imageMode(CENTER);
textSize(20, 20)
}


function draw() {
background(bgred, bggreen, bgblue);
image (spacegunpic, 400, 405, 300, 300);
disToball = dist (ballx, bally, mouseX, mouseY);

//square(ballx, bally, ballsize);
textStyle(BOLD);
text('Score: ' + score, width/2, 40);
//text('mouseX' + mouseX, 50, 90);
//text('mouseX' + mouseY, 50, 50);
//text('distance' + disToball, 50, 200);

//if (score < 5) {
//  levelone()
//} else if (score > 5){
//leveltwo()
//}
if (mouseIsPressed === true) {
  image (bam, 339, 254, 350, 350);
}

ballActivity();
}

function levelone(){
  bgred = 0;
  bgblue = 0;
  bggreen = 200;
  ballsize = 200;
}

function leveltwo(){
bgblue = 200
bggreen = 0;
ballsize = 150;
difficulty = 10;
}

function levelthree(){
bgred = 255;
bgblue = 0
bggreen = 204;
ballsize = 100;
difficulty = 20;
}

function levelfour(){
bgred = 200;
bgblue = 0
bggreen = 0;
ballsize = 300;
difficulty = 20;
}

function Gameover(){
background('black');
  textSize(100);
  fill('yellow');
  text('Congrats!', width/2, 100);
  fill('cornflowerblue');
  text('You', width/2, 200);
  fill('tomato');
  text('killed', width/2, 300);
  fill('limegreen');
  text('Aliens!', width/2, 400);
}

function mousePressed(){

  if (disToball < difficulty){
    ballx = random (0, 400);
    bally = random (0, 400);
    score = score +1;
  }
}


function ballActivity(){
  if (score < 10) {
    levelone();
    image (img, ballx, bally, ballsize, ballsize);
  //square(ballx, bally, ballsize);
  } if (score >= 10) {
    leveltwo();
    image (img, ballx+random(10), bally+random(10), ballsize, ballsize);
    //square(ballx+random(10), bally+random(10), ballsize);
  } if (score >= 30) {
    levelthree();
    image (img, ballx+random(20), bally+random(20), ballsize, ballsize);
  } if (score >= 80) {
    levelfour();
    image (img, ballx+random(40), bally+random(40), ballsize, ballsize);
  } if (score >= 100) {
    Gameover()
  }
}
