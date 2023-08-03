import { notes } from "./notes";
import { nanoid } from 'nanoid';
import moment from 'moment';
import { toggleModal, createModalMarkup } from "./modal";
import {refs} from "./refs";
import { getDataFromForm } from "./helpers";
      
  export function openFormToCreateNote(){
    let text = "Create note";
    let testNote = {
      name: "",
      content: "",
  };    
    createModalMarkup(testNote, text);
    refs.modalForm.setAttribute("id", "to-create");
    toggleModal();

}
    export function addNewNote(note){
      return notes.push({ ...note });
    };

    export function createNewNote(e){
        refs.note.id=nanoid();
        let date = moment();
        refs.note.created=date.format('MMMM DD, YYYY');
      refs.note.dates = [];
        getDataFromForm(e);
    }