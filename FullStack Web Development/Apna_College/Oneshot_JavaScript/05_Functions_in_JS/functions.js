// function myFunction() {
//   console.log("Welcome to Apna College");
//   console.log("We are learning JS :)");
// }

// myFunction();

// Function to add two numbers

// function sum(x, y) {
//   s = x + y;
//   return s;
// }

// let val = sum(3, 4);
// console.log(val);

// Arrow Functions

// Sum Function

// function sum(a, b) {
//   return a + b;
// }

// const arrowsum = (a, b) => {
//   return a + b;
// };

// console.log(arrowsum(4, 5));
// // Multiplication
// function mul(a, b) {
//   return a * b;
// }

// let arrowMultiply = (a, b) => {
//   m = a * b;
//   console.log(m);
//   return m;
// };

// arrowMultiply(7, 9);

/** Practice Questions
 *
 * Write a function to count the number of vowels in a string
 */

// function vowels_counter(str) {
//   let count = 0;
//   for (const char of str) {
//     console.log("char");
//     if (
//       char === "a" ||
//       char === "A" ||
//       char === "e" ||
//       char === "E" ||
//       char === "i" ||
//       char === "I" ||
//       char === "o" ||
//       char === "O" ||
//       char === "u" ||
//       char === "U"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(vowels_counter("abc"));
// console.log(vowels_counter("ABC"));

/** Create the above using Arrow function */

// const countVow = (str) => {
//   let count = 0;
//   for (const char of str) {
//     console.log("char");
//     if (
//       char === "a" ||
//       char === "A" ||
//       char === "e" ||
//       char === "E" ||
//       char === "i" ||
//       char === "I" ||
//       char === "o" ||
//       char === "O" ||
//       char === "u" ||
//       char === "U"
//     ) {
//       count++;
//     }
//   }
//   return count;
// };

// console.log(countVow("aeiou"))

// For each loop in array

// let arr = ["pune", "delhi", "mumbai"];

// arr.forEach((val, idx, arr) => {
//   console.log(val.toUpperCase(), idx, arr);
// });

// HOF/HOM = These are functions/methods that either take function as a parameter inside them or they return another function as their output.

// Practice Questions

// Q1. for a given array of numbers, print the square of each value using the forEach loop.

let num = [1, 2, 3, 4, 5];
// Below are ways:

// num.forEach((val, idx, num) => {
//   console.log(`The square of ${val} at index: ${idx} is ${val * val}`);
// });

// num.forEach((num) => {
//   // console.log(num * num);
//   console.log(num ** 2);
// });

// let calcSquare = (num) => {
//   console.log(num * num);
// };

// num.forEach(calcSquare);

// Some More Array Methods

// Map

// let newArr = num.map((val) => {
//   return val * 2;
// });

// console.log(newArr);

// Filter

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let evenArr = arr.filter((val) =>{
//     return val % 2 === 0;
// });

// console.log(evenArr)

// Reduce Method

// let arr = [1, 2, 3, 114, 4];

// const output = arr.reduce((prev, curr)=>{
//     return prev < curr ? prev : curr;
// });

// console.log(output);

// Practice Questions

// Qs. We are given array of marks of students. Filter out the marks of the students that scored 90+.

// let marks = [36, 55, 80, 54, 42, 80, 95, 99];

// let toppers = marks.filter((val) => {
//     return val > 90;
// });

// console.log(toppers);

// Qs. Take a number n as input from the user. Create an array of numbers from 1 to n. Use the reduce method to calculate sum of all numbers in the array. Use the reduce method to calculate product of all numbers in the array. 

let n = prompt("Enter a number");

let arr = [];

for (let i = 1; i <= n; i++) {
  arr[i - 1] = i;
}

console.log(arr);

let sum = arr.reduce((res, curr) => {
  return res + curr;
});

console.log("sum = ", sum);

let product = arr.reduce((res, curr) => {
  return res * curr;
});

console.log("factorial = ", product);
