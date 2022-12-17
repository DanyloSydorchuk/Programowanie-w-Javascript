const canvas = document.querySelector('canvas')
if (!canvas.getContext) {
    throw new Error('Brak f. canvas.getContext');
}
ctx = canvas.getContext('2d');              
const ball = {
    x: rand(canvas.width),
    y: rand(canvas.height),
    vx : rand(5),
    vy : rand(5),
    radius: 10,
    draw(){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,true);
        ctx.closePath();
        ctx.stroke();
    }
}            

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ball.draw();

    ball.x += ball.vx;
    ball.y += ball.vy;
  
    if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
      ball.vy = -ball.vy;
    }
    if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
      ball.vx = -ball.vx;
    }
  
    raf = requestAnimationFrame(draw);
  }


  document.addEventListener("DOMContentLoaded", (e) => {
    raf = window.requestAnimationFrame(draw);
  });




function rand(max){
    return Math.floor(Math.random() * max)+1;
}

        
        