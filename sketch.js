const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var ground1,ground2,ground3,polygon,slingshot;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;

function setup() {
createCanvas(1350, 650);
	
engine = Engine.create();
world = engine.world;

box1= new Box(600,470,30,42);
box2= new Box(630,470,30,42);
box3= new Box(660,470,30,42);
box4= new Box(690,470,30,42);
box5= new Box(720,470,30,42);
box6= new Box(570,470,30,42);
box7= new Box(540,470,30,42);
box8= new Box(570,427,30,42);
box9= new Box(600,427,30,42);
box10= new Box(630,427,30,42);
box11= new Box(660,427,30,42);
box12= new Box(690,427,30,42);
box13= new Box(600,384,30,42);
box14= new Box(630,384,30,42);
box15= new Box(660,384,30,42);
box16= new Box(630,340,30,42);
box17= new Box(1000,318,30,42);
box18= new Box(970,318,30,42);
box19= new Box(940,318,30,42);
box20= new Box(1030,318,30,42);
box21= new Box(1060,318,30,42);
box22= new Box(970,275,30,42);
box23= new Box(1000,275,30,42);
box24= new Box(1030,275,30,42);
box25= new Box(1000,232,30,42);

ground1= new Ground(625,500,300,20);
ground2= new Ground(1000,350,250,20);
ground3= new Ground(650,630,1400,20);

polygon= new Polygon(70,350,25);
slingshot= new Slingshot(polygon.body, {x:70, y:300});

Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,255,255);

  textSize(27);
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks.",300,70);
  text("If you need another chance, then click Space!",300,130);

  ground3.display();
  ground2.display();
  ground1.display();
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
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  polygon.display();
  slingshot.display();
  
 
  detectollision(polygon,box1);
  detectollision(polygon,box2);
  detectollision(polygon,box3);
  detectollision(polygon,box4);
  detectollision(polygon,box5);
  detectollision(polygon,box6);
  detectollision(polygon,box7);
  detectollision(polygon,box8);
  detectollision(polygon,box9);
  detectollision(polygon,box10);
  detectollision(polygon,box11);
  detectollision(polygon,box12);
  detectollision(polygon,box13);
  detectollision(polygon,box14);
  detectollision(polygon,box15);
  detectollision(polygon,box16);
  detectollision(polygon,box17);
  detectollision(polygon,box18);
  detectollision(polygon,box19);
  detectollision(polygon,box20);
  detectollision(polygon,box21);
  detectollision(polygon,box22);
  detectollision(polygon,box23);
  detectollision(polygon,box24);
  detectollision(polygon,box25);
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(polygon.body,{x:70, y:300});
    slingshot.attach(polygon.body);
  }
}


function detectollision(lstone, mango){

  mangoBodyPosition= mango.body.position;
  stoneBodyPosition= lstone.body.position;

  var distance= dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);

  if(distance<=mango.width + lstone.r){
  Matter.Body.setStatic(mango.body,false);
  }
}