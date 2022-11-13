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

const notes = []

const notesDiv = document.querySelector('#notes')
const submit = document.querySelector('#submit');
const title = document.querySelector('#title');
const content = document.querySelector('#content');
const color = document.querySelector('#color');
const pinbool = document.querySelector('#pinbool');
submit.addEventListener('click', ()=>{
    const note = {title:title.value, content:content.value, color:color.value, date:Date.now(), pinbool:pinbool.value}
    console.log(note)
    AddNote(note)
}) 

function AddNote(note){
    notes.push(note)
    localStorage.setItem('notes',JSON.stringify(notes))
    ReadNotes()
}

function ReadNotes(){
    const jsonNotes = localStorage.getItem('notes')
    const readnotes = JSON.parse(jsonNotes)
    console.log(readnotes)
    for (let i = 0; i < readnotes.length; i++) {
        console.log('Title: '+readnotes[i].title)
        CreateDiv(readnotes[i])
    }
}

function CreateDiv(note){
    let div = document.createElement('div')
    let title = document.createElement('p')
    title.innerHTML = note.title
    div.appendChild(title)
    let content = document.createElement('p')
    content.innerHTML = note.content
    div.appendChild(content)
    notesDiv.appendChild(div)
}