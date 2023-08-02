// import { notes } from "./notes";
// import { nanoid } from 'nanoid';
// import moment from 'moment';
// import {createMarkupNotesList} from "./noteslist";
import {refs} from "./refs";

let testNote = {
    name: "",
    content: ""
};
let text = "Create note";
let modalMarkup = "";

refs.openModalBtn.addEventListener('click', createNote);
refs.closeModalBtn.addEventListener('click', toggleModal);

function createNote(){
    createModalMarkup(testNote, text);
    toggleModal();
}

export function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
};

export function createModalMarkup(note, text){
modalMarkup=`
    <div class="input-fild">
        <label for="name" class="form-teg">Name</label>
        <div class="input-wrap">
            <input
            minlength="1"
            type="text"
            class="form-imput"
            name="name"
            required
            id="name"
            placeholder="Name"
            value = "${note.name}"
            />
            <span class="error">
                Please enter a name of your note
            </span>
        </div>
    </div>
    <div class="input-fild">
        <label for="category" class="form-teg">Category</label>
        <div class="input-wrap">
            <select class="form-imput" name="category">
                <option value="Task">task</option>
                <option value="Random thougth">random thougth</option>
                <option value="Idea">idea</option>
                <option value="Quote">quote</option>
              </select>
            <span class="error">
                Please enter a category of your note
            </span>
        </div>
    </div>
       <div class="input-fild">
        <label for="content" class="form-teg">Content</label>
        <div class="input-wrap">
            <textarea class="textarea"
            type="text"
            class="form-imput"
            name="content"
            required
            id="content"
            placeholder="Content"
            // value=${note.content}
            >${note.content}</textarea>
        </div>
    </div>
    <button type="submit" class="modal-btn">Send</button>`;
refs.modalForm.innerHTML= modalMarkup;
refs.modalTitle.innerHTML=`${text}`;
}

