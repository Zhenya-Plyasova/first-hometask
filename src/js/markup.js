import { noteTextFormat } from './helpers';

export function noteMarkup(note) {
  return `<li class="task-element" id=${note.id}>
        <div class = task>
          <h3>${noteTextFormat(note.name)}</h3>
          <p>${note.created}</p>
          <p>${note.category}</p>
          <p>${noteTextFormat(note.content)}</p>
          <p>${note.dates}</p>
          <div class="buttons-container"><button class="icon-button" id="edit-button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m16 2.012 3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287-3-3zm0 6h16v2H4z"/></svg></button>
            <button id="archive-button" class="icon-button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m21.706 5.292-2.999-2.999A.996.996 0 0 0 18 2H6a.997.997 0 0 0-.707.293L2.294 5.292A.996.996 0 0 0 2 6v13c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6a.994.994 0 0 0-.294-.708zM6.414 4h11.172l1 1H5.414l1-1zM12 18l-5-5h3v-3h4v3h3l-5 5z"/></svg></button>
            <button id="delete-button" class="icon-button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"/></svg></button></div>
        </div>
      </li>
        `;
};

export function archivedNoteMarkup(note) {
  return `<li class="task-element" id=${note.id}>
        <div class = task>
          <h3>${noteTextFormat(note.name)}</h3>
          <p>${note.created}</p>
          <p>${note.category}</p>
          <p>${noteTextFormat(note.content)}</p>
          <p>${note.dates}</p>
          <div class="buttons-container"><button class="icon-button" id="edit-button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m16 2.012 3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287-3-3zm0 6h16v2H4z"/></svg></button>
            <button id="unarchive-button" class="icon-button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m21.706 5.292-2.999-2.999A.996.996 0 0 0 18 2H6a.997.997 0 0 0-.707.293L2.294 5.292A.996.996 0 0 0 2 6v13c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6a.994.994 0 0 0-.294-.708zM6.414 4h11.172l1 1H5.414l1-1zM12 18l-5-5h3v-3h4v3h3l-5 5z"/></svg></button>
            <button id="delete-button" class="icon-button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"/></svg></button></div>
        </div>
      </li>
        `;
};

export function forModalMarkup(note) {
    return `
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
            value = "${note.name}"/>
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
            >${note.content}</textarea>
        </div>
    </div>
    <button type="submit" class="modal-btn">Send</button>`;
};

