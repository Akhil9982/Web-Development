const inputs = [4, 10, 2, -3, -2, 5, 9, -1];

const positives = inputs.filter((noNegative = (num) => num > 0));
const negatives = inputs.filter((onlyNegatives = (num) => num < 0));

// function noNegative(num) {
//   return num > 0;
// }

// function onlyNegatives(num) {
//   return num < 0;
// }

console.log(`Original Array : ${inputs}`);
console.log(`Only Positive Numbers : ${positives}`);
console.log(`Only Negative Numbers : ${negatives}`);
