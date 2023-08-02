import moment from 'moment';
import { refs } from './refs';

export function getDataFromForm(e) {
  new FormData(e.currentTarget).forEach((value, name) => {
    switch (name) {
      case 'name':
        refs.note.name = value;
        break;
      case 'category':
        refs.note.category = value;
        break;
      case 'content':
        refs.note.content = value;
        refs.note.dates = formatDateList(value);
    }
  });
}

export function noteTextFormat(element) {
  let textFormat = element;
  if (textFormat.length > 20) {
    textFormat = element.slice(0, 20) + '...';
  }
  return textFormat;
}

function formatDateList(text) {
  const dates = text.match(/\d{1,2}[./-]\d{1,2}[./-]\d{2,4}/g);
  if (!dates) return "";

  const formattedDates = dates.map(date => {
    const momentDate = moment(date, ["DD.MM.YYYY", "D.M.YYYY", "D/M/YYYY", "M/D/YYYY", "MMMM D, YYYY"]);
    return momentDate.format("M/D/YYYY");
  });

  return formattedDates.join(", ");
}

