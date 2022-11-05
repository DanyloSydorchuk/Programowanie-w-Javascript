document.addEventListener('keypress', onKeyPress)

let startTime = 0
let stopTime = 0
let isRecording = 0
let count = 1
let record = []
let sound1 = []
let sound2 = []
let sound3 = []
let sound4 = []

document.querySelector('#startRecord').addEventListener('click',recordStart)
document.querySelector('#stopRecord').addEventListener('click',recordStop)

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

document.querySelector('#sound1').addEventListener('click',() => {play(sound1)})
document.querySelector('#sound2').addEventListener('click',() => {play(sound2)})
document.querySelector('#sound3').addEventListener('click',() => {play(sound3)})
document.querySelector('#sound4').addEventListener('click',() => {play(sound4)})
document.querySelector('#soundAll').addEventListener('click',() => {
    play(sound1)
    play(sound2)
    play(sound3)
    play(sound4)
})

document.querySelector('#play').addEventListener('click',() => {
    if (document.querySelector('#sound1check').checked)
    {
        play(sound1)
    }
    if (document.querySelector('#sound2check').checked)
    {
        play(sound2)
    }
    if (document.querySelector('#sound3check').checked)
    {
        play(sound3)
    }
    if (document.querySelector('#sound4check').checked)
    {
        play(sound4)
    }
})

function play(tab){
    for (let i = 1; i < tab.length; i++) {
        //console.log(tab[i][0] + ':' + tab[i][1])  
        timeout(tab[i][0],tab[i][1])    
    }
}

function timeout(sound, time){
    setTimeout(function(){
        playSound(sound)
    },time)
}

function onKeyPress(event){
    const sound = keyToSound[event.key]
    console.log(event.key)
    playSound(sound)
    if(isRecording==1){
        recording(sound,getTime()-startTime)
    }
}

function playSound(sound){
    sound.currentTime = 0
    sound.play()
}

function getTime(){
    const time = new Date().getTime()
    console.log(time-startTime)
    return time
}

function recordStart(){
    startTime = getTime()
    isRecording = 1
}

function recordStop(){
    stopTime = getTime()
    isRecording = 0
    console.log(record)
    if(sound1.length==0){
        sound1=record
    }
    else if(sound2.length==0){
        sound2=record
    }
    else if(sound3.length==0){
        sound3=record
    }
    else{
        sound4=record
    }  
    record=[]
    startTime = 0
    stopTime = 0
    isRecording = 0
    count = 1
}

function recording(soundR,timeR){
    record[count]=[soundR,timeR]
    count++
}


