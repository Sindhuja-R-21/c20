//nickname-name aliasing -PE
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myEngine,myWorld,ground,ball;



function setup() {
  createCanvas(400,400);

  //creating our own world and engine
  myEngine=Engine.create();
  myWorld=myEngine.world;

  //JSON format
  groundOptions={
    isStatic:true
  }

  //creating PE bodies
  ground=Bodies.rectangle(200,380,400,10,groundOptions);
  console.log(ground)
  //add it your world
  World.add(myWorld,ground);


        

 

   
}


function draw() 
{
  background(51);
  Engine.update(myEngine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);

}





