
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5
var sling1,sling2,sling3,sling4,sling5

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth/2, windowHeight/1.5);
	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixelDensity();
	let options = {
      mouse: canvasmouse
	};

	mConstraint = MouseConstraint.create(engine,options);
	World.add(world, mConstraint);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Pendulum(0,500,'gray');
	bob2 = new Pendulum(200,500,'gray');
	bob3 = new Pendulum(400,500,'gray');
	bob4 = new Pendulum(600,500,'gray');
	bob5 = new Pendulum(800,500,'gray');

	sling1 = new Sling(bob1.body,{x:0, y:200})
	sling2 = new Sling(bob2.body,{x:200, y:200})
	sling3 = new Sling(bob3.body,{x:400, y:200})
	sling4 = new Sling(bob4.body,{x:600, y:200})
	sling5 = new Sling(bob5.body,{x:800, y:200})


	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);
  Engine.update(engine);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

  
  drawSprites();
 
}

function mouseDragged() {
	Matter.Body.setPosition(pendulum1.body, { x: mouseX, y: mouseY });
  }

