const fs = require("fs");
const path = require("path");

// Reading Data
const filePath = path.join("path", "src", "home", "data.txt");
const filePathResolved = path.resolve("path", "src", "home", "data.txt"); //Absolute path
console.log(filePathResolved);
console.log(filePath);
console.log(path.extname(filePathResolved));
fs.readFile(filePath, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});

// Write Data
// fs.writeFile("employee.txt", "New Employee", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File is written");
//   }
// });

// fs.appendFile("employee.txt", "\nAnother Employee", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("file is updated");
//   }
// });

// fs.unlink("employee.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File is deleted");
//   }
// });

// console.log("This is another operation");
