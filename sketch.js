var path
var pathImage
var runner, runner_image;
var invisibleBoundary1
var invisibleBoundary2
function preload(){
  //pre-load images
  pathImage = loadImage("path.png");
  runner_image = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here

  //Create Path
  path = createSprite(200, 200, 400, 400);
  path.addImage(pathImage);
  path.velocityY=4;
  path.scale=1.2;

  //Create Runner
  runner = createSprite(200, 360, 10, 10);
  runner.addAnimation("Running", runner_image)
  runner.scale = 0.05

  //Create Invisible Boudaries
  invisibleBoundary1 = createSprite(35, 200, 20, 400)
  invisibleBoundary1.visible=false
  invisibleBoundary2 = createSprite(370, 200, 20, 400)
  invisibleBoundary2.visible=false
}

function draw() {
  background(0);
if (path.y > 400) {
  path.y = path.height/2
}

runner.x = World.mouseX
runner.collide(invisibleBoundary1)
runner.collide(invisibleBoundary2)
drawSprites()
}
