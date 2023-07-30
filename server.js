const express = require('express');
const fs = require('fs');
const path = require('path');
const PORT = 3001; 
const app = express();
const api = require('./routes')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/api', api);

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);



app.post()
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);