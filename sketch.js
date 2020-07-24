
var R1,R2,R3,R3,R4,R5,R6;
var R1_img,R2_img,R3_img,R4_img,R5_img,R6_img;



function preload(){
  R1_img = loadImage("./sprites/raindrop1.jpg");
  R2_img = loadImage("./sprites/raindrop1.jpg");
  R3_img = loadImage("./sprites/raindrop1.jpg");
  R4_img = loadImage("./sprites/raindrop1.jpg");
  R5_img = loadImage("./sprites/raindrop1.jpg");
  R6_img = loadImage("./sprites/raindrop1.jpg");
}




function draw() {

  
  
  if(World.frameCount % 100 == 0){
    R1 = createSprite(100,10,30,20);
    R1.addImage(R1_img);
    R2 = createSprite(200,20,30,20);
    R2.addImage(R2_img);
    R3 = createSprite(290,30,30,20);
    R3.addImage(R3_img);
    R4 = createSprite(380,50,30,20);
    R4.addImage(R4_img);
    R5 = createSprite(470,45,30,20);
    R5.addImage(R5_img);
    R6 = createSprite(590,25,30,20);
    R6.addImage(R6_img);
    
    R1.scale = 0.2;
    R2.scale = 0.2;
    R3.scale = 0.2;
    R4.scale = 0.2;
    R5.scale = 0.2;
    R6.scale = 0.2;
    
    R1.velocityY = 2;
    R2.velocityY = 6;
    R3.velocityY = 7;
    R4.velocityY = 4;
    R5.velocityY = 5;
    R6.velocityY = 3;
  
  }
  
  
  background(255);  
  drawSprites();
}