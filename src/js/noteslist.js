import { notes, archivedNotes } from "./notes";
import {refs} from "./refs";
import { toggleModal } from "./modal";
import {createModalMarkup} from "./modal";
let markup = "";

function noteTextFormat(element) {
    let textFormat = element;
    if (textFormat.length > 20) {
      textFormat = element.slice(0, 20) + '...';
    }
    return textFormat;
  }

function onButtonClick(e){
const deleteButton = e.target.closest(`#delete-button`);
const editButton = e.target.closest(`#edit-button`);
const archiveButton = e.target.closest(`#archive-button`);
const noteEl = e.target.closest('.task-element');
let noteIndex = notes.findIndex(note => note.id === noteEl.id);
if(deleteButton){
    if (noteIndex !== -1) {
        notes.splice(noteIndex, 1);
      }
      createMarkupNotesList(notes);
}
if(archiveButton){
    if (noteIndex !== -1) {
        archivedNotes.push(notes[noteIndex]);
        notes.splice(noteIndex, 1);
      }
      createMarkupNotesList(notes);
}
if(editButton){
  if (noteIndex !== -1) {
    text ="Edit note";

noteToEdit = notes[noteIndex];
console.log(noteToEdit);
createModalMarkup(noteToEdit, text);
toggleModal();
  }
}
}

export function createMarkupNotesList(notes){
markup = notes.map((note)=>{
        return `<li class="task-element" id=${note.id}>
        <div class = task>
          <h3>${noteTextFormat(note.name)}</h3>
          <p>${note.created}</p>
          <p>${note.category}</p>
          <p>${noteTextFormat(note.content)}</p>
          <p>${note.dates}</p>
          <div class="buttons-container"><button class="icon-button" id="edit-button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m16 2.012 3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287-3-3zm0 6h16v2H4z"/></svg></button>
            <button id="archive-button" class="icon-button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" viewBox="0 0 24 24"><path d="m21.706 5.292-2.999-2.999A.996.996 0 0 0 18 2H6a.997.997 0 0 0-.707.293L2.294 5.292A.996.996 0 0 0 2 6v13c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6a.994.994 0 0 0-.294-.708zM6.414 4h11.172l1 1H5.414l1-1zM12 18l-5-5h3v-3h4v3h3l-5 5z"/></svg></button>
            <button id="delete-button" class="icon-button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"/></svg></button></div>
        </div>
      </li>
        `
    }).join("");
    refs.notesList.innerHTML=markup;

    refs.notesContainer.addEventListener('click', onButtonClick)
}
createMarkupNotesList(notes);

