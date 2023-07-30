const express = require('express').Router();

const notesRouter = require('./notes');

app.use('/notes', notesRouter);

module.exports = router;
