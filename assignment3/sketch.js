let reaction = false;
let result = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);


  // 벽
  fill(200, 190, 200);
  rect(0, 0, 400, 280);

  
  // 선반
  fill(100, 50, 50);
  rect(30, 70, 105, 10);


  // 약병
  fill(100, 170, 100);
  rect(40, 45, 20, 25);
  rect(45, 40, 10, 5);

  fill(170, 100, 100);
  rect(70, 20, 10, 50);
  rect(70, 15, 10, 5);

  fill(100, 100, 170);
  triangle(85, 70, 125, 70, 105, 40);
  rect(100, 15, 10, 40);


  // 실험대
  fill(100, 50, 50);
  rect(0, 280, 400, 120);
  fill(130, 100, 70);
  rect(0, 275, 400, 15);


  // 벽 디자인
  noFill();
  stroke(130, 100, 70);
  strokeWeight(4);

  ellipse(300, 80, 130, 130);
  ellipse(300, 80, 105, 105);
  triangle(255, 105, 345, 105, 300, 28);
  triangle(255, 55, 345, 55, 300, 132);
  
  strokeWeight(1);
  stroke(0);
  textSize(20);
  text("I need Gold...", 20, 150);


  // 접시
  fill(225);
  ellipse(70, 283, 60, 15);


  // 솥
  strokeWeight(4);
  line(140, 215, 120, 200);
  line(260, 215, 280, 200);
  fill(0);
  stroke(30);
  strokeWeight(3);
  arc(200, 185, 150, 120, 0, PI);
  ellipse(200, 185, 150, 30);


  // 평소 액체
  if (reaction == false) {
    noStroke();
    fill(50, 170, 50);
    ellipse(200, 185, 130, 20);
  }

  // 금
  if (reaction == true && result < 0.1) {

    // 금빛 물
    noStroke();
    fill(220, 170, 40);
    ellipse(200, 185, 130, 20);


    // 금괴
    stroke(160, 110, 20);
    strokeWeight(2);
    fill(230, 170, 30);
    quad(155, 180, 190, 180, 185, 165, 160, 165);
    quad(180, 175, 220, 175, 215, 155, 185, 155);
    quad(210, 180, 245, 180, 240, 165, 215, 165);
    noStroke();
    fill(255, 230, 120);
    quad(185, 155, 215, 155, 210, 160, 190, 160);
    quad(160, 165, 185, 165, 180, 170, 165, 170);
    quad(215, 165, 240, 165, 235, 170, 220, 170);


    // 반짝이
    stroke(230, 170, 30);
    strokeWeight(2);
    line(165, 135, 165, 155);
    line(155, 145, 175, 145);
    line(225, 110, 225, 130);
    line(215, 120, 235, 120);
  }

  // 검은 돌
  

  if (reaction == true && result >= 0.1) {

    // 검은 물
    noStroke();
    fill(30);
    ellipse(200, 185, 130, 20);


    // 돌
    fill(70);
    ellipse(170, 175, 35, 25);
    ellipse(200, 165, 45, 30);
    ellipse(235, 175, 35, 25);
    noStroke();
    fill(127);
    ellipse(165, 170, 10, 5);
    ellipse(195, 160, 10, 5);
    ellipse(230, 170, 10, 5);


    // 연기
    fill(90);
    ellipse(210, 125, 25, 25);
    ellipse(200, 100, 20, 20);
    ellipse(210, 75, 15, 15);
    ellipse(205, 50, 10, 10);
  }


// 가스레인지 몸체
  stroke(40);
  strokeWeight(3);
  fill(90);
  rect(140, 255, 100, 20);
  quad(140, 255, 240, 255, 255, 245, 155, 245);
  quad(240, 255, 255, 245, 255, 275, 240, 275);

  // 앞쪽 손잡이
  fill(40);
  ellipse(190, 265, 20, 10);


  // 마우스를 버너 위에 올렸을 때

  if (mouseX > 140 && mouseX < 240 && mouseY > 235 && mouseY < 275 &&
      reaction == false) {

    // 불꽃
    noStroke();
    fill(100, 100, 200);
    triangle(170, 245, 175, 225, 180, 245);
    triangle(180, 245, 185, 220, 190, 245);
    triangle(190, 245, 200, 210, 205, 245);
    triangle(205, 245, 215, 220, 220, 245);
    triangle(220, 245, 225, 230, 230, 245);
    fill(120, 200, 255);
    triangle(180, 245, 185, 230, 190, 245);
    triangle(195, 245, 200, 220, 205, 245);
    triangle(210, 245, 215, 230, 220, 245);


    // 연기
    fill(170);
    ellipse(185, 155, 15, 15);
    ellipse(195, 135, 20, 20);
    ellipse(190, 115, 15, 15);
    ellipse(200, 95, 20, 20);
    ellipse(210, 75, 15, 15);

    // 가스레인지 손잡이
    fill(200, 50, 50);
    ellipse(190, 265, 20, 10);
  }

  // 설명

  noStroke();
  textSize(15);

  if (reaction == false) {
    fill(255);
    text("Click the burner", 140, 330);
  }

  if (reaction == true && result < 0.1) {
    fill(255, 255, 0);
    text("Gold!!!", 160, 330);
  }

  if (reaction == true && result >= 0.1) {
    fill(255);
    text("Stone...", 160, 330);
  }
}


// 버너 클릭 시
function mousePressed() {

  if (mouseX > 140 && mouseX < 240 && mouseY > 235 && mouseY < 275) {
    reaction = true;
    result = random(0, 2);
  }
}


// 초기화
function keyPressed() {
  reaction = false;
  result = 0;
}