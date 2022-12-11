document.addEventListener("DOMContentLoaded", anim)


const pole = document.querySelector('#pole')
let x=22
let y=22
            
            
            

        function anim(){
            
            if (!pole.getContext) {
                throw new Error('Brak f. canvas.getContext');
            }
            ctx = pole.getContext('2d');  
             
            ctx.arc(x,y,20,0,2*Math.PI);
            ctx.stroke();
            x+=1
            y+=1
            
            requestAnimationFrame(anim)
            
        }
        