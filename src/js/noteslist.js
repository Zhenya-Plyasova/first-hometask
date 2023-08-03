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
  let archiveNoteIndex = archivedNotes.findIndex(note => note.id === noteEl.id);
  if (deleteButton) {
  
    if (noteIndex !== -1) {
      notes.splice(noteIndex, 1);
      createMarkupNotesList(notes);
    }
    else if (archiveNoteIndex !== -1) {
      archivedNotes.splice(archiveNoteIndex, 1);
      createMarkupNotesList(archivedNotes);
    }
    
}
  if (archiveButton) {
    if (noteIndex !== -1) {
      notes[noteIndex].isArchived = true;
    archivedNotes.push(notes[noteIndex]);
    notes.splice(noteIndex, 1);
    createMarkupNotesList(notes);
    } else if (archiveNoteIndex !== -1) {
      archivedNotes[archiveNoteIndex].isArchived = false;
      notes.push(archivedNotes[archiveNoteIndex]);
      archivedNotes.splice(archiveNoteIndex, 1);
    createMarkupNotesList(archivedNotes);
  }
}
  if (editButton) {
  text = 'Edit note';
  if (noteIndex !== -1) {
noteToEdit = notes[noteIndex];
createModalMarkup(noteToEdit, text);
    refs.index = noteIndex;
    refs.list = notes;
toggleModal();
    }
  else if (archiveNoteIndex !== -1) {
    noteToEdit = archivedNotes[archiveNoteIndex];
    createModalMarkup(noteToEdit, text);
    refs.index = archiveNoteIndex;
    refs.list = archivedNotes;
    toggleModal();
    }}
};

export function createMarkupNotesList(notes) {
  markup = notes
    .map(note => {
      return noteMarkup(note);
    })
    .join('');
  refs.notesList.innerHTML = markup;
  refs.notesContainer.addEventListener('click', onButtonClick);
  createCategoryMarkup(refs.categories);
}

function onArchiveButtonClick() {
  createMarkupNotesList(archivedNotes);
  refs.archiveBtn.removeEventListener('click', onArchiveButtonClick);
  refs.archiveBtn.addEventListener('click', onUnarchiveButtonClick);
  refs.archiveBtn.innerHTML = refs.unArchiveIcon;
}

function onUnarchiveButtonClick() {
  createMarkupNotesList(notes);
  refs.archiveBtn.removeEventListener('click', onUnarchiveButtonClick);
  refs.archiveBtn.addEventListener('click', onArchiveButtonClick);
  refs.archiveBtn.innerHTML = refs.archiveIcon;
}

refs.archiveBtn.addEventListener('click', onArchiveButtonClick);

createMarkupNotesList(notes);