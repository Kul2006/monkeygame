var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score, ground
var survivalTime

function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
  FoodGroup= new Group()
  obstacleGroup= new Group()
  
}

function setup() {
  createCanvas(670, 400);
  score=0
  survivalTime=0
  
  
  
   monkey=createSprite(80,315,20,20)
  monkey.addAnimation("monkey_running",monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(400,390,900,1)
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  }
function draw() {
  background("lightblue")
  
  if(keyDown("space")&&monkey.y >= 340){
    monkey.velocityY=-10
  }
  monkey.velocityY = monkey.velocityY + 0.3
  monkey.collide(ground)
  
  ground.velocityX = -7 
 ground.x = ground.width/2;
    
 if(World.frameCount%80===0){
    fruits()
 }
  
  if(World.frameCount%300===0){
    stones()
 }
  
 drawSprites()
  
  fill("black")
  var survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime,350,50)
  
}

function fruits(){
  banana=createSprite(670,Math.round(random(120,200)),10,10)
  banana.addImage(bananaImage)
  banana.scale=0.1
  banana.velocityX=-3
  FoodGroup.add(banana)
}

function stones(){
  obstacle=createSprite(670,380,10,10)
  obstacle.addImage(obstaceImage)
  obstacle.velocityX=-4
  obstacle.scale=0.2
  obstacleGroup.add(obstacle)
}