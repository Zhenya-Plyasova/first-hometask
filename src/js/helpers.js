import {refs} from "./refs";

export function getDataFromForm(e){
    new FormData(e.currentTarget).forEach((value, name) => {
        switch(name){
            case 'name':
                refs.note.name=value
                break;
            case 'category':
                refs.note.category=value
                break;
            case 'content':
                refs.note.content=value;
        }
      }); 
};

export function noteTextFormat(element) {
    let textFormat = element;
    if (textFormat.length > 20) {
      textFormat = element.slice(0, 20) + '...';
    }
    return textFormat;
  }