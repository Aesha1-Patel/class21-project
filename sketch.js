
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var engine;
var world;

function preload()
{
	
}

function setup() {
	engine=Engine.create();
	world=engine.world;
	createCanvas(1100, 500);


	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	ground=new Ground(550,480,1100,20);
	leftWall=new Ground(760,435,20,75);
	rightWall=new Ground(890,435,20,75);
	var options={
		restitution:0.3,
		friction:0,
		isStatic:false,
		density:1.2
	}
	fill (255);
	ball=Bodies.circle(100,50,15,options);
	World.add(world,ball);
	rectMode(CENTER);
  	ellipseMode(RADIUS);
	  
}


function draw() {
  
  background(0);
  ellipse(ball.position.x,ball.position.y,15);
  ground.display();
  leftWall.display();
  rightWall.display();
  Engine.update(engine);
 
}
function keyPressed() {
	if (keyCode==RIGHT_ARROW){
Matter.Body.applyForce(ball, {x:0,y:0}, {x:40,y:-40})
	}}