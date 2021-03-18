var cat, catImage, mouse, mouseImage;
var backImage, back;

function preload() {
  backImage=loadImage("garden.png");
 catImage=loadAnimation("cat1.png","cat2.png","cat3.png","cat4.png");
mouseImage=loadAnimation("mouse1.png","mouse2.png","mouse3.png","mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    cat=createSprite(600,400,20,20);
  cat.addAnimation("cat",catImage);

    mouse=createSprite(400,400,20,20);
  mouse.addAnimation("teasing",mouseImage);

    back=createSprite(400,200,20,20);
   back.addImage(backImage);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
