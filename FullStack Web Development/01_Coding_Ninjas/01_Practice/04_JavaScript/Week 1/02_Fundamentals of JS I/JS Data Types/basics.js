/* Data Types
    1. Object
    2. Primitive Datatypes
*/

/* ********************************************* *
****      Primitive DataTypes in JS.           ***
/* ********************************************* */

//  Number (64 bit)

let num = 10;
console.log(typeof num);
// String

const firstName = "Akhil's book";
const lastname = "Batulla";
const nickname = `Tom`;

console.log(typeof firstName);
console.log(typeof lastname);
console.log(typeof nickname);

// Boolean
let bool = false;
console.log(typeof bool);

// Undefined

let a;
console.log(typeof a);
console.log(a);

// Null

let b = null;
console.log(b);
console.log(typeof b);

// Symbol(ES6/2015)

// BigInt(ES2020)

let num1 = 10n;
console.log(typeof num1);

// Interesting Things

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE * 10);

let num3 = Infinity;
console.log(12 / 0);
console.log(188 / Infinity);
