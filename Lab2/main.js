document.addEventListener("DOMContentLoaded", start)

const select = selector => document.querySelector(selector)
        function start(){
            let i=0
            select('#next').addEventListener('click',nextSlide)
            select('#back').addEventListener('click',backSlide)
            const buttons = document.querySelectorAll('button')
            
            const images = document.querySelectorAll('img')
            if(i==images.length){
                i==0
            }
            images[i].style.display ='block'
            console.log(images.length)
            // setInterval(function(){
            //     console.log('slide '+ i)
            //     images[i].style.display = 'block'
            //     images[i].style.display = 'none'
            //     i++
            //     if (i==images.length)
            //     {
            //         i=0
            //     }
            //   }, 2000)

              function nextSlide(){
                console.log('click next')
                images[i].style.display ='none'
                i++
                console.log('slide '+ i)
                
            }
    
            function backSlide(){
                console.log('click back')
                i++
                images[i].style.display ='block'
            }


        }

        