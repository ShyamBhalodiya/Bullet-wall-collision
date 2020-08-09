//Sprite variable
var bullet, wall;

//Quantity variable
var speed, weight, thickness, destruction;

function setup() {
  createCanvas(800, 400);

  //speed and weight
  speed = random(223, 321);
  weight = random(30, 52);

  //thickness
  thickness = random(22, 83);

  //bullet
  bullet = createSprite(200, 200, 50, 20);
  bullet.velocityX = speed;
  bullet.shapeColor = color(225, 225, 225);

  //wall
  wall = createSprite(700, 200, thickness, height / 2);

}

function draw() {
  background(0);

  if (hascollided(bullet, wall)) {
    bullet.velocityX = 0;
    destruction = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
    if (destruction > 10) {
      wall.shapeColor = color(255, 0, 0);
    }
    if (destruction < 10) {
      wall.shapeColor = color(0, 255, 0);
    }
  }
  textSize(18);
  fill("white");
  text("Destruction - " + round(destruction), 100, 20);
  console.log(destruction);
  drawSprites();
}

function hascollided(object1, object2) {
  Object1RightEdge = object1.x + bullet.width;
  Object2LeftEdge = object2.x - object2.width;
  if (Object1RightEdge > Object2LeftEdge) {
    return true;
  }
  else {
    return false;
  }
}