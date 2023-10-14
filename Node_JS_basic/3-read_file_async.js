/* 3-read_file_async.js */
const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const databaseFileName = process.argv[2];

  if (!databaseFileName) {
    res.status(500).send('Internal Server Error: Database file not provided.');
    return;
  }

  try {
    await countStudents(databaseFileName);

    // The countStudents function already logs the information to the console,
    // so you can simply send a success response here.
    res.send('Successfully counted students.');
  } catch (error) {
    res.status(500).send(`Internal Server Error: ${error.message}`);
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
