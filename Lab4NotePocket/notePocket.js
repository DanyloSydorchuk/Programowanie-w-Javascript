// const teraz = new Date()
// const wczesniej= Date.now() //korzystać z tego
// teraz.toISOString()
// teraz.toLocaleString() //dostosowuje format
// const x = new Date(wczesniej)
// x.toLocaleString()

// const note = {title:'tit',content: 'cont'}
// const notes = []
// notes.push(note)
// localStorage.setItem('notes', JSON.stringify(notes))
// const jsonNotes = localStorage.getItem('notes')
// const notes1 = JSON.parse(jsonNotes)

let notes = []
let counter = 0;

const notesDiv = document.querySelector('#notes')
const submit = document.querySelector('#submit');
const clear = document.querySelector('#clear');
const title = document.querySelector('#title');
const content = document.querySelector('#content');
const color = document.querySelector('#color');
const pinbool = document.querySelector('#pinbool');
submit.addEventListener('click', ()=>{
    const note = {title:title.value, content:content.value, color:color.value, date:Date.now(), pinbool:pinbool.checked}
    console.log(note.pinbool)
    AddNote(note)
}) 

clear.addEventListener('click', ()=>{
    localStorage.removeItem('notes')
})

function AddNote(note){
    notes.push(note)
    CreateDiv(note)
    localStorage.setItem('notes',JSON.stringify(notes))
}


function ReadNotes(){
    const jsonNotes = localStorage.getItem('notes')
    if (jsonNotes != null){
        notes = JSON.parse(jsonNotes)
    }
    console.log(notes)
    
}

ReadNotes()
SeparateNotes(notes)

function SeparateNotes(notes){
    for (let i = 0; i < notes.length; i++) {
        console.log('Title: '+notes[i].title)
        CreateDiv(notes[i])
    }
}

function CreateDiv(note){
    counter++
    let div = document.createElement('div')
    div.id = 'div'+counter
    let title = document.createElement('p')
    title.innerHTML = note.title
    title.className='title'
    div.appendChild(title)
    let content = document.createElement('p')
    content.innerHTML = note.content
    div.appendChild(content)
    let date = document.createElement('p')    
    date.innerHTML = note.date
    date.className='date'
    div.appendChild(date)
    div.style.background=note.color
    if(note.pinbool==true){
        div.style.order=-counter;
    }
    notesDiv.appendChild(div)
}