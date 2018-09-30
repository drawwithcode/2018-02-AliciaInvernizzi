function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  background(126,71,191);
  angleMode(DEGREES);
  frameRate(60);
}

function draw() {
  // put drawing code here
  stroke(255,128,112);
  strokeWeight(1);

  push();
  translate(width/2,height/2);
  rotate(frameCount);

  line(sin(frameCount)*280,cos(frameCount)*280,cos(90)*280,sin(90)*280);
  pop();

  // push();
  // stroke(lerpColor(color('#ffd96b'), color('#ffa5c4'),frameCount/360));
  // translate(width/2,height/2-50);
  // rotate(frameCount);
  // translate(-200,0);
  // line(sin(frameCount)*150,cos(frameCount)*150,cos(90)*150,sin(90)*150);
  // pop();


  if (frameCount == 360) {
    noLoop();
  }


}
