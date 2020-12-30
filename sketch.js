var recta, squarea;
var square1, square2;

function setup() {
  createCanvas(1200,800);
 recta = createSprite(400, 100, 50, 80);
 recta.shapeColor = "green";
 recta.debug = true;
  squarea = createSprite(400, 800,80,30);
  squarea.shapeColor = "green";
  squarea.debug = true;

  squarea.velocityY = -5;
 recta.velocityY = +5;
 square1 = createSprite(200,300,50,50);
 square1.debug = true;
 square2 = createSprite(200,700,50,50);
 square2.debug = true;

 square1.velocityY = 2;
 square2.velocityY = -2;

}

function draw() {
  background(0,0,0);  
  bounceAlgo(recta,squarea);
  bounceAlgo(square1,square2);
  
  drawSprites();
}







