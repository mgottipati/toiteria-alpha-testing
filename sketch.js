var entity;
var entityimg;
var entityrunimg1;
var entityrunimg2;
var entityrunimg3;
var entityRun
var entityRun2
var entityBack
var Icesword
var firesword
var swordofdestruction
var junglesword
var longsword
var ironsword
var woodensword
var watersword
var temporarybackround

function preload(){
  entityimg = loadAnimation("entitymainguy.png");
  entityRun = loadAnimation("entitymainrun1.png","entitymainrun2.png","entitymainrun3.png");
  entityRun2 = loadAnimation("entitymainrun11.png","entitymainrun12.png","entitymainrun13.png");
  entityBack = loadAnimation("entityback.png");
  Icesword = loadImage("icysword.png");
  firesword = loadImage("swordofflame.png")
  swordofdestruction = loadImage("swordofdestruction.png")
  junglesword = loadImage("Junglesword.png")
  longsword = loadImage("Longsword.png")
  ironsword = loadImage("ironsword.png")
  woodensword = loadImage("Woodensword.png")
  watersword = loadImage("swordofwater.png")
  temporarybackround = loadImage("temporaryvillagebackround.png")

  
}


function setup(){
  
  createCanvas(1393,700);
 
  entity = createSprite(420,640,100,100);
entity.addAnimation("entitymainguy.png",entityimg);
entity.addAnimation("b",entityRun2)
entity.addAnimation("a",entityRun);
entity.addAnimation("c",entityBack)
entity.scale = 0.2;
// enemy's health bar
// enemy AI
// sword damage
// protagonist's health bar
// more enemy images

}




function draw() {
  background(temporarybackround);

drawSprites();
if(keyDown(RIGHT_ARROW)){
  entity.x = entity.x+5
entity.changeAnimation('a');
}
else{
  entity.changeAnimation('entitymainguy.png')
}
if(keyDown(LEFT_ARROW)){
  entity.x = entity.x-5
entity.changeAnimation('b');
}
if(keyDown(UP_ARROW)){
  entity.y = entity.y-5
entity.changeAnimation('c');
}
if(keyDown(DOWN_ARROW)){
  entity.y = entity.y+5
entity.changeAnimation('entitymainguy.png');

}
if(keyDown("r")){
  entity
}
}