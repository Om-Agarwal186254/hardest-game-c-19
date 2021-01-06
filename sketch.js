
var monkey , monkey_running
var banana ,bananaImg, obstacle, obstacleImage,b
var FoodGroup, obstacleGroup
var score
var PLAY=1,END=0,gameState

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImg = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 
  
  // monkey
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving_monkey",monkey_running)
  monkey.scale=0.1
  
  // ground
  ground=createSprite(400,350,900,10)
  ground.velocityX=-6
  
  //ground:co-ordinates
  console.log(ground.x)
  
  //score
  score=0
    // group
  FoodGroup=createGroup()
  obstacleGroup=createGroup()
  
   
}



function draw() {
background("lightblue")
  
  
  //collide
  monkey.collide(ground)
  if(gameState===PLAY){
    
    // score
  score=Math.ceil(frameCount/frameRate())  
    
  //infinite ground
  if(ground.x<0){
    ground.x=ground.width/2
  }
    
  //
  stroke("black")
  textSize(24)
  fill("black")
    
  // jump
  if(keyDown("space")&& monkey.y >= 210){
  monkey.velocityY=-12
  }
    
  // gravity
   monkey.velocityY=monkey.velocityY+0.8 
    
  //calling
  bananas()
  OBSTACLE()
  
  }else if(gameState===END){
  // dumb
    if(obstacleGroup.isTouching(monkey)){
      monkey.velocityX=0
    ground.velocityX=0
    obstacleGroup.setVelocityXEach(0);
     FoodGroup.setVelocityXEach(0);
     FoodGroup.setLifetimeEach(-1);
    obstacleGroup.setLifetimeEach(-1)
      
  }
  }
  
  
  
  
  
 
  
  drawSprites()
  text("Survival Time:"+score,100,50)
}
function bananas(){
  if(World.frameCount%80===0){
    banana = createSprite(200,315,20,20)
    banana.y=Math.round(random(150,200))
    banana.scale=0.1
    banana.addImage(bananaImg)
    banana.velocityX=-4
    banana.lifetime=150
    FoodGroup.add(banana)
  }
}
function OBSTACLE(){
  if(World.frameCount%100===0){
    obstacle = createSprite(420,330,20,20)
    obstacle.x=Math.round(random(150,200))
    obstacle.scale=0.1
    obstacle.addImage(obstacleImage)
    obstacle.velocityX=-2
    obstacle.lifetime=150
    obstacleGroup.add(obstacle)
  }
}





