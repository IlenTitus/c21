
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options={
isStatic : false,
restituition:0.3,
friction:0,
density:1.2

}
ball= Bodies.circle(260,100,20,ball_options)
World.add(world,ball)
	Engine.run(engine);
  ground=new Ground(width/2,670,width,20)
  leftSide=new Ground(1100,600,20,120)
  rightSide=new Ground(1350,600,20,120)
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ellipse(ball.position.x,ball.position.y,20)
 ground.display()
 leftSide.display()
 rightSide.display()
}

function keyPressed() {
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
}	
}

