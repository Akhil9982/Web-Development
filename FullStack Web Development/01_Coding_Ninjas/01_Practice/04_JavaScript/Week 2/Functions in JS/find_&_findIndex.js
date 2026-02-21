// find ------ findIndex

// const inputs = [22, 12, 15, 77, 65, 98, 76, 44, 55];

// const find1 = inputs.find((num) => num == 64);
// console.log(find1);

// const find2 = inputs.findIndex((num) => num == 64);
// console.log(find2);

// const numbers = [1, 2, 3, 4, 5, 2, 4, 2];

// const filterNumbers = numbers.filter((element, index,array) => {
//     return array.indexOf(element) === index;
// });

// console.log(filterNumbers);

// List of names
const names = ["Alice", "John", "Michael", "Emma", "Sophia", "James"];

// Function 1: Find names
function findNames(names, peopleName) {
  const foundName = names.find((name) => name === peopleName);
  return foundName ? foundName : "Name not found";
}

// Function 2: Find index of a name
function updateNamesIndex(names, peopleName) {
  return names.findIndex((name) => name === peopleName);
}

// Example Usage:
console.log(findNames(names, "John")); // Output: "John"
console.log(findNames(names, "Andrew")); // Output: "Name not found"

console.log(updateNamesIndex(names, "Emma")); // Output: 3
console.log(updateNamesIndex(names, "Mark")); // Output: -1
