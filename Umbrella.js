class Umbrella{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.image=loadImage("images/Walking Frame/walking_1.png");
        this.body=Bodies.circle(x,y,70,options);
        World.add(world,this.body);
        this.x=x;
        this.y=y;

    }
    display(){
        var pos=this.body.position;
        image(this.image,pos.x-100,pos.y-100,170,170);
    }
}