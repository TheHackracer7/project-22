var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var options;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}
function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	
	
	
	
		options={isStatic:true}
		
	

	
	
	

	
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2,200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, 695, width,10);
	groundSprite.shapeColor="teal";


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 ,options);
	World.add(world, packageBody);
	


	ground = Bodies.rectangle(width/2, 695, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	

	console.log("Setup complete");
	 
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  Engine.update(engine);


  if(keyDown("DOWN_ARROW"))
  {
  
  


  packageBody = Bodies.circle(width/2 , 200 , 5 ,{isStatic:false, restitution:2 });
	World.add(world, packageBody);
	
  
  
  
  }

  
  drawSprites();
 
}



