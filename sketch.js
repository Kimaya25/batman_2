const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var drop = [];
var umbrella_main;
var engine, world;
function preload()
{
	
}

function setup(){
	createCanvas(400, 400);
	engine = Engine.create();
	world = engine.world;
	umbrella_main = new umbrella(200,200,50,50);

	for(var i=0; i<100; i++ ){
		drop.push( new drops(random(0,400), random(0,400)))
	}

	function draw(){
	
	background(0);
	Engine.update(engine);
	rectMode(CENTER);
	umbrella_main.display();

	if(this.rain.position.y > height){
		Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
	}
 
  drawSprites();
 
}
}







