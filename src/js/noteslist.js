import { notes, archivedNotes } from "./notes";
import { refs } from "./refs";
import { toggleModal } from "./modal";
import {createModalMarkup} from "./modal";
import { noteMarkup } from "./markup";
import { createCategoryMarkup } from "./categories-list";

let markup = "";

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
createModalMarkup(noteToEdit, text);
refs.index=noteIndex;
toggleModal();
}}};

export function createMarkupNotesList(notes){
  markup = notes.map((note) => {
  return noteMarkup(note)
    }).join("");
    refs.notesList.innerHTML=markup;
  refs.notesContainer.addEventListener('click', onButtonClick);
  createCategoryMarkup(refs.categories);
}
createMarkupNotesList(notes);