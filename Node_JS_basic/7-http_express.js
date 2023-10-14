/* 7. Create a more complex HTTP server using Express */
const express = require('express');
const countStudents = require('./3-read_file_async');

const DB = process.argv[2];
const port = 1245;
const app = express();
module.exports = app;

app.get('/', (req, res) => {
  // Use status() to set the status code
  res.status(200).send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    // Use status() to set the status code
    res.status(200).send('This is the list of our students\n' + (await countStudents(DB)).join('\n'));
  } catch (error) {
    // Use status() to set the status code and send the error message
    res.status(500).send(error.message);
  }
});

// Use listen() to handle server startup errors
app.listen(port, (err) => {
  if (err) {
    console.error('Error starting server:', err);
  } else {
    console.log(`Server is running on port ${port}`);
  }
});
