
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var  tree,rock,mango1,mango2,mango3,mango5
var boy,boy2,slingshot
function preload()
{

boy= loadImage("Plucking mangoes/boy.png")
	
}

function setup() {
	createCanvas(800, 700);

//boy2.addImage(boy)
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    tree = new Tree(650,600,20,100)
	ground= new Ground(600,height,1200,20);
	rock = new Rocks(400,600,20,20);
	mango= new Mango(600,400,20,20);
	mango2= new Mango(600,450,30,30);
	mango3 = new Mango(500,480,30,30);
	mango4= new Mango(630,500,20,20);
	mango5 = new Mango(650,470,20,20)
	//slingshot= new Chain(rock.body,{x:200,y:300})

	image(boy,200,200,20,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  tree.display();
  ground.display();
  rock.display();
  mango.display();
  mango2.display()
 mango3.display();
 mango4.display();
  mango5.display();
  slingshot.display();
 // boy.display()

 detectcollision(rock,mango)
 detectcollision(rock,mango2)
 detectcollision(rock,mango3)
 detectcollision(rock,mango4)
 detectcollision(rock,mango5)
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(rock.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
	slingshot.fly()
}

function detectcollision(Lrocks,Lmangoes){

MangoBodyPosition=Lmangoes.body.position
RocksBodyPosition=Lrocks.body.position

var distance= dist(RocksBodyPosition.x,RocksBodyPosition.y,MangoBodyPosition.x,MangoBodyPosition.y)
if(distance<=Lmangoes.r+Lrocks.r){

	Matter.Body.setStatic(Lmangoes.body,false)
}



}
function keyPressed(){
	
	if(keyCode===32){
Matter.Body.setPosition(boy.body,{x:235,y:420})
boy.attach(rock.body);}


}
