class Ball{
constructor(x,y,radius){
    var options = {
        isStatic:false,
        restitution: 0.3,
        friction:0.5,
        density:1.2
    }
    this.body = Bodies.circle(x,y,radius,options)
    this.radius = radius*2;
    World.add(world,this.body)
}
display(){
    var pos = this.body.position;
    ellipseMode(CENTER)
    fill(255)
    ellipse(pos.x,pos.y,this.radius)
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
}
}