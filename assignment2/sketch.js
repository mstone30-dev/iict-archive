let ballX = 200;
let ballY = 280;
let keeperAngle = 0;
let ballR = 255;
let ballG = 255;
let ballB = 255;
let cloudX = 50;


function setup() {
  createCanvas(400, 400);
}

function draw() {
   background(100, 170, 240);
 
  // 잔디
  fill(50, 200, 50);
  rect(0, 100, 400, 100);
  rect(0, 300, 400, 100);
  fill(30, 150, 30);
  rect(0, 200, 400, 100);


  // 페널티 박스
  noFill();
  stroke(255);
  strokeWeight(4);
  rect(30, 100, 340, 230);
  arc(200, 330, 180, 90, 0, PI);
  rect(80, 100, 240, 100)


  // 골대
  strokeWeight(7);
  line(100, 70, 100, 170);
  line(300, 70, 300, 170);
  line(100, 70, 300, 70);


  // 그물
  strokeWeight(2);
  line(100, 90, 300, 90);
  line(100, 110, 300, 110);
  line(100, 130, 300, 130);
  line(100, 150, 300, 150);
  line(120, 70, 120, 170);
  line(140, 70, 140, 170);
  line(160, 70, 160, 170);
  line(180, 70, 180, 170);
  line(200, 70, 200, 170);
  line(220, 70, 220, 170);
  line(240, 70, 240, 170);
  line(260, 70, 260, 170);
  line(280, 70, 280, 170);
  

  // 골키퍼
  push();
  translate(200, 160);
  rotate(keeperAngle);
  fill(255, 200, 200);
  circle(0, -45, 30);
  fill(127);
  rect(-10, -30, 20, 70);
  strokeWeight(8);
  stroke(255, 200, 200);
  line(-10, -20, -30, -40);
  line(10, -20, 30, -40);
  line(-10, 40, -30, 60);
  line(10, 40, 30, 60);
  pop();


  // 공 출발 지점
  fill(255);
  ellipse(200, 280, 20, 10);

   // 공
  stroke(0);
  strokeWeight(2);
  fill(ballR, ballG, ballB);
  circle(ballX, ballY, 25);
  noStroke();

  // 구름
  fill(255);
  circle(cloudX, 40, 30);
  circle(cloudX + 20, 35, 40); 
  circle(cloudX + 40, 40, 30);
  cloudX = cloudX + 1/8;


  // 왼쪽 현수막
  fill(200, 50, 50);
  rect(10, 60, 80, 30);

  fill(255);
  textSize(12);
  text("Let's Go!", 25, 80);


// 오른쪽 현수막
  fill(50, 50, 200);
  rect(310, 60, 80, 30);

  fill(255);
  textSize(12);
  text("Korea!", 330, 80);
}

function mousePressed(){


  // 공의 도착 위치
  ballX = random(60, 340);
  ballY = random(50, 180);

  // 골키퍼 다이빙
  keeperAngle = random(-1.5, 1.5);
  
  // 공 색깔
  ballR = random(0, 255);
  ballG = random(0, 255);
  ballB = random(0, 255);
}

function keyPressed(){
  if (key == 's'){
    saveCanvas('승부차기_박민석', 'png')
  }
}