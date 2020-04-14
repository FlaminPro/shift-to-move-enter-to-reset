
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;

function setup() {
  createCanvas(500,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options={
    isStatic : true
  }


  var options={
    isStatic: true
  }

  ground = Bodies.rectangle(200,370,400,20,options)
  World.add(world,ground);

holder = Bodies.rectangle(200,140,200,20,options);
World.add(world,holder);

var balloptions = {

  restitution : 1.0,
  density : 1.0

}
ball  = Bodies.circle(220,240,40,options);
World.add(world,ball);
var options = {
  bodyA : ball,
  bodyB : holder,
  stiffness: 0.004,
  length : 100
}
var string = Constraint.create(options);
World.add(world,string);
fill("WHite");
text("Press shift to oscillate the pendulam  with mouse",10,40);
}

function draw() {
  background(0); 
  Engine.update(engine);

  
  
  fill ("blue");
rectMode(CENTER);
rect(holder.position.x,holder.position.y,200,20);
fill(0);
rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);
fill("blue");
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,40);   
strokeWeight(8);
stroke("white");
line(ball.position.x,ball.position.y,holder.position.x,holder.position.y)

if(keyCode===16){
ball.position.y = mouseY;
ball.position.x = mouseX;
}

}








