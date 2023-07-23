const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

// GET route to get all of the terms
app.get('/api/notes', (req, res) => res.json(notesData));

// GET route that returns any specific term
app.get('/api/notes/:note', (req, res) => {
  // Coerce the specific search term to lowercase
  const requestednote = req.params.note.toLowerCase();

  // Iterate through the terms name to check if it matches `req.params.term`
  for (let i = 0; i < termData.length; i++) {
    if (requestedTerm === termData[i].term.toLowerCase()) {
      return res.json(termData[i]);
    }
  }

  // Return a message if the term doesn't exist in our DB
  return res.json('No match found');
});

// Fallback route for when a user attempts to visit routes that don't exist
app.get('*', (req, res) =>
  res.send(
    `Make a GET request using Insomnia to <a href="http://localhost:${PORT}/api/terms">http://localhost:${PORT}/api/terms</a>`
  )
);

// Listen for connections
app.listen(PORT, () =>
  console.info(`Example app listening at http://localhost:${PORT} 🚀`)
);
