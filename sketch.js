var sea,ship;
var searun,shiprun;

function preload(){
searun=loadAnimation("sea.png")
shiprun=loadAnimation("ship-1.png","ship-2.png")

}
function setup(){
createCanvas(1000,600)

sea=createSprite(500,300,1000,600)

sea.addAnimation("floating",searun)
sea.scale=0.5
ship=createSprite(300,200,20,50)
ship.addAnimation("float",shiprun)
ship.scale=0.5
}

function draw() {
background("blue")
sea.velocityX=-5

  drawSprites();
}
