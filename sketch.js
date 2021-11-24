const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var moonlander,background1,moonlanderImage;
var vY=0;
function preload()
{
	moonlanderImage=loadImage("normal.png");
	background1=loadImage("bg.png");
}

function setup() {
	createCanvas(1000, 750);


	engine = Engine.create();
	world = engine.world;
var options={
    /*isStatic:true,*/
	friction:0.6,
	density:0.8
}
	//Create the Bodies Here.
   moonlander=Bodies.rectangle(200,100,100,200,options)
World.add(world,moonlander)
	Engine.run(engine);
  
}


function draw() {
 background(0);
 Engine.update(engine)
  rectMode(CENTER);
  
  image(background1,0,0,1000,750);
  image(moonlanderImage,moonlander.position.x,moonlander.position.y,100,200)
//adding gravity
vY=vY+0.002
moonlander.position.y=moonlander.position.y+vY
  drawSprites();
 
}
function keyPressed(){
if (keyCode==UP_ARROW){
    vY=vY-1;
    console.log("stats")
	
}
}


