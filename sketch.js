var square_1;
var square_2;

function setup() {
  createCanvas(800,400);
  square_1=createSprite(400, 200, 100, 50);
  square_1.debug=true;
  square_2=createSprite(200, 200, 50, 100);
  square_2.debug=true;
}

function draw() {
  background(255,255,255);  
  square_2.velocityX=3;
  square_1.velocityX=-3;

bounceOff(square_1, square_2)

  drawSprites();
}






function bounceOff(object1, object2)
{
if(object2.x-object1.x==object1.width/2+object2.width/2&&object1.x-object2.x==object1.width/2+object2.width/2)
{
  object1.velocityX=object1.velocityX*(-1);
  object2.velocityX=object2.velocityX*(-1);
}
if(object2.y-object1.y==object1.height/2+object2.height/2&&object1.y-object2.y==object1.height/2+object2.height/2)
{
  object1.velocityY=object1.velocityY*(-1);
  object2.velocityY=object2.velocityY*(-1);
}
}