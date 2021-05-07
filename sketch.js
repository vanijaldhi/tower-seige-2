const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box,score;

function preload(){
    polygon_img=loadImage("polygon.png");
    
    //getTime();
}

function setup() {
	createCanvas(1600, 600);
	engine = Engine.create();
    world = engine.world;
    
    text("Score:"+score,750,40);

    box1 = new Box(330,360);
    box2 = new Box(360,360);
    box3 = new Box(390,360);
    box4 = new Box(420,360);
    box5 = new Box(450,360);
    box6 = new Box(480,360);
    box7 = new Box(510,360);

    box8 = new Box(360,320);
    box9 = new Box(390,320);
    box10= new Box(420,320);
    box11= new Box(450,320);
    box12= new Box(480,320);

    box13= new Box(390,280);
    box14= new Box(420,280);
    box15= new Box(450,280);
   
    box16= new Box(420,240);

    table1 = new Table(420,440);

    box17= new Box(700,220);
    box18= new Box(730,220);
    box19= new Box(760,220);
    box20= new Box(790,220);
    box21= new Box(820,220);
    box22= new Box(850,220);
    box23= new Box(880,220);

    box24= new Box(730,180);
    box25= new Box(760,180);
    box26= new Box(790,180);
    box27= new Box(820,180);
    box28= new Box(850,180);

    box29= new Box(760,140);
    box30= new Box(790,140);
    box31= new Box(820,140);
   
    box32= new Box(790,100);

    table2 = new Table(790,300);

    ground1= new Ground(800,550,1600,50);

    ball = Bodies.circle(50,200,20);
    World.add(world,ball);
    slingShot = new Sling(this.ball,{x:200,y:200})
    console.log("not working")
    Engine.run(engine);
}
function draw() {
    
    background('bg')
    
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
    box26.display();
    box27.display();
    box28.display();

    box29.display();
    box30.display();
    box31.display();

    box32.display();

    // box1.score();
    // box2.score();
    // box3.score();
    // box4.score();
    // box5.score();
    // box6.score();
    // box7.score();

    // box8.score();
    // box9.score();
    // box10.score(); 
    // box11.score();
    // box12.score();
   
    // box13.score();
    // box14.score();
    // box15.score();

    // box16.score();

    imageMode(CENTER)  
    image(polygon_img ,ball.position.x,ball.position.y,40,40);
    
    table1.display();
    table2.display();
    ground1.display();

    slingShot.display();
     
    console.log("working");
    }

function mouseDragged(){
    Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if(keyCode === 32){
       slingShot.attach(this.ball);
      
    }
}

// async function getTime(){
//     var responce = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
//     var responceJSON = await responce.json();

//     var datetime = responceJSON.datetime;
//     var hour = datetime.slice(11,13);

//     if(hour>06 && hour<16){
//         bg = "light blue";
//     }
//     else{
//         bg = "grey";
//     }
    
//    // background= load(bg);

//     console.log(hour);

// }


