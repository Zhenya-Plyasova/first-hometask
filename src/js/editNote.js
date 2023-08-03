import { notes } from "./notes";
import {refs} from "./refs";
import { getDataFromForm } from "./helpers";

export function editNote(e){
        refs.note = {...noteToEdit};
        getDataFromForm(e);
    };

export function saveEditedNote(index, list){
list[index]={...refs.note}
}
