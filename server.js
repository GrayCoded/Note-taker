const express = require('express');
const path = require('path');
const fs = require('fs');
const PORT = 3001;
const app = express();
const api = require('./routes/index.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/api/notes', (req, res) => {
  if (err) {
    console.log('an error occurred,', err)
  } else {
    console.log(data)
    res.json(JSON.parse(data))
  }
})

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () =>
  console.log(`Note Taker listening at http://localhost:${PORT} 🚀`)
);