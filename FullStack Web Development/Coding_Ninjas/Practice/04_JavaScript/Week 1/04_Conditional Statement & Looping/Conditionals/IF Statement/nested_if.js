// Nested if Statements

// check eligibility for driving license
// age >= 18 - eligible else not eligible
// passed the test - eligible and can obtain the license
// failed the test - eligible but cannot have the license

// let age = Number(prompt("Enter your Age."));
// if (age >= 18) {
//   console.log("eligible");
//   let age = passed;
//   if (age == passed) {
//     console.log("can obtain license");
//   } else {
//     console.log("cannot obtain license");
//   }
// } else {
//   console.log("not eligible");
//   let age = failed;
// }

let age = Number(prompt("Enter Your Age."));
let testPassed = true;

if (age >= 18) {
  console.log("Eligible for the license.");
  if (testPassed) {
    console.log("Congratulations!, You have got the license");
  } else {
    console.log("Sorry, you did not clear the test.");
  }
} else {
  console.log("Not eligible for license");
}
