const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,ground;

function setup(){
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(400,300,50,70);
  box2 = new Box(420,200,60,40);
  ground = new Ground(400,380,800,20);
}

function draw(){
  background("black");
  Engine.update(engine);
  box1.display();
  box2.display();
  ground.display();
}