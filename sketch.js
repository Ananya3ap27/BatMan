const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var dropImg,umbImg,drop,umb,dropNo,BruceImg,Bruce,t1,t2,t3,t4,drops=[],n,thunderImage,drop2,drops2=[],drop3,drops3=[];

function preload()
{
    
    t1=loadImage("images/thunderbolt/1.png");
    t2=loadImage("images/thunderbolt/2.png");
    t3=loadImage("images/thunderbolt/3.png");
    t4=loadImage("images/thunderbolt/4.png");
}

function setup() {
	createCanvas(1000, 1000);

    engine = Engine.create();
    world = engine.world;

    umb=new Umbrella(500,800);
    thunderImage=createSprite(500,100,1,1);
}

function draw(){
    if(frameCount%1===0){
        drop=new Drop(random(0,1000),0);
        drops.push(drop);
        drop2=new Drop(random(0,1000),0);
        drops2.push(drop2);
        drop3=new Drop(random(0,1000),0);
        drops3.push(drop3);
       }
       background(0);
      Engine.update(engine);
      for(var i=0; i<drops.length;i++){
      drops[i].display();
      drops2[i].display();
      drops3[i].display();
}   
umb.display();
getThunder();
drawSprites();
}
function getThunder(){
    
    if(frameCount%50<25&&frameCount%50>0){
        thunderImage.visible=true;
    }else{
        thunderImage.x=random(100,800);
        thunderImage.visible=false;
    }
    if(thunderImage.visible===false){
        n=Math.round(random(1,4));
    }
    if(n===1){
        thunderImage.addImage(t1);
    }
    if(n===2){
        thunderImage.addImage(t2);
    }
    if(n===3){
        thunderImage.addImage(t3);
    }
    if(n===4){
        thunderImage.addImage(t4);
    }

}
