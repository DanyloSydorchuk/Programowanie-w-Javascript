

document.addEventListener("DOMContentLoaded", start)

//images[i].style.display ='block'

const select = selector => document.querySelector(selector)
        function start(){
            
            //const images = document.querySelectorAll('img')
            let i = 1
            
            // for(let x=0;x<buttons.length;x++){
            //     buttons[x].nodeValue
                
            // }
            const buttons = document.querySelectorAll('.lpButtons').forEach((button,buttonIndex)=>
            {
                button.addEventListener('click', ()=>{
                    i=button.value
                    displaySlides(i)
                })
            })

            setInterval(function(){
                const images = document.querySelectorAll('img')
                displaySlides(i)
                i++
              }, 3000)
            

            select('#next').addEventListener('click',()=>
            {
                i++
                displaySlides(i)
            })
            select('#back').addEventListener('click',()=>
            {
                i--
                displaySlides(i)
            })

            function displaySlides(num){
                
                const images = document.querySelectorAll('img')
                if(num>images.length) {i=1}
                if(num<1) { i = images.length}
                for (let x= 0; x<images.length;x++){
                    images[x].style.display = "none"
                }
                images[i-1].style.display = "block"
                console.log('Display image nr. '+i)
                
            }

            

            
        }




        
        