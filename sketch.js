function setup() {
  createCanvas(displayWidth/2, displayHeight/2, WEBGL);
  print(displayWidth/2);
  print(displayHeight/2);
  
}

function draw() {
  background(128);  
  translate(-50,0,200)
  rotateX(frameCount * 0.05);  
  strokeWeight(1);
  if (frameCount % 30 == 0){
    fill(random(0,255),random(0,255),random(0,255),random(0,255));
  }  
  box(40, 40, 40);  
  translate(100,0,0)  
  box(40, 40, 40);
  
}
