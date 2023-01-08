let notes = []
let counter = 0;
const key = '24d7a4fb1b10c517f1cf5a2f9cf0344b'

const notesDiv = document.querySelector('#notes');
const submit = document.querySelector('#submit');
const clear = document.querySelector('#clear');
const miasto = document.querySelector('#miasto');
const pinbool = document.querySelector('#pinbool');
submit.addEventListener('click', ()=>{
    const note = {miasto:miasto.value, pinbool:pinbool.checked, weather:[]}
    AddNote(note)
}) 

clear.addEventListener('click', ()=>{
    localStorage.removeItem('Weather')
})

function AddNote(note){
    note.weather = getData(note)//dodać info zwrócone z openWeather
    notes.push(note)
    CreateDiv(note)
    localStorage.setItem('Weather',JSON.stringify(notes))
}

function ReadNotes(){
    const jsonNotes = localStorage.getItem('Weather')
    if (jsonNotes != null){
        notes = JSON.parse(jsonNotes)
    }
    
}

ReadNotes()
SeparateNotes(notes)

function SeparateNotes(notes){
    for (let i = 0; i < notes.length; i++) {
        CreateDiv(notes[i])
        console.log(notes[i])
    }
}

function CreateDiv(note){
    counter++
    let div = document.createElement('div')
    div.id = 'div'+counter
    let title = document.createElement('p')
    title.innerHTML = note.miasto
    title.className='title'
    div.appendChild(title)
    // let content = document.createElement('p')
    // content.innerHTML = note.content
    // div.appendChild(content)
    // let date = document.createElement('p')    
    // date.innerHTML = note.date
    // date.className='date'
    // div.appendChild(date)
    // div.style.background=note.color
    if(note.pinbool==true){
        div.style.order=-counter;
    }
    notesDiv.appendChild(div)
}

const sendRequest = (method, url) => {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'json';
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            }
            resolve(xhr.response);
        };
        xhr.send();
    });
    return promise;
};


const getData = async (note) => {
    try {
        const res = await sendRequest(
            'GET',
            'http://api.openweathermap.org/data/2.5/weather?q='+note.miasto+'&APPID='+key
            
        );
        console.log(res);
    } catch (err) {
        console.log(err);
    }
};
