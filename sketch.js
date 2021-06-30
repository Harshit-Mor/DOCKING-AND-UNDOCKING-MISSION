var ISSspaceStation, SpaceCraft;
var bg, ISSspaceStationimg, scimg;
var hasDocked = false;

function preload(){
  bg= loadImage("space.jpg");
  ISSspaceStationimg = loadImage("iss.png");
  scimg = loadImage("spacecraft1.png");
  scimg1 = loadImage("spacecraft2.png");
  scimg2= loadImage("spacecraft3.png");
  scimg3= loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(600, 350);
  SpaceCraft = createSprite(285,240);
  SpaceCraft.addImage(scimg);
  SpaceCraft.scale = 0.15;
  
  ISSspaceStation = createSprite(330,130);
  ISSspaceStation.addImage(ISSspaceStationimg);
  ISSspaceStation.scale = 0.25;
}

function draw() {
  background(bg);
  
  SpaceCraft.addImage(scimg);
  if(!hasDocked){
    SpaceCraft.x = SpaceCraft.x + random(-1,1);
    
  if(keyDown("UP_ARROW")){
    SpaceCraft.y = SpaceCraft.y -2;
  }
    
  if(keyDown("LEFT_ARROW")){
      SpaceCraft.addImage(scimg3);
    SpaceCraft.x = SpaceCraft.x - 1;
  }
    
  if(keyDown("RIGHT_ARROW")){
      SpaceCraft.addImage(scimg2);
    SpaceCraft.x = SpaceCraft.x + 1;
  }
    
  if(keyDown("DOWN_ARROW")){
      SpaceCraft.addImage(scimg1);
  }

}
  if(SpaceCraft.y <= (ISSspaceStation.y+70) && SpaceCraft.x <= (ISSspaceStation.x-10)){
    hasDocked = true;
    text("Docking Successful!", 200, 300);
  }

  drawSprites();
}