var star , starImg; 
var rocket , rocketImg;
var backgrnd , backgrndImg;
var asteroid , asteroidImg;
var PLAY =0, END =0, stargrp,asteroidgrp;
var ast1,ast2,ast3,ast4;
var PLAY =0 , END =0;
var score =0;

function preload(){
starImg = loadImage("star.jpg")
rocketImg = loadImage("rocket.png",)
asteroidImg = loadImage ("asteroid.png")
backgrndImg = loadImage ("background.jpeg")


}

function setup() {
createCanvas(600,200)
rocket = createSprite(300,100,20,50)
rocket.addAnimation(rocketImg,"running")
stargrp =createGroup()
asteroidgrp = createGroup()
backgrnd = createSprite(600,200,400,10)
backgrnd.addImage("background",backgrndImg)
backgrnd.y= height/2;
backgrnd.velocityY = -3;



}

function draw() {
 background(180)
text("Score :" + score , 500,50)
 if (gameState === PLAY){
    rocket.velocityY = -3;
if( rocket.isTouching = asteroid){

asteroid.destroyEach()
score= score +5;
}
}
score = score + Math.round(frameCount/60);
    
if (backgrnd.y < 0){
  backgrnd.y =backgrnd.height/2;
}


if(keyDown("space")&& rocket.y >= 100) {
    rocket.velocityY = -13;
}


rocket.velocityY = rocket.velocityY + 0.8


spawnClouds();


spawnObstacles();

if(asteroidgrp.isTouching(rocket)){
    gameState = END;
}

 else if (gameState === END) {
   
 backgrnd.velocityX = 0;
 
 asteroidgrp.setVelocityXEach(0);
 stargrp.setVelocityXEach(0);
}




 spawnAsteroid();
 spawnStar();


drawSprites()

}

function spawnAsteroid(){
if( frameCount % 60===0 ){
var asteroid = createSprite(200,90,20,40)
asteroid.velocityY =4;

var rand = Math.round(random(1,6));
switch(rand) {
  case 1: asteroid.addImage(ast1);
          break;
  case 2: asteroid.addImage(ast2);
          break;
  case 3: asteroid.addImage(ast3);
          break;
  case 4: asteroid.addImage(ast4);
          break;
 
  default: break;
}
asteroid.scale=0.5
asteroidgrp.add(asteroid)
asteroid.lifetme =50; 
}



}

function spawnStar(){

if (frameCount % 60 === 0) {
       star= createSprite(600,100,40,10);
       star.y = Math.round(random(10,60));
       star.addImage(starImg);
       star.scale = 0.5;
    star.velocityX = -3;
       
       star.lifetime = 134;
       
      spawnStar.depth = trex.depth;
       trex.depth = trex.depth + 1;
       
     stargrp.add(star);
}
}
