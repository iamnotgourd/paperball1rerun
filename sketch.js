
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;
	

	ball = new Ball(300,300,20);
	ground = new Ground(600,height,1200,20);
	dustbinBottom = new Dustbin(990,685,200,10);
	dustbinLeft = new Dustbin(895,630,10,100);
	dustbinRight = new Dustbin(1085,630,10,100);



	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background(0);
 
  ground.display()
  ball.display();
  dustbinBottom.display();
  dustbinLeft.display();
  dustbinRight.display();
  keyPressed();
  drawSprites();

}
function keyPressed(){
     if(keyCode === UP_ARROW){
		 Matter.body.applyForce(ball.body,ball.body.position,{x:200,y:-85})
	 }

}



