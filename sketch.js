var hours;
var minutes;
var seconds;
var clockImage;
var clock;
function preload(){
  clockImage=loadImage("clock.jpg")
}
function setup() {
  angleMode(DEGREES)
  createCanvas(400,400);
  clock=createSprite(0,0,200,200)
  clock.addImage(clockImage)
  clock.scale=2
}

function draw() {
  background(255);  
  translate(200,200)
  rotate(-90)
  drawSprites();
  hours = hour()
  minutes = minute()
  seconds = second()
  console.log(hours)
  scAngle = map(seconds,0,60,0,360)
  hrAngle = map(hours%12,0,12,0,360)
  minAngle = map(minutes,0,60,0,360)
  push()
  rotate(scAngle)
  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,100,0)
  pop()
  push()
  rotate(hrAngle)
  stroke(0,255,0)
  strokeWeight(7)
  line(0,0,25,0)
  pop()
  push()
  rotate(minAngle)
  stroke(0,0,255)
  strokeWeight(7)
  line(0,0,50,0)
  pop()
}