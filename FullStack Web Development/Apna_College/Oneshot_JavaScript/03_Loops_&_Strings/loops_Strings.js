// Loops in JS

// For loop

// Print 1 to 5
// for (let count = 1; count <= 5; count++) {
//   console.log("Apna College");
// }

// console.log("Loop has ended");

// Calculate sum of 1 to n

// let sum = 0;
// let n = 50;

// for (let i = 1; i <= n; i++) {
//   sum = sum + i;
// }
// console.log("sum = ", sum);

// console.log("loop has ended");

// While Loop

// let i = 1;

// while (i <= 10) {
//   console.log("Apna College");
//   i++;
// }

// // Do While Loop
// let i = 20;

// do {
//   console.log("Apna College");
//   i++;
// } while (i <= 10);

// for-of Loop

// let str = "JavaScript";

// let size = 0;
// for (let i of str) {
//   console.log("i = ", i);
//   size++;
// }
// console.log("string size = ", size);

// for-in Loop

// let student = {
//     name: "Rahul Kumar",
//     age: 20,
//     cgpa: 7.5,
//     isPass: true,
// };

// for(let i in student){
//     console.log(i);
// }

// Practice Questions

// Q1. Print all even numbers from 0 to 100.

// for (let num = 0; num <= 100; num++) {
//   if (num % 2 === 0) {
//     console.log("num = ", num);
//   }
// }

// Q2. Create a game where you start with any random game number. Ask the user to keep gussesing the game number until the user enters correct value.

// let gameNum = 25;

// let userNum = prompt("Enter the game Number: ");

// while (userNum != gameNum) {
//   userNum = prompt("You entered wrng number. Guess Again: ");
// }

// console.log("Congratulations, you entered the right number.");

// Strings in JS

// let str = "ApnaCollege";
// console.log(str[8]);

// Template Literals
// let output = 1

// let specialString = `This is template Literal`;

// Sting Methods

// let str = "Akhil";

// str.toUpperCase();
// str.toLowerCase();
// str.trim();
// str.slice(start,end);
// str1.concat(str2);
// str.replace(searchVal, newVal);
// str.replaceAll(searchVal, newVal);
// str.charAt(index);

// Practice

// Q1. Prompt the user to enter their full name. Generate a username for them based on the input.
// Start username with @, followed by their full name and ending with the fullname length.

// for Example : user name = "BatullaAkhil" , username should be "@BatullaAkhil5".

let strFullName = prompt("Enter your fullname without spaces");

let userName = "@" + strFullName + strFullName.length;

console.log(userName);
