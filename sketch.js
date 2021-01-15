//Create variables here
var dog;
var HappyDog;
var foodS;
var foodStock;
var Database;
var Food=0;

function preload()
{
  Dog = loadImage("Dog.png")
  HappyDog = loadImage("happyDog.png")
}

function setup() {
	createCanvas(500,500);
    dog = createSprite(250,250);
    dog.addImage(Dog)
    dog.scale=(0.15)
    Database=firebase.database();
    Database.ref("Food").on("value",readStock)
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(HappyDog)
  dog.scale=(0.15)
}
  drawSprites();
  textSize(20)
  text("Note:Press UP_ARROW Key To Feed The Dog",20,20)
  text("Food Remaining:"+foodS,50,50)
  
 
  

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1
  }
  Database.ref("/").update({
    Food:x
  })
}


