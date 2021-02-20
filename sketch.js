var sword
var swordImage;

var PLAY=1;
var END=0;
var gamestate=1;

var score=0;

var fruitGroup;
var enemyGroup;

var gameoverimage;

function preload(){

  
swordimage=loadImage("sword.png");

monsterImage=loadAnimation("alien1.png", "alien2.png");

fruit1=loadImage("fruit1.png");

fruit2=loadImage("fruit2.png");

fruit3=loadImage("fruit3.png");

fruit4=loadImage("fruit4.png");

gameoverimage=loadImage("gameover.png");

}

function setup(){

createCanvas(750,600)

sword = createSprite(40, 200, 20, 20);
sword.addImage(swordimage);
sword.scale=0.7;
  
fruitGroup=new Group();

enemyGroup=new Group();
  
}

function draw(){

background("lightblue");

if(gamestate===PLAY){
   
   


sword.x=World.mouseX;
sword.y=World.mouseY;

fruits();
enemy();

if(fruitGroup.isTouching(sword)){
score=score+2;
fruitGroup.destroyEach();
}
  
if(enemyGroup.isTouching(sword)){
fruitGroup.destroyEach();
enemyGroup.destroyEach();
gamestate=END;
}  
}
  
if(gamestate===END){
sword.addImage(gameoverimage);

}

drawSprites()
  
text("score: "+score, 400, 50);
}

function fruits(){
if(World.frameCount%80===0){
fruit=createSprite(0, 200, 20, 20);
fruit.scale=0.2;
r=Math.round(random(1,4));
if(r==1){
fruit.addImage(fruit1);
}
  
else if(r==2){
fruit.addImage(fruit2);
}

else if(r==3){
fruit.addImage(fruit3);
}

else{
fruit.addImage(fruit4);
}
  
fruit.y=Math.round(random(50,340));
fruit.velocityX=7.
fruit.setLifeTime=100;
fruitGroup.add(fruit);
}

}

function enemy(){
if(World.frameCount%200===0){
monster=createSprite(600, 200, 20, 20);
monster.addAnimation("moving", monsterImage);
monster.y=Math.round(random(100,300))
monster.velocityX=-8;
monster.setLifeTime=50;

enemyGroup.add(monster);
  
}

}