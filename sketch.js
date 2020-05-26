const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2;
var ground;

function setup() {
  createCanvas(5000,1600);

  engine = Engine.create();
  world = engine.world;

  stroke("red");
  box1 = new Box(width/2, 1000,500,800);
  box2 = new Box(width/2, 424,250,350);
  box3 = new Box(width/2 - 600, 1100, 200,box1.height - 200 );
  box4 = new Box(width/2 + 600, 1100, 200,box1.height - 200 );
  box5 = new Box(width/2 - 375, 900,247,1000);
  box6 = new Box(width/2 + 375, 900,247,1000);
  box7 = createSprite(width/2, 800, 150, 150);
  box7.shapeColor = color("white");
  box8 = createSprite(width/2- 370, 1000, 100, 100);
  box9 = createSprite(width/2+ 370, 1000, 100, 100);
  box10 = createSprite(width/2- 370, 600, 100, 100);
  box11 = createSprite(width/2+ 370, 600, 100, 100);
  box12 = createSprite(width/2- 600, 1050, 100, 100);
  box14 = createSprite(width/2+ 600, 1050, 100, 100);
  box13 = createSprite(width/2, 1205, 100, 150);
  box13.scale = 2.5;
  box13.shapeColor = color("white");
  box15 = createSprite(width/2 + 600,500,10,600 );
  box15.shapeColor = color("brown");  
  box16 = createSprite(width/2 - 600,500,10,600 );
  box16.shapeColor = color("brown");
  box17 = createSprite(width/2 - 600  + 120,200,250,150);
  box17.shapeColor = color("red");
  box18 = createSprite(width/2 + 600  + 120,200,250,150);
  box18.shapeColor = color("red");
  box19 = createSprite(width/2, 1400,5000,50);
  box19.shapeColor = color("green")
  box20 = createSprite(width/2,1500, 5000,200);
  box20.shapeColor = color("brown");
}

function draw() {
  background("yellow");  

  Engine.update(engine);

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box14.display();

  drawSprites();
}