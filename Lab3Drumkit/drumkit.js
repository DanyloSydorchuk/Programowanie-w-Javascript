document.addEventListener('keypress', onKeyPress)

let music = {
    sound: null,
    time: null
}
let startTime = 0
let stopTime = 0
let isRecording = 0

document.querySelector('#startRecord').addEventListener('click',recordStart)
document.querySelector('#stopRecord').addEventListener('click',recordStop)

// const sound= {
//     's1' : document.querySelector('#s1'),
//     's2' : document.querySelector('#s2')
// }

// function playSound(event){
//     switch(event.key){
//         case 'a':
//             // console.log(event)
//             sound.s1.currentTime = 0
//             sound.s1.play()
//         case 's':
//             // console.log(event)
//             sound.s2.currentTime = 0
//             sound.s2.play()
//     }
    
// }


// const licznik = 0

const keyToSound= {
    'a' : document.querySelector('#s1'),
    's' : document.querySelector('#s2'),
    'd' : document.querySelector('#s3'),
    'f' : document.querySelector('#s4'),
    'z' : document.querySelector('#s5'),
    'x' : document.querySelector('#s6'),
    'c' : document.querySelector('#s7'),
    'v' : document.querySelector('#s8'),
    'g' : document.querySelector('#s9')
}

function onKeyPress(event){
    const sound = keyToSound[event.key]
    console.log(sound)
    playSound(sound)
    if(isRecording=1){
        recording(sound,getTime())
    }
}

function playSound(sound){
    sound.currentTime = 0
    sound.play()
}

function getTime(){
    const time = new Date().getTime()
    console.log(time)
    return time
}

// function record(soundR,timeR){
//     const start = getTime()
//     new music ={
//         sound:soundR,
//         time:timeR
//     }
// }

function recordStart(){
    startTime = getTime()
    isRecording = 1
}

function recordStop(){
    stopTime = getTime()
    isRecording = 0
    console.log(music)
}

function recording(soundR,timeR){
    music = {
        sound : soundR,
        time : timeR-startTime
    }
}


