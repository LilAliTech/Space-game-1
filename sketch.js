var ufo;
var Asteroid;
var Background;
var Rlauncer;
var SpaceShip;
var GameState = "Play";
var score = +1;

function preload(){
  ufo = loadImage("Images/ufo1.png");
  Asteroid = loadImage("Images/Asteroid.png");
  Rlauncer = loadImage("Images/Rlauncher.png");
  spaceShip = loadImage("Images/SpaceShip.png");
  Background = loadImage("Images/Background.png");
}

function setup() {
  createCanvas(1000,600);
  SpaceShip = createSprite(400, 470, 50, 50);
  SpaceShip.addImage(spaceShip);
  SpaceShip.scale = 0.3;

  
}

function draw() {
  background(Background); 
  
 if (GameState === "Play"){
   spawnObstacles();
  if (keyDown(LEFT_ARROW)){
    SpaceShip.x = SpaceShip.x-4;
  }

  if(keyDown(RIGHT_ARROW)){
    SpaceShip.x = SpaceShip.x+4;
  }




  }
  drawSprites();
}



function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    //obstacle.debug = true;
    obstacle.velocityY = (6);
    obstacle.x = Math.round(random(200,800));

    //generate random obstacles
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: obstacle.addImage(Asteroid);
      obstacle.scale = 0.0500;
              break;
        
      case 2: obstacle.addImage(ufo);
      obstacle.scale = 0.1;
              break;
    }
  }
}



function Rlauncer2(){
  Rlauncer1 = createSprite(200,500,40,40);
  Rlauncer1.addImage(Rlauncer);
}