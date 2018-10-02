function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  background(126,71,191);
  angleMode(DEGREES);
  frameRate(70);
}

function draw() {
  // put drawing code here
  stroke(255,128,112);
  strokeWeight(1);

  // push();
  // translate(width/2,height/2);
  // rotate(frameCount);
  //
  // line(sin(frameCount)*100,cos(frameCount)*100,cos(90)*100,sin(90)*100);
  // pop();

  // push();
  // stroke(255,165,196,90);
  //
  // translate(width/2,height/2);
  // rotate(frameCount);
  //
  // line(180,0,cos(0),sin(0));
  // pop();

  push();
  stroke(255,255,255,20);

  translate(width/2,height/2);
  rotate(frameCount*2);

  line(570,0,cos(0),sin(0));
  pop();



  line(180,0,cos(0),sin(0));
  pop();

  push();
  stroke(255,255,255,30);

  translate(width/2,height/2);
  rotate(frameCount*2);

  line(470,0,cos(0),sin(0));
  pop();



  line(180,0,cos(0),sin(0));
  pop();

  push();
  stroke(255,255,255,40);

  translate(width/2,height/2);
  rotate(frameCount*2);

  line(370,0,cos(0),sin(0));
  pop();










  push();
  stroke(lerpColor(color('#FF8070'), color('#FFD96B'),frameCount/360));

  translate(width/2-100,height/2-100);
  rotate(45);
  rotate(frameCount);
  translate(100, 0);
  rotate(frameCount);
  translate(-100,0);

  line(100,0,cos(90),sin(90));
  pop();




  push();
  stroke(lerpColor(color('#FF8070'), color('#FFD96B'),frameCount/360));

  translate(width/2+100,height/2-100);
  rotate(135);
  rotate(frameCount);
  translate(100, 0);
  rotate(frameCount);
  translate(-100,0);

  line(100,0,cos(90),sin(90));
  pop();


  push();
  stroke(lerpColor(color('#FF8070'), color('#FFD96B'),frameCount/360));

  translate(width/2+100,height/2+100);
  rotate(-135);
  rotate(frameCount);
  translate(100, 0);
  rotate(frameCount);
  translate(-100,0);

  line(100,0,cos(90),sin(90));
  pop();




  push();
  stroke(lerpColor(color('#FF8070'), color('#FFD96B'),frameCount/360));

  translate(width/2-100,height/2+100);
  rotate(-45);
  rotate(frameCount);
  translate(100, 0);
  rotate(frameCount);
  translate(-100,0);

  line(100,0,cos(90),sin(90));
  pop();




  if (frameCount == 360) {
    noLoop();
  }





}
