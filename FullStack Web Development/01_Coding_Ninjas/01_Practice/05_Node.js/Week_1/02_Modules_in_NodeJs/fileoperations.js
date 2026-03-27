const fs = require("fs");

// To read the file using blocking code.

// console.log("Starting to read");

// const buffer = fs.readFileSync("data.txt", { encoding: "utf-8" });
// console.log(buffer.toString());

// create aand writeing file

try {
  fs.writeFileSync(
    "employee.txt",
    `Name: John Doe, 
     Age: 40, 
     Position: Manager `,
  );
} catch (error) {
  console.error(error);
}

// Append another employee data

fs.appendFileSync(
  "employee.txt",
  `Name: David Doe, Age: 30, Position: Assitant Manager`,
);

// Deleteing a file

try {
    fs.unlinkSync("employee.txt");
} catch (error) {
    console.log("File Doesn't Exit")
}

console.log("This is another operation being performed ");
