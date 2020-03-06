function setup() {
	//createCanvas(400, 400);
	capture = createCapture(VIDEO);
	capture.size(400, 400);


	createCanvas(400, 400, WEBGL);  
	console.log('ml5 version:', ml5.version);
  
}

function draw() {
	background(128);  
	translate(-50,0,200);
	rotateX(frameCount * 0.05);  
	strokeWeight(1);
	if (frameCount % 30 == 0){
	fill(random(0,255),random(0,255),random(0,255),random(0,255));
	}  
	box(40, 40, 40);  
	translate(100,0,0);  
	box(40, 40, 40);
  
}


