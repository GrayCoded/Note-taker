const express = require('express');
const router = express.Router();

try {
    const notesRouter = require('./notes');
    router.use('/notes', notesRouter);
} catch (error) {
    console.error('Error setting up notesRouter:', error);
}

module.exports = router;