var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg");
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
  var score=0;
}

function draw() {
  background(bg);
  fill("white")
  textSize(20)
  text("Score: "+ score, 450,50);
  clues();
  security.display();

  if(score === 3){
   clear()
   background(bg2)
   fill("black")
   textSize(40)
   text("TREASURE UNLOCKED",250,200)
  }

  




  drawSprites()
}