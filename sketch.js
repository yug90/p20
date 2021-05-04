var bgImg,background;
var cat,catImg1;
var mouse,mouseImg1
function preload() {
    //load the images here
bgImg=loadImage("garden.png")
catImg1=loadImage("cat1.png")
mouseImg1=loadImage("mouse1.png")



}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
background=createSprite(1000,800)
background.addImage(bgImg)


}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
