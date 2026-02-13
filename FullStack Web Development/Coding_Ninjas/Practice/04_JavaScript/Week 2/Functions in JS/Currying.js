// Curring in JS

// function add1(a,b,c){
//     return a+b+c;
// }

// console.log(add1(1,2,3));

// function add2(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         };
//     };
// }

// console.log(add2(1)(2)(3));

// function power(b) {
//   return function (a) {
//     return a ** b;
//   };
// }
// const square = power(2);

// console.log(square);

// console.log(square(4));
// console.log(square(3));
// console.log(square(11));

// const cube = power(3);
// console.log(cube(4));
// console.log(cube(2));

function applyDiscount(discountPercentage) {
  const multiplier = discountPercentage / 100;
  return function (price) {
    const discountAmount = price * multiplier;
    const finalPrice = price - discountAmount;
    return finalPrice.toFixed(2);
  };
}
const tenPercentOff = applyDiscount(10);
console.log(tenPercentOff(100));
console.log(tenPercentOff(200));

const fiftyPercentOff = applyDiscount(50);
console.log(fiftyPercentOff(100));
console.log(fiftyPercentOff(300));