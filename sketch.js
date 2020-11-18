


var balls=[];


var NOB = 20;

function setup() 
{
  
  createCanvas(700,200);

 
  for(var i=0; i<NOB; i++)
  {
    balls[i] = new Ball();
    print(balls[i]);
  }
}

function draw() {
  background(20);


  for(var i=0; i<NOB; i++)
  {
    balls[i].move();
    balls[i].disp();

    for(var j=0; j<NOB; j++){
      
      if(i!=j){
        
      balls[i].connect(balls[j]);
      }
    }
  }
}


function Ball()
{
  var d=20;
 
  var xPos= random(d,width-d/2);
  var yPos= random(d,height-d/2);

  //the factors that move the balls 
  var xPosf=random(4.1,3);
  var yPosf=random(3.1,3);

  //displays a white ball
  this.disp=function()
  {
    fill(255);
    noStroke();
    ellipse(xPos,yPos,d,d);
  }

  
  this.move=function()
  {
    xPos+=xPosf;
    yPos+=yPosf;

   
    if(xPos>width-d/2 || xPos<d/2){xPosf=xPosf*-1;}
    if(yPos>height-d/2 || yPos<d/2){yPosf=yPosf*-1;}
  }

  this.connect= function(other)
  {
    if(dist(xPos,yPos,other.xPos,other.yPos)<100)
    {
      stroke(255,10,10);
      line(xPos,yPos,other.xPos,other.yPos);
    }
  }
}

