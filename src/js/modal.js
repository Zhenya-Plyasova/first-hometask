import {refs} from "./refs";
import { notes } from "./notes";
import { openFormToCreateNote } from "./createNote";
import {createMarkupNotesList} from "./noteslist";
import { editNote, saveEditedNote } from "./editNote";
import { createNewNote, addNewNote } from "./createNote";
import { forModalMarkup } from "./markup";

let modalMarkup = "";

refs.openModalBtn.addEventListener('click', openFormToCreateNote);
refs.closeModalBtn.addEventListener('click', toggleModal);

export function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
};

export function createModalMarkup(note, text) {
  modalMarkup = forModalMarkup(note);
  refs.modalForm.innerHTML = modalMarkup;
  refs.modalTitle.innerHTML = `${text}`;
};

const onSubmitModalForm =(e)=>{
    e.preventDefault();
    if(refs.modalForm.id){
      createNewNote(e);
      addNewNote(refs.note); 
    }
    else{
    editNote(e);
    saveEditedNote(refs.index);
    refs.index="";
    }
    refs.note={};
    e.currentTarget.reset();
    createMarkupNotesList(notes);
    toggleModal();
    refs.modalForm.removeAttribute("id");
}

refs.modalForm.addEventListener('submit', onSubmitModalForm);

