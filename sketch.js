var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,groundImage;
var tree,treeImage
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	groundImage=loadImage("ground.png")
	treeImage=loadImage("tree.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	


	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.45

	helicopterSprite=createSprite(width/2-50, 100, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=1.2

	groundSprite=createSprite(width/2, height-105, width,10);
	groundSprite.addImage(groundImage)
	groundSprite.scale=1.7
	groundSprite.depth=0.5

	tree=createSprite(100,450)
	tree.addImage(treeImage)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2-50 , 105 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background("skyblue")
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  fill("black") 
  textSize(20)
  textFont("algerian")
  text("Press down arrow or spacebar to drop package ↓ ",10,20)
  if(packageSprite.y>580){
	text("Package reached to the needy, well done 👍",300,300)
}
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
     Matter.Body.setStatic(packageBody,false)
    
  }
  if (keyDown("space")) {
	Matter.Body.setStatic(packageBody,false)
   
 }
}



