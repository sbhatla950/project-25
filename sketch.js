
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin;
var paper;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	dustbin = new Dustbin(700, 590);
	paper = new Paper (50, 500, 35);
	ground = new Ground (width/2, 650, width, 10 );

	//Create the Bodies Here.


	Engine.run(engine);
  

}


function draw() {
  rectMode(CENTER);
  background(255);
  ground.display();
  paper.display();
  dustbin.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x : 245, y : -245});
	}
}



