var gameState = 0;
var canvas;
var database;
var drawing = [];
var currentPath = [];
//var remove;

function setup(){

    canvas = createCanvas(600,400);
    canvas.mousePressed(startPath);
  //  canvas.mouseRelesed(endPath);
    database = firebase.database();
    //remove = new Remove();

}

function startPath(){
  currentPath = [];
  drawing.push(currentPath);
}
/*
function endPath(){
  drawing.push(currentPath);
}*/

function draw(){
    background("black");

    //remove.display();
    if(mouseIsPressed){

      point = {
        x : mouseX,
        y : mouseY
      }
      currentPath.push(point);
    }
    
    stroke(300);
    strokeWeight(10);
    noFill();
    for(var i = 0;i < drawing.length; i ++){
      var path = drawing[i];
      beginShape();
      for(var j = 0;j < path.length; j ++){
      vertex(path[j].x,path[j].y)
    }
  
    endShape();
  }
    
  }