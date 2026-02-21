// Arrays

// let marks = [97, 82, 75, 64, 36];

// console.log(marks);
// console.log(marks.length);
// console.log(typeof marks);

// let heroes = ["ironMan", "thor", "hulk", "shaktiman", "spiderman", "antman"];

// for Loops
// for (let i = 0; i < heroes.length; i++) {
//   console.log(heroes[i]);
// }

// for of

// for( let hero of heroes){
//     console.log(hero);
// }

// let cities = ["delhi", "pune", "mumbai", "hydrebad", "gurgaon"];

// for (let city of cities){
//     console.log(city.toUpperCase());
// }

// Practice Questions

// Qs.1: For a given array with marks of students -> [85, 97, 44, 37, 76, 60];

// find the average marks of the entire class

// let marks = [85, 97, 44, 37, 76, 60];

// let sum = 0;

// for (let val of marks) {
//   sum += val;
// }
// console.log(sum);

// let average = sum / marks.length;

// console.log(`average marks of the class = ${average}`);

// Qs. For a given array with prices of 5 items -> [ 250, 645, 300, 900, 50].
// All items have an offer of 10% Off on them. Change the array to store final price after apply offer.

// let items = [250, 645, 300, 900, 50];

// let idx = 0;
// for (let val of items) {
//   let offer = val / 10;
//   items[idx] = items[idx] - offer;
//   console.log(`value after offer = ${items[idx]}`);
//   idx++;
// }

// for (let i = 0; i < items.length; i++) {
//   let offer = items[i] / 10;
//   items[i] -= offer;
// }

// console.log(items);

// Array Methods in JS

let foodItems = ["potato", "apple", "littches", "tomatoes"];

// push()
foodItems.push("Chips", "burger");
console.log(foodItems);
// pop()
let deletedItem = foodItems.pop();
console.log(deletedItem);
console.log(foodItems);
// toString()
console.log(foodItems.toString());
console.log(foodItems);
// Concat()
let marvelHeroes = ["thor", "spiderman", "ironman", "antman"];
let dcHeroes = ["superman", "batman"];

let heroes = marvelHeroes.concat(dcHeroes);
console.log(heroes);
// unshift() "Similar to push()"
marvelHeroes.unshift("antman");
console.log(marvelHeroes);

// shift() "Similar to pop()"
let val = marvelHeroes.shift();
console.log("deleted", val);

// slice()

console.log(marvelHeroes.slice(2, 3));

// splice()
let arr = [1, 2, 3, 4, 5, 6, 7];

// arr.splice(2, 2, 101, 102);
console.log(arr);
// Add Element
// arr.splice(2,0, 101);
console.log(arr);
// Delete ELement
// arr.splice(3, 1);
console.log(arr);
// Replace Element
arr.splice(3, 1, 101);
console.log(arr);

// Practice Questions

/* Qs 1. Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix".

a. Remove the first company from the array.
b. Remove Uber & Add Ola in its place.
c. Add Amazon at the end. */

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// a.
companies.shift();
console.log(companies);
// b.
companies.splice(1, 1, "Ola");
console.log(companies);
// c.
companies.push("Amazon");
console.log(companies);
console.log(typeof companies);