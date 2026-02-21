const inputs = [1,2,3,4,5];

console.log(inputs.__proto__.__proto__);

let arr = [1,2,3];
console.log(arr.constructor === Array);

let arr1 = new Array(3);
let result = arr1.__proto__.__proto__;

console.log(result)