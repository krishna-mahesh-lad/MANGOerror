
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var grnd, treee;
var boiImg, boi;
var m1,m2,m3,m4,m5,m6,m7,m8;
var elastic, slingshot;

function preload()
{
	boiImg = loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	grnd = new Ground (400,680,1000,50);

	treee = new Tree (540,390,520,600);

	m1 = new Mango (590,160,50);
	m2 = new Mango (750,290,50);
	m3 = new Mango (475,215,50);
	m4 = new Mango (370,290,45);
	m5 = new Mango (450,340,45);
	m6 = new Mango (555,270,50);
	m7 = new Mango (675,245,50);
	m8 = new Mango (635,320,50);

	rock = new Stone (95,560,50);

	boi = createSprite (150,615);
	boi.addImage (boiImg);
	boi.scale = 0.1;

	slingshot = new Elastic(boi.body,{x:200, y:100});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  Engine.update(engine);

  grnd.display();
  treee.display();
  boi.display();
  rock.display();

  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  m8.display();

  slingshot.display();

  drawSprites();
 
}



