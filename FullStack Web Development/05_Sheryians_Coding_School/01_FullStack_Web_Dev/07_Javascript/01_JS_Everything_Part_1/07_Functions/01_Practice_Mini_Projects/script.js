// BMI Calculator
// function bmi(weight, height) {
//   return weight / (height * height);
// }
// console.log(bmi(69, 1.7).toFixed(2));

// Create a re-usable discount calculator (HOF)

// function discountCalculator(discount) {
//   return function (price) {
//     return price - price * (discount / 100);
//   };
// }
// let discounter = discountCalculator(10);
// console.log(discounter(300));

// counter

// function counter() {
//   let count = 0;
//   return function () {
//     count++;
//     return count;
//   };
// }
// let c = counter();
// console.log(c());
// console.log(c());
// let d = counter();
// console.log(d());
// console.log(d());

// Create a pure function to transform a value

// function double(val) {
//   return val * 2;
// }

// console.log(double(5));

// Use IIFE to isolate variables

// (function (){
//     const password = "secret pwd";
//     console.log(password);
// })();

// console.log(password);


