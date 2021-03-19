var rec1,rec2;



function setup() {
  createCanvas(800,400);
  rec1=createSprite(400, 200, 50, 50);
  rec2=createSprite(500,100,50,50);
  rec1.shapeColor="blue";
  rec2.shapeColor="blue";
}

function draw() {
  background(255,255,255); 
  rec1.x=mouseX
  rec1.y=mouseY
console.log(rec1.x-rec2.x)
if(rec1.x-rec2.x<rec1.width/2+rec2.width/2 && rec2.x-rec1.x<rec1.width/2+rec2.width/2 && rec1.y-rec2.y<rec1.width/2+rec2.width/2 &&rec2.y-rec1.y<rec1.width/2+rec2.width/2){
  rec2.shapeColor="red";
  rec1.shapeColor="red";
}  
else{
  rec1.shapeColor="blue";
  rec2.shapeColor="blue";
}
  drawSprites();
}