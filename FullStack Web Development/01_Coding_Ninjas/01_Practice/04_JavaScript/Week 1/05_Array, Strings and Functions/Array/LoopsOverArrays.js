/** Loop Over Arrays */

const Students = ["Tina", "Raj", "Bobby", "Seema", "Alex", "Sita"];

// for (let i = 0; i < Students.length; i++) {
//   console.log(`Roll No ${i + 1}: ${Students[i]}`);
// }

// console.log("*************");

// const Names = ["Krishana", "Kris", "Charan", "Bhagyavi"];

// for (let count = 0; count < Names.length; count++) {
//   console.log(`Serial Number ${count}: ${Names[count]}`);
// }

// for...in loop
// for (let i in Students) {
//   console.log(`Roll No ${Number(i) + 1}: ${Students[i]}`);
// }

// For....of loop

// for (let student of Students) {
//   console.log(student);
// }

//Complete the findDuplicate function
// Do not alter the starter code.

let arr = [4, 2, 34, 4, 1, 12, 1, 4];
function findDuplicate(arr) {
  //Implement your function here
  let duplicate = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && !duplicate.includes(arr[i])) {
        duplicate.push(arr[i]);
      }
    }
  }
  return duplicate;
}
console.log(findDuplicate(arr));
