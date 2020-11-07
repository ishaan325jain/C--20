
var fixedrect,movingrect;

function setup() {
  createCanvas(1200,600);
  fixedrect =   createSprite(600, 400, 200, 100);
  fixedrect.shapeColor  = "green";
  fixedrect.debug  = true ;

 movingrect = createSprite(200,200,100,200);
 movingrect.shapeColor = "green";
 movingrect.debug = true  ;




}

function draw() {
  background("black");
  movingrect.x = World.mouseX ;
  movingrect.y = World.mouseY ;
  
  if( fixedrect.x-movingrect.x < fixedrect.width/2 + movingrect.width/2 && 
      movingrect.x-fixedrect.x < fixedrect.width/2 + movingrect.width/2 &&
      fixedrect.y-movingrect.y < fixedrect.height/2 + movingrect.height/2 && 
      movingrect.y-fixedrect.y < fixedrect.height/2 + movingrect.height/2   
    ){
    fixedrect.shapeColor  = "red";
    movingrect.shapeColor = "red";

  }
  else{
    fixedrect.shapeColor  = "green";
    movingrect.shapeColor = "green";

  }

  drawSprites();
}