console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', argv);
if(command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if(note){
    console.log("Note created.");
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
  } else {
    console.log('Note title taken.');
  }
} else if(command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  var returnedNote = notes.getNote(argv.title);
  if(returnedNote){
    console.log("Note found");
    console.log('--');
    console.log(`Title: ${returnedNote.title}`);
    console.log(`Body: ${returnedNote.body}`);
  } else {
    console.log('No note matching title found.');
  }

} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed.' : 'Note not found.';
  console.log(message);
} else {
  console.log('The command is not recognized.');
}
