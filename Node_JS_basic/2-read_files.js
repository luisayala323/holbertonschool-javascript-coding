/* reading a file synchronously with nodejs */
const fs = require('fs');

function countStudents(path) {
  try {
    const fileContents = fs.readFileSync(path, 'utf8');

    const lines = fileContents.split('\n').filter((line) => line.trim() !== '');

    const fieldCounts = {};

    for (const line of lines) {
      const data = line.split(',');

      if (data.length === 4) {
        const field = data[3].trim();

        if (Object.prototype.hasOwnProperty.call(fieldCounts, field)) {
          fieldCounts[field].push(data[0].trim());
        } else {
          fieldCounts[field] = [data[0].trim()];
        }
      }
    }

    const totalStudents = lines.length - 1;
    console.log(`Number of students: ${totalStudents}`);

    for (const field in fieldCounts) {
      if (Object.prototype.hasOwnProperty.call(fieldCounts, field)) {
        const count = fieldCounts[field].length;
        const list = fieldCounts[field].join(', ');
        console.log(`Number of students in ${field}: ${count}. List: ${list}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
