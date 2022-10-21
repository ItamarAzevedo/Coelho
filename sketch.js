const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope
var fruta





function setup() 
{
  createCanvas(500,700)
  frameRate(80);


  engine = Engine.create();
  world = engine.world;

  
  ground = new Ground(200,690,600,20);
  

  rope= new Rope(7,{x:275,y:30})

  var options={
    density:0.001
  }
 
  fruta=Bodies.circle(320,300,30,options)
  Matter.Composites.add(rope.body,fruta)
   rectMode(CENTER);
   ellipseMode(RADIUS);
   textSize(50)
  
}

function draw() 
{
  background(51);
  
  rope.show()
  Engine.update(engine);
  ground.show();
 

  drawSprites();

}