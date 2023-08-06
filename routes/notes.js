
const notes = require('express').Router();
const uuid = require('../helpers/uuid');

const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
// This API route is a GET Route for retrieving all the tips
notes.get('/', (req, res) => {
  console.info(`${req.method} request received for notes`);
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// This API route is a POST Route for a new UX/UI tip
notes.post('/', (req, res) => {
  console.info(`${req.method} request received to add a note`);

  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuid(),
    };

    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully 🚀`);
    notes.push(newNote);
  } else {
    res.status(400).json({ error: 'Title and text are required.' });
  }
});

notes.delete('/:id', (req, res) => {
  console.info(`${req.method} request received to delete a note`);

  const noteId = req.params.id;
  if (!noteId) {
    res.status(400).json({ error: 'Note ID is required.' });
    return;
  }

  readFromFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((notes) => {
      const updatedNotes = notes.filter((note) => note.id !== noteId);
      writeToFile('./db/db.json', JSON.stringify(updatedNotes));
      res.json(`Note with ID ${noteId} deleted successfully`);
    })
    .catch((err) => {
      console.error('Error deleting note:', err);
      res.status(500).json({ error: 'An error occurred while deleting the note.' });
    });
});

module.exports = notes;