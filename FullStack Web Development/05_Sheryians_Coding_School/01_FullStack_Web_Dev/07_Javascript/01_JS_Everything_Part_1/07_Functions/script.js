// Function: This is a set of rules which we define so that later we can call and get things done

// Syntax:
// function Declarations
// function statements
// function hny() {
//     console.log("Happy New Year");
// }

// hny();

// function Expression
// let fnc = function hi () {
//     console.log("Happy New Year");
// }

// fnc()

// fat arrow function

// let fnc = () => {

// }

// parameter vs arguments

// function abcd(val1, val2) {
//   // parameters
//   console.log(val1 + val2);
// }

// abcd(1, 2); //arguments

// Default, rest and spread operator

// default
// function add(val1 = 1, val2 = 1) {
//   console.log(val1 + val2);
// }

// add();

// rest parameter
// function add(...val) {
//   console.log(val);
// }

// add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// function add(val){
//     return 12 + val;
// }

// let addition = add(23);
// console.log(addition)

// first class functions

// function add(val) {
//   val();
// }

// add(function () {
//   console.log("Hi");
// });

// Higher Order Functions[HOF]

// function abcd(val) {
//   val(32); // HOF
// }

// abcd(function () {
//   console.log("hi");
// });

// HOF
// function abcd() {
//   return function () {
//     console.log("hi");
//   };
// }
// abcd()();

// pure vs impure functions

// pure function

// function ab(){
//     console.log("hi")
// }

// impure function
// let a = 12;

// function abc(){
//     a++;
// }

// closures

// function abcd() {
//   let a = 12;
//   return function () {
//     console.log(a);
//   };
// }

// Lexical Scoping

// function abcd() {
//   let a = 12;
//   function efg() {
//     let b = 14;
//     function ijk() {
//       let c = 16;
//     }
//   }
// }

// IIFE

// (function () {})();

// Q1. What's the difference between function declaration and expression in terms of hoisting

// function declarations are those functions which can be called/invoked first but later declared in the script in terms of hoisting where as expressions are functions which are normal functions which needs to be initialized and declared first then later called but these will not work.

// Q2. what will be the output of the below question

// greet();

// function greet() {
//   console.log("Hello!");
// }

// Q.3 convert the below function into arrow function

// function multiply(a, b) {
//   return a * b;
// }
// console.log(multiply(3, 5));

// let multiply = (a, b) => {
//   return a * b;
// };

// console.log(multiply(3, 5));

// Q4. Identify the parameters and arguments in the below function

// function welcome(name) { //parameters
//   console.log(name);
// }
// welcome("Harsh"); // arguments

// Q5. How many parameters does this function have and how many arguments are being passed

// function demo(a, b, c) {
//   demo(1, 2);
// }

// ans: parameters - 3(a,b,c) and arguments - 2(1,2)

// Q6. Guess the output

// function sayHi(name = "Guest"){
//     console.log("Hi", name);
// }

// sayHi();

// Q7. What does ... operator mean in parameters ?

// this means when we have a lot of arguments in functions rather than the parameters we use the ... (rest) operator to assign the values in an array.

// function abcd(a, b, c, ...val) {
//   console.log(a, b, c, val);
// }
// abcd(1, 2, 3, 4, 5, 6, 7, 8);

// Q8. Use the rest parameter to accept any number of scores and return the total

// function getScore(...scores) {
//   let total = 0;
//   scores.forEach(function (val) {
//     total += val;
//   });
//   return total;
// }
// console.log(getScore(10, 12, 14, 18));

// Q9. Fix the function using early return

// function checkAge(age) {
//   if (age < 18) {
//     console.log("Too Young");
//   } else {
//     console.log("Allowed");
//   }
// }

// function checkAge(age) {
//   if (age < 18) return "Too Young";
//   return "Allowed";
// }
// console.log(checkAge(2));

// Q10. Whats the return value of this function

// function f(){
//     return;
// }
// console.log(f())

// Q11. What does it mean when we say "function are first class citizens"?

// Ans: When functions are treated like values

// Q12. Can we assign a function to a variable and then call it ?

// let fncVar = function () {
//   return "Hi";
// };

// console.log(fncVar());

// Q13. Pass a function into another function and execute it inside.

// function abcd(val) {
//   val();
// }

// abcd(function () {
//     console.log("hey")
// });

// Q14. What is a Higher Order Function?
// function abcd(val){
//     val();
// }
// abcd(function(){
//     console.log("hi")
// })

// Q15. Identify Higher Order Function

// [1, 2, 3].map(function (x) {
//   return x * 2;
// });

//Q16. impure functions

// let total = 0;
// function addToTotal(num) {
//   total += num;
// }

// Q17. Convert the below impure function to pure function

// function addToTotal(currentTotal, num) {
//   return currentTotal + num;
// }

// Closures

//Q18. What is closure ? When is it created?

// function abcd() {
//   let val = 0;
//   return function () {
//     console.log(val);
//   };
// }

// Q19. What is the output?

// function outer() {
//   let count = 0;
//   return function () {
//     count++;
//     console.log(count);
//   };
// }
// const counter = outer();
// counter();
// counter();

// Q20. Convert this normal function into IIFE

// (function init() {
//   console.log("initialized");
// })()

