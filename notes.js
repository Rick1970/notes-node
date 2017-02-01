console.log('Starting notes.js');

var addNote = (title, body) => {
  console.log('Adding note: ', title, body);
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
