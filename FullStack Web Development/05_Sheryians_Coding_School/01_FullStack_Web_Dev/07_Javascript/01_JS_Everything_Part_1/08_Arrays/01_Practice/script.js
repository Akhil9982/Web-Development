// Q1. Create an array with 3 fruits and print the second fruit.
// let fruits = ["apple", "mango", "guava"];
// console.log(fruits[1]);

// Q2. Add "Mango" at the end and "Pineapple" at the beginning of this array.
// let fruits = ["Apple","Banana"];
// fruits.push("Mango");
// fruits.unshift("Pineapple");
// console.log(fruits);

// Q3. Replace "Banana with kiwi" in the array above
// fruits.pop();
// fruits.push("kiwi");
// console.log(fruits);

// Q4. What is the difference between .push() and .unshift()?
// Ans: push adds an element to the last in the array and unshift adds an element to the start of an array.

// Q5. Remove the last item from this array using a method:

// let numbers = [1, 2, 3, 4];
// numbers.pop();
// console.log(numbers);

// Q6. Insert "Red" and "Blue" at index 1 in this array:
// let color = ["Green", "Yellow"];
// color.splice(1, 0, "Red", "Blue");
// console.log(color);

// Q7. Extract only the middle 3 elements from this array

// let items = [1, 2, 3, 4, 5, 6];
// let newarr = items.slice(1,4);
// console.log(newarr);

// Q8. Sort this array alphabetically and then reverse it:

// let names = ["Zara", "Arjun", "Mira", "Bhavya"];
// let sortedarr = names.sort().reverse();
// console.log(sortedarr);

// Q9. Use .map() to square each number:

// let arr = [1, 2, 3, 4];
// let newarr = arr.map(function (val) {
//   return val * val;
// });
// console.log(newarr);

// Q10. Use .filter() to keep numbers > 10?

// let arr = [50, 60, 20, 5, 9, 30];
// let newarr = arr.filter((val) => {
//   return val > 10;
// });
// console.log(newarr);

// Q11. Use .reduce() to find the sum of this array:

// let arr = [10, 20, 30];
// let newarr = arr.reduce((acc, val) => {
//   return acc + val;
// }, 0);
// console.log(newarr);

// Use .find() to the first number less than 10:
// let arr = [12, 15, 3, 8, 20];
// let newarr = arr.find((val) => {
//   return val < 10;
// });
// console.log(newarr);

// Use .some() to check if any student has scored below 35:

// let arr = [45, 60, 28, 90];
// let newarr = arr.some((val) => {
//   return val < 35;
// });

// console.log(newarr);

// Use .every() to check all numbers are even:
// let arr = [2, 4, 6, 8, 10];
// let newarr = arr.every((val) => {
//   return val % 2 === 0;
// });
// console.log(newarr);

// Destructure this array to get firstName and lastName:

// let fullName = ["Harsh", "Sharma"];
// let [firstName, lastName] = fullName;
// console.log([firstName, lastName]);

// Merge two arrays using spread operatior

// let a = [1, 2];
// let b = [3, 4];
// let mergedArr = [...a, ...b];
// console.log(mergedArr);

// Add "India" to the start of this array using spread:
// let countries = ["USA", "UK"];
// countries = ["India", ...countries];
// console.log(countries);

// Clone this array properly (not by reference):

// let arr = [1, 2, 3];
// let arr2 = [...arr];


