const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      try {
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        if (lines.length === 0) {
          throw new Error('File is empty or invalid');
        }

        const headers = lines[0].split(',');
        const studentData = lines.slice(1);

        const studentsByField = {};
        let totalStudents = 0;

        studentData.forEach((line) => {
          const studentInfo = line.split(',');
          if (studentInfo.length === headers.length) {
            const firstName = studentInfo[0].trim();
            const field = studentInfo[3].trim();

            if (field) {
              totalStudents += 1;
              if (!studentsByField[field]) {
                studentsByField[field] = [];
              }
              studentsByField[field].push(firstName);
            }
          }
        });

        console.log(`Number of students: ${totalStudents}`);

        for (const [field, students] of Object.entries(studentsByField)) {
          console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
        }

        resolve();
      } catch (error) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

module.exports = countStudents;
