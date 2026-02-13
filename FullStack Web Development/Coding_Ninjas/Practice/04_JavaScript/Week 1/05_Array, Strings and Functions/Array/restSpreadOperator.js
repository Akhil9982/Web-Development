const aprilBatch = ["Tina", "Madhur"];
const mayBatch = ["Ritik", "Deepak", "Shalini"];
const juneBatch = ["Saba", "Shivani"];
const JulyBatch = [];

// function addStudent(batch, student) {
//   batch.push(student);
//   console.log(batch);
// }
// addStudent(aprilBatch, "Ritu");
// addStudent(mayBatch, "Sunny");

// Rest ...

function addStudents(batch, ...students) {
  for (let i of students) {
    batch.push(i);
  }
  console.log(batch);
}

addStudents(aprilBatch, "Ritu", "Tira");

// Spread
// Expand / Copying

const newBatch = [...mayBatch];
console.log(newBatch);

mayBatch.push("newStudent");
console.log(mayBatch);
console.log(newBatch);

// concatenate
const mergedBatch = [...mayBatch,...juneBatch];
console.log(mergedBatch);