const canvas = document.querySelector('canvas');
if (!canvas.getContext) {
    throw new Error('Brak f. canvas.getContext');
}
ctx = canvas.getContext('2d');   
const start = document.querySelector('#start');
const reset = document.querySelector('#reset');
const stop = document.querySelector('#stop');
let indraw = 0;

function Ball(){
    this.x = getRandomInt(0,canvas.width),
    this.y = getRandomInt(0,canvas.height),
    this.vx = getRandomInt(-5,5),  
    this.vy = getRandomInt(-5,5),   
    this.radius = document.querySelector('#radius').value
}            
function showVal(id,newVal){
  document.querySelector(id).innerHTML=newVal;
}

Ball.prototype.draw = function(){
  ctx.beginPath();
  ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,true);
  ctx.closePath();
  ctx.stroke();
}
Ball.prototype.update = function(){
  this.x += this.vx;
  this.y += this.vy;
  
  if (this.y + this.vy > canvas.height || this.y + this.vy < 0) {
    this.vy = -this.vy;
  }
  if (this.x + this.vx > canvas.width || this.x + this.vx < 0) {
    this.vx = -this.vx;
  }
}

let balls=[];

function loop(){
  indraw = 1
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  while (balls.length < document.querySelector('#ilosc').value){
    let ball = new Ball();
    balls.push(ball)
  }
  for (let i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();
    for (let j = 0; j < balls.length; j++) {
      if((balls[i].x+10)<=balls[j].x){
        ctx.beginPath()
        ctx.moveTo(balls[i].x,balls[i].y)
        ctx.lineTo(balls[j].x,balls[j].y)
        ctx.closePath()
        ctx.stroke()
      }
        
      
      
    }
  }
  raf = requestAnimationFrame(loop);
}

  start.addEventListener("click", (e) => {
    if(indraw==0){
      raf = window.requestAnimationFrame(loop);
    }
    
  });
  reset.addEventListener("click", (e) => { // z każdym klieknięciem kulki poruszają się szybciej
    if(indraw==1){
      balls = []
      console.log(balls)
      raf = window.requestAnimationFrame(loop);
    }
  });
  
  


function getRandomInt(min, max) {
  return Math.random() * (max - min) + min; 
}

