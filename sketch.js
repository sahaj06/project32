const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getbackgroundimg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
    
    background(backgroundImg);


    Engine.update(engine);

    // write code to display time in correct format here

    if(hour >= 4 && hour<= 6){
        bg = "sunrise1.png"
      }
    
      else
     if(hour >= 6 && hour<=8) {
        bg = "sunrise2.jpg"
      }
    else 
    if(hour >= 8 && hour<=10){
        bg = "sunrise3.jpg"
    }
    else 
    if(hour >= 10 && hour<=12){
        bg = "sunrise4.jpg"
    }
    else 
    if(hour >= 12 && hour<=14){
        bg = "sunrise5.jpg"
    }
    else 
    if(hour >= 14 && hour<=16){
        bg = "sunrise6.jpg"
    }
    else 
    if(hour >= 16 && hour<=18){
        bg = "sunset7.jpg"
    }
    else 
    if(hour >= 18 && hour<=20){
        bg = "sunset8.jpg"
    }
    else 
    if(hour >= 20 && hour<=22){
        bg = "sunset9.jpg"
    }
    else 
    if(hour >= 22 && hour<=24){
        bg = "sunset10.jpg"
    }
    else 
    if(hour >= 24 && hour<=2){
        bg = "sunset11.jpg"
    }
    else 
    if(hour >= 2 && hour<= 4){
        bg = "sunset12.jpg"
    }
    else 
    if(hour >= 16 && hour<=18){
        bg = "sunset12.jpg"
    }

}

async function getbackgroundimg()
{
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo")
  var responseJSON = await response.json();
  var datetime  = responseJSON.datetime;
  var hour = datetime.slice(11,13);

  

backgroundImg = loadImage(bg);

}

