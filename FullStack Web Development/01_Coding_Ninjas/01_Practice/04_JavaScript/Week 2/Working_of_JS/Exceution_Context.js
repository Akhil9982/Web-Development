// console.log(`username: ${userName}`);
// console.log(`userAge: ${userAge}`);

// greetUser(userName);

// function greetUser(name) {
//   console.log(`*****************************`);
//   var greet = "I hope you are doing fine.";
//   console.log(`hello ${name}, ${greet}`);
//   var currentYear = 2030;
//   const year = birthYear(currentYear, userAge);
//   console.log(`*****************************`);
//   return `Your birth year is ${year}`;
// }

// function birthYear(year, age) {
//   console.log("Calculating the birth year");
//   return year - age;
// }

// var bYear = greetUser(userName);
// console.log(bYear);

// function factorial(n) {
//   if (n == 0) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }
// console.log(factorial(5));

// function factorial(n) {
//   console.log("enter", n);
//   if (n === 0) {
//     console.log("base case", n, "-> return 1");
//     return 1;
//   }
//   const result = n * factorial(n - 1);
//   console.log("exit", n, "-> return", result);
//   return result;
// }
// console.log("final result:", factorial(5));

function foo() {
  console.log("Hello from foo!");
}
function bar() {
  foo();
  console.log("Hello from bar!");
}
function baz() {
  bar();
  console.log("Hello from baz!");
}
baz();
