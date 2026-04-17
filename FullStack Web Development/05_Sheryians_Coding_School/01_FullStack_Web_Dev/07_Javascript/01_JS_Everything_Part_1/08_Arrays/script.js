// Arrays: These are a set of data which are assigned to a variable.
// let arr = [1, 2, 3, 4, 5];
// console.log(arr[2]);

// Modify the arr value

// let arr = [1, 2, 3, 4, 5, 6];
// console.log(arr[3]);
// arr[3] = 12;
// console.log(arr[3]);

// Methods in Arrays
// Pop()

// let arr = [1, 2, 3, 4, 5, 6];
// arr.pop();
// console.log(arr);

// push()

// let arr = [1, 2, 3, 4, 5, 6];
// arr.push(10);
// console.log(arr);

// shift()

// let arr = [1, 2, 3, 4, 5, 6];
// arr.shift();
// console.log();

// unshift()

// let arr = [1, 2, 3, 4, 5, 6];
// arr.unshift(0);
// console.log(arr);

// splice()

// let arr = [1, 2, 3, 4, 5, 6];
// arr.splice(2, 1);
// console.log(arr);

// slice()

// let arr = [1, 2, 3, 4, 5, 6];
// let newarr = arr.slice(0,3);
// console.log(newarr);

// reverse()

// let arr = [1, 2, 3, 4, 5, 6];
// arr.reverse();
// console.log(arr);

// sort()

// let arr = [11, 52, 63, 74, 5, 6];
// let newarr = arr.sort(function (a, b) {
//   return a - b; // Ascending = a - b ; Descending = b - a;
// });
// console.log(newarr);

// for Each

// let arr = [11, 52, 63, 74, 5, 6];
// console.log(arr);
// arr.forEach(function (val) {
//   console.log(val + 5);
// });

// Map()

// let arr = [11, 52, 63, 74, 5, 6];
// let newarr = arr.map(function (val) {
//   console.log(val);
//   return 12;
// });

// console.log(newarr);
// console.log(arr);

// Filter

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let newarr = arr.filter(function (val) {
//   if (val > 4) return true;
// });

// reduce

// let arr = [1, 2, 3, 4, 5, 6];

// let ans = arr.reduce(function (accumulator, val) {
//   return accumulator + val;
// }, 0);

// Find
// let arr = [1, 2, 3, 1, 4, 5, 6];
// let va = arr.find(function (val) {
//   return val === 4;
// });

// console.log(va);

// some
// let arr = [10, 30, 32, 90];
// let any = arr.some(function (val) {
//   return val > 85;
// });

// every
// let arr = [10, 30, 32, 90];
// let any = arr.every(function (val) {
//   return val > 5;
// });
// console.log(any);

// De-structing

// let arr = [1, 2, 3, 4, 5];
// let [a, b, , c] = arr;

// console.log([a, b, , c]);

// spread Operator

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arr2 = [...arr];

