
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);

}

function draw() 
{

  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed
  
  

  if (keyIsDown(RIGHT_ARROW)) 
  {
    background("red");
    box.position.x += 5
    
  }

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    box.position.x -= 5
    
  }
 
    if (keyIsDown(DOWN_ARROW)) 
  {
    background("yellow");
    box.position.y += 5
    
   
  }

  if (keyIsDown(UP_ARROW)) 
  {
    background("green");
    box.position.y -= 5
  }


  
  drawSprites();
}

