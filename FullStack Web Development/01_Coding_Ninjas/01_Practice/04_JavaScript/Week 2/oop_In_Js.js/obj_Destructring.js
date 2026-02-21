const obj = {
  a: 1,
  b: 2,
  c: ["0", "B", "J"],
  d: { value: "Val" },
};

// Binfing Pattern
// const { a, b, c, d } = obj;
// console.log(a);
// console.log(c);
// console.log(b);
// console.log(obj);

const { a: a1} = obj;

console.log(a1);
// console.log(a);

// Assignment Pattern

let b;
({ b: b } = obj);
console.log(b)
