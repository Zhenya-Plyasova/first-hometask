export const refs = {
    notesList: document.querySelector(".tasks-list"),
    notesContainer: document.querySelector(".tasks-container"),
    categoriesContainer: document.querySelector(".categories-list"),
    openModalBtn: document.querySelector('.create-note'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('.backdrop'),
    modalContent: document.querySelector('.modal-container'),
    modalTitle: document.querySelector('.modal-title'),
    modalForm: document.querySelector('.modal-form'),
    note: {},
    categories: ['Task', 'Random thougth', 'Idea', 'Quote'],
    index: "",
    };