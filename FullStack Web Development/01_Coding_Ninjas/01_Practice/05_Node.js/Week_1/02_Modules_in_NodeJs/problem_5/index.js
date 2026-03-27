// Please don't change the pre-written code
// Import the necessary modules here

const fs = require("fs");

const Solution = () => {
  // Write your code here
  // Create a File with contents
  try {
    fs.writeFileSync("notes.txt", "The world has enough coders ");
  } catch (error) {
    console.error("Error");
  }

  // Retrieve the contents using notes.txt
  try {
    const buffer = fs.readFileSync("notes.txt", { encoding: "utf-8" });
    console.log(buffer.toString());
  } catch (error) {
    console.error("File cound not be read");
  }

  // Expand the existing content of "notes.txt" by appending the text "BE A CODING NINJA!"

  try {
    fs.appendFileSync("notes.txt", "BE A CODING NINJA!");
  } catch (error) {
    console.error("file cannot be accessed");
  }

  //  Retrieve the updated contents of the "notes.txt" file and display them on the console.
  try {
    const buffer = fs.readFileSync("notes.txt", { encoding: "utf-8" });
    console.log(buffer.toString());
  } catch (error) {
    console.error("File cound not be read");
  }
};
Solution();
module.exports = Solution;
