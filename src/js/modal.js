import { refs } from './refs';
import { notes } from './notes';
import { openFormToCreateNote } from './createNote';
import { createMarkupNotesList } from './noteslist';
import { editNote, saveEditedNote } from './editNote';
import { createNewNote, addNewNote } from './createNote';
import { forModalMarkup } from './markup';

let modalMarkup = '';

refs.openModalBtn.addEventListener('click', openFormToCreateNote);
refs.closeModalBtn.addEventListener('click', toggleModal);

export function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
}

export function createModalMarkup(note, text) {
  modalMarkup = forModalMarkup(note);

  refs.modalForm.innerHTML = modalMarkup;
  refs.modalForm.innerHTML = modalMarkup;
  const categorySelect = refs.modalForm.querySelector('[name="category"]');
  const optionToSelect = categorySelect.querySelector(
    `option[value="${note.category}"]`
  );
  if (optionToSelect) {
    optionToSelect.setAttribute('selected', 'selected');
  }
  refs.modalTitle.innerHTML = `${text}`;
}

const onSubmitModalForm = e => {
  e.preventDefault();
  try {
    if (refs.modalForm.id) {
      createNewNote(e);
      addNewNote(refs.note);
      createMarkupNotesList(notes);
    } else {
      editNote(e);
      saveEditedNote(refs.index, refs.list);
      refs.index = '';
      createMarkupNotesList(refs.list);
    }
    e.currentTarget.reset();
    refs.note = {};
    toggleModal();
    refs.modalForm.removeAttribute('id');
  } catch (error) {}
};

refs.modalForm.addEventListener('submit', onSubmitModalForm);
