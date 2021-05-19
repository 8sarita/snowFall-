// name spacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
const Events= Matter.Events;

//creating var 
var engine, world;
var backgroundImg;

var character,characterImg;
var snow1,snow;
var snow1=[];
var snow2=[];
var bg= "snow1.jpg";


function preload() {
  //loading images
  getBackgroundImg();

  characterImg=loadImage("character.gif");
}
function setup() {

  createCanvas(800,400);

  engine = Engine.create();
    world = engine.world; 

    //creating character which can move right and left
  character =createSprite(400, 200, 50, 50);
  character.addImage(characterImg);
  character.scale=0.4;

  invisibleGround=createSprite(400,400,800,6);
  invisibleGround.visible=false;

}

function draw() {
  //giving background
  if(backgroundImg)
  background(backgroundImg);  

 //updating engine 
  Engine.update(engine);

  //giving move right and left to character

  character.velocity.y = character.velocity.y+0.5;
  
  if(keyDown("left")){
    character.x= character.x-15;
  }
  if(keyDown("right")){
    character.x= character.x+15;
  }
  if(keyDown("up")){
    character.y = character.y-15;
  }
  
 
  //adding condition when framecount 8 then make new snow1 and 2
  if(frameCount % 8===0){
    
    snow1.push(new Snow(random(10,800),0,50,50));
  }

  if(frameCount % 20===0){
    
    snow2.push(new Snowsec(random(10,800),0,50,50));
  }
  
  //displaying snow 1 and 2
  for(var i=0; i< snow1.length; i++){
    snow1[i].display();
  }
  for(var k=0; k< snow2.length; k++){
    snow2[k].display();
  }

  character.collide(invisibleGround);

  drawSprites();
}

 async function getBackgroundImg(){

  //setting background for different backgrounds in different hours
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=16){
      bg = "snow1.jpg";
  }
  else if(hour>= 16 && hour<= 23){
      bg = "snow3.jpg";   
  }
  else{
      bg = "snow2.jpg";
  }
 
  //loading image of background which we have created a var bg and load background
  backgroundImg = loadImage(bg);
}
