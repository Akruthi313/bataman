const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var thunder,batman,walk;
var engine,world;
var maxDrops=150;
var drops=[];
var Thunder;
var thund1,thund2,thund3,thund4;
var thunderCreatedFrame = 0;


function preload(){
    thund1=loadImage("images/thunderbolt/1.png");
    thund2=loadImage("images/thunderbolt/2.png");
    thund3=loadImage("images/thunderbolt/3.png");
    thund4=loadImage("images/thunderbolt/4.png");
    walk=loadAnimation("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png",
    "images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png",
    "images/Walking Frame/walking_5.png","images/Walking Frame/walking_6.png",
    "images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png");
    
}

function setup(){
   createCanvas=(400,500);

    engine = Engine.create();
    world = engine.world;

   batman=createSprite(200,270);
   batman.addAnimation("walking",walk);
   batman.scale=0.35;

   umbrella= new Umbrella(210,230);
   
   for(var i=0;i<maxDrops;i++){
        var drop=new Raindrop(random(0,400),random(-400,0));
        drops.push(drop);
   }


    
}

function draw(){
    Engine.update(engine);
    background(0);
  
    
    rand = Math.round(random(1,4));
    if(frameCount%80 === 0){
        thunderCreatedFrame = frameCount;
       Thunder = createSprite(random(10,370), random(10,30), 10, 10);
       switch(rand){
           case 1: Thunder.addImage(thund1);
           break;
           case 2: Thunder.addImage(thund2);
           break; 
           case 3: Thunder.addImage(thund3);
           break;
           case 4: Thunder.addImage(thund4);
           break;
           default: break;
           
       }

       
       Thunder.scale = 0.4;
   }
   
   if(thunderCreatedFrame + 10 === frameCount && Thunder){
       Thunder.destroy();
   }
   

    for(var i=0;i<maxDrops;i++){
        drops[i].display();
        drops[i].update();
   }

   

   
   drawSprites();
    
}   

