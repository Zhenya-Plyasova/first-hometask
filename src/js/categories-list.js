import { notes, archivedNotes } from './notes';
import { refs } from './refs';

export function createCategoryMarkup(categories) {
  const markup = refs.categories
    .map(category => {
      const activeNotes = notes.filter(note => note.category === category);
      const archiveNotes = archivedNotes.filter(
        note => note.category === category
      );

      return `
      <li class="task-element">
        <div class = task>
          <h3>${category}</h3>
          <p>${activeNotes.length}</p>
          <p>${archiveNotes.length}</p>
        </div>
      </li>
    `;
    })
        .join('');
    
    refs.categoriesContainer.innerHTML = markup;
};

createCategoryMarkup(refs.categories);