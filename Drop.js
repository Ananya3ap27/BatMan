class Drop{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.1,
            friction:0.1
        }
        this.body=Bodies.circle(x,y,5,options);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        fill("blue");
        ellipse(0,0,10,10);
        pop();
    }
}