/* Intro to Functions in JS */

// Creation or Defining a Function
// function greetUser(userName, medium) {
//   console.log(`Hello ${userName}, Welcome to the ${medium}!`);
// }

// greetUser("Akhil", "App");
// greetUser("Sirisha", "Website");

function printDetails(name) {
  console.log(`Name: ${name}`);
  calculateAge(1997);
}

function calculateAge(birthYear) {
  console.log(2025 - birthYear);
}

printDetails("Akhil");
