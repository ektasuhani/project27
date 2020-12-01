
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  bob = new Bob(200,100);
  bob1 = new Bob(250,100);
  bob2 = new Bob(300,100);
  bob3 = new Bob(350,100);
  bob4 = new Bob(400,100);
rope = new Rope(bob.body,{x:300,y:50});
rope1 = new Rope(bob1.body,{x:350,y:50});
rope2 = new Rope(bob2.body,{x:400,y:50});
rope3 = new Rope(bob3.body,{x:450,y:50});
rope4 = new Rope(bob4.body,{x:500,y:50});
  ground = new Ground(400,50,600,20);
}


function draw() {
  rectMode(CENTER);
  background("red");
  
  drawSprites();
  bob.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();

  ground.display();
 rope.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 
}
function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce( bob.body,bob.body.position,{x:-50,y:-50});
  }
}



