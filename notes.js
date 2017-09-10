console.log('Starting Notes.js');

var addNote = (title, body) => {
  console.log('Adding note', title, body);
};

var getAll = () => {
  console.log('Getting all notes');
}

var removeNote = (title) => {
  console.log('Removing note', title);
}

var readNote = (title) => {
  console.log('Reading note', title);
}
 module.exports = {
   addNote,
   getAll,
   removeNote,
   readNote
 };
