const fs = require('fs');

console.log('Starting notes.js');

var addNote = (title, body) => {
  var notes = [];
  var note = {
    title,
    body
  };
try {
  var notesString = fs.readFileSync('notes-data.json');
  notes = JSON.parse(notesString);
} catch(e) {

}
var duplicateNotes = notes.filter((note) => note.title === title);
if(duplicateNotes.length === 0) {
  notes.push(note);
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}


};

var getAll = () => {
  console.log('Getting all notes.');
};

var getNote = (title) => {
  console.log('The note is: ', title);
};
var removeNote = (title) => {
  console.log(title, ' is removed.');
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
