
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var box1,box2,box3;
var gr;

function preload()
{
	
}

function setup() {
	createCanvas(800,700);

	engine = Engine.create();
	world = engine.world;

  
	//Create the Bodies Here.
  paper1 = new ball(100,300,15);

  ground1 = new Ground(400,680,800,20);

  box1 = new Dustbin(630,660,180,20);
  box2 = new Dustbin(530,620,20,100);
  box3 = new Dustbin(730,620,20,100);
 
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(0);

  Engine.update(engine);

  paper1.display();
  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  

 
  keyPressed();
  
  drawSprites();
 
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
   Matter.Body.applyForce(paper1.body,paper1.body.position,{x:145,y:-145});
     
   }
 }
 



