const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball,ballimg;
var score ;
score = 0;

function preload() {
    ballimg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    ball = Bodies.circle(200,100,30,30);
   
    World.add(world,ball)
    
    slingshot = new SlingShot(this.ball,{x:100,y:200})


    ground = new Ground(450,380,900,20)
    ground2 = new Ground(390,300,250,10)
    ground3 = new Ground(640,190,200,10)
    box1 = new Box(640,120,30,40);
    box2 = new Box(670,120,30,40);
    box3  =  new Box(610,120,30,40)
    box4 = new Box(700,120,30,40);
    box5 = new Box(580,120,30,40)
    box6 = new Box(640,110,30,40)
    box7 = new Box(670,110,30,40)
    box77 = new Box(610,110,30,40);
    box777 = new Box(640,100,30,40);
    box8 = new Box(330,235,30,40);
    box9 = new Box(360,235,30,40);
    box10 = new Box(390,235,30,40);
    box11 = new Box(420,235,30,40);
    box12 = new Box(450,235,30,40);
    
    box13 = new Box(360,195,30,40);
    box14 = new Box(390,195,30,40);
    box15 = new Box(420,195,30,40);

    
    box16 = new Box(390,155,30,40);

     
}

function draw(){
    background(0);
    Engine.update(engine);
    fill("white")
    text("SCORE:"+score,750,100);
ground2.display()


    box8.display()
  box9.display()
  
  box10.display()
  box5.display();
  box11.display()
  box12.display()


  box8.score()
  box9.score()
  
  box10.score()
  box5.score();
  box11.score()
  box12.score()
 
  fill("blue")
  box13.display()
  box14.display()
  box6.display();
  box7.display();
  box77.display();
  box777.display();




  box13.score()
  box14.score()
  box6.score();
  box7.score();
  box77.score();
  box777.score();
  

 
  box15.display()
  box16.display()
  ground.display()
  box1.display()
  box2.display();
  box3.display();
  box4.display();
  box5.display();





  box15.score()
  box16.score()
 // ground.score()
  box1.score()
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  
  ground3.display();
   slingshot.display();
   imageMode(CENTER);
   image(ballimg,ball.position.x,ball.position.y,40,40);
  

}

function mouseDragged(){
    Matter.Body.setPosition(ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed (){
    console.log(ball.position.x,ball.position.y)
    if(keyCode === 32){
        slingshot.attach(ball);
    }}