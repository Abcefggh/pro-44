var airplane,airplaneImage;
var clouds,cloudsImage;
var coins,coinsImage;
var birds,birdsImage;
var hotairballoon,hotairballoonImage;
var lives,livesImage;
var restartButton,restartImage;
var gameOver,gameOverImage;
var backgroundImage,bg;


function preload(){

  airplaneImage=loadImage("airplane.png");
  cloudsImage=loadImage("clouds.png");
  birdsImage=loadImage("bird.png");
  coinsImage=loadImage("coin.png");
  backgroundImage=loadImage("background.jpg");




}

function setup(){
createCanvas(windowWidth,windowHeight);

cloudsGroup = new Group();
birdsGroup = new Group();
coinsGroup = new Group();

bg=createSprite(windowWidth/2,windowHeight/2);
bg.addImage(backgroundImage);
bg.scale=3.2;


airplane=createSprite(windowWidth/2-550,windowHeight/2);
airplane.addImage(airplaneImage);
airplane.scale=0.8;

  





}

function draw(){
background("bg");

text(mouseX+","+mouseY,mouseX,mouseY)

bg.velocityX=-3;
if(bg.x<0){
bg.x=bg.Width/2;
}
airplane.y=World.mouseY;

spawnBirds();
spawnCoins();
drawSprites();

}

function spawnBirds(){

 if(frameCount%100===0){
  birds = createSprite(windowWidth-30,windowHeight/2);
  birds.y=Math.round(random(30,550));
  birds.addImage(birdsImage);
  birds.scale=0.3;
  birds.velocityX=-3;
  birdsGroup.add(birds);
  birds.lifetime=600;

 }
}

function spawnCoins(){

  if(frameCount%150===0){
   coins = createSprite(windowWidth-30,windowHeight/2);
   coins.y=Math.round(random(30,550));
   coins.addImage(coinsImage);
   coins.scale=0.09;
   coins.velocityX=-3;
   coinsGroup.add(birds);
   coins.lifetime=600;
 
  }
 }