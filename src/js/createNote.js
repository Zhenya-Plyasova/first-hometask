import { notes } from "./notes";
import { nanoid } from 'nanoid';
import moment from 'moment';
import {createMarkupNotesList} from "./noteslist";
import { toggleModal, createModalMarkup } from "./modal";
import {refs} from "./refs";
      
    let newNote = {};
    let text = "Create note";
    let testNote = {
      name: "",
      content: ""
  };

createModalMarkup(testNote, text)

    function addNewNote(note){
      return notes.push({ ...note });
    };

    function createNewNote(e){
        newNote.id=nanoid();
        let date = moment();
        newNote.created=date.format('MMMM DD, YYYY');
        newNote.dates=[];
        new FormData(e.currentTarget).forEach((value, name) => {
          console.log(name);
          switch(name){
              case 'name':
                  newNote.name=value
                  break;
              case 'category':
                  newNote.category=value
                  break;
              case 'content':
                  newNote.content=value;
          }
        });
    }

    const onSubmitModalForm =(e)=>{
        e.preventDefault();
        createNewNote(e);
        addNewNote(newNote); 
        e.currentTarget.reset();
        createMarkupNotesList(notes);
        toggleModal();
    }
  
    document.querySelector('.modal-form').addEventListener('submit', onSubmitModalForm);

