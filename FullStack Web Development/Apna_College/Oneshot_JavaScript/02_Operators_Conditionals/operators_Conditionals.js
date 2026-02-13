"use strict";
// Arthmetic Operators
// let a = 5;
// let b = 2;
// console.log("a = ", a, "& b = ", b);
// console.log("a + b = ", a + b);
// console.log("a - b = ", a - b);
// console.log("a * b = ", a * b);
// console.log("a / b = ", a / b);
// console.log("a % b = ", a % b);   //Modulus
// console.log("a ** b = ", a ** b); //5^2 = 25 - Exponentiation

// Unary Operator

// let a = 5;
// let b = 2;
// console.log("a = ", a, "& b = ", b);
// a = a + 1;
// a++; - !PostIncrement
// a = a-1;
// a--; - !PostDecrement
// ++a; - !PreIncrement
// --a; - !PreDecrement
// console.log("a =", a);

// Assignment Operators

// let a = 5;
// let b = 2;

// a+=4; // a = a + 4;
// console.log("a = ", a); //9

// Comparison Operators (== ; )

// let a = 5;
// let b = 2;

// console.log("a = b =", a == b); //false

// Logical Operator (&& ; || ; !)

// let a = 5;
// let b = 2;

// let cond1 = a <= b;
// let cond2 = b === a;
// console.log("cond1 || cond2 =", cond1 || cond2); //false

// Coditional Statement

// if Statement

// let age = 25;

// if (age >= 18) {
//   console.log("You can vote");
// }

// if (age <= 18) {
//   console.log("You cannot Vote");
// }

// if-else Statement

// let age = 18;

// if (age >= 18) {
//   console.log("You can vote");
// } else {
//   console.log("You cannot Vote");
// }

// else-if Statement

// let age = 14;

// if (age >= 18) {
//   console.log("You can vote");
// } else if (age < 15) {
//   console.log("You cannot Vote");
// } else {
//   console.log("You cannot Vote");
// }

// Ternary Operator //Compact If-Else

// let age  = 25;

// let result = age >= 18 ? "adult" : "not adult";

// console.log(result);

// Switch Statement

/** ************* Practice Questions ******************* */
/**
 * Q1. Get user to input a number using prompt("Enter a number: "). check if the number is a multiple of 5 or not.
 */

// let input = prompt("Enter a number: ");

// if (input % 5 === 0) {
//   console.log(`'${input}' Divisible by '5'`);
// } else {
//   console.log(`'${input}' Not Divisible by '5'`);
// }

// Using Ternary Operator

// let result1 =
//   input % 5 === 0
//     ? `'${input}' Divisible by '5'`
//     : `'${input}' Not Divisible by '5'`;

// console.log(result1);

/* Q2. Write a code which can give grades to students according to their scores.

 * 90 - 100, A,
 * 70 - 89, B,
 * 60 - 69, C,
 * 50 - 59, D,
 * 0 - 49, F.
 */

let marks = 78;

if (marks >= 90 && marks <= 100) {
  console.log("You have got Grade A");
} else if (marks >= 70 && marks <= 89) {
  console.log("You have got Grade B");
} else if (marks >= 60 && marks <= 69) {
  console.log("You have got Grade C");
} else if (marks >= 50 && marks <= 59) {
  console.log("You have got Grade D");
} else if (marks >= 0 && marks <= 49) {
  console.log("You have got Grade F");
} else {
  console.log("You have an Invalid Score");
}
