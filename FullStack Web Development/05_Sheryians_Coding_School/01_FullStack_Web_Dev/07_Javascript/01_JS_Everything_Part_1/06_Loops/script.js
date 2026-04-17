// Repeating a set of rules
// for, while, do-while, for-each, for-in, for-of

// for

// for(start;end;change){

// }

// 1-100
// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

// while

// start
// while(end){
//     change
// }

// let i = 1;
// while (i <= 32) {
//   console.log(i);
//   i++;
// }

// do-while
// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 20);

// break
// for (let i = 1; i <= 200; i++) {
//   console.log(i);
//   if (i === 32) {
//     break;
//   }
// }

// continue
// for (let i = 1; i <= 200; i++) {
//   if (i === 32) {
//     continue;
//   }
//   console.log(i);
// }

// Problems
/* 
Q1. Print numbers from 1 to 10.
*/

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

//Q2. Print a number from 10 to 1 using while loop
// let i = 10;
// while (i >= 1) {
//   console.log(i);
//   i--;
// }

// Q3. Print even numbers from 1 to 20 using a for loop.

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// for (let i = 2; i <= 20; i += 2) {
//   console.log(i);
// }

// Q4. Print odd numbers from 1 to 15 using while loop

// let i = 1;
// while (i <= 15) {
//   if (i % 2 === 1) {
//     console.log(i);
//   }
//   i++;
// }

// let i = 1;
// while (i <= 15) {
//   console.log(i);
//   i += 2;
// }

// Q5.Print the multiplication table of 5 (i.e., 5 x 1 = 5... 5 x 10 = 50)

// for (let i = 1; i <= 10; i++) {
//   console.log(`5 * ${i} = ${5 * i}`);
// }

// Q6. Find the sum of numbers from 1 to 100 using a loop
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum = sum + i;
// }
// console.log(sum)

// Q7. Print all the numbers between 1 to 50 that are divisible by 3

// for (let i = 1; i <= 50; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }

// Q8. Ask the user a number and print whether each number from 1 to that number is even or odd.

// (e.g, "1 is odd","2 is even",...)

// const num = prompt("Enter a number to check if it is odd or even.");

// for (let i = 1; i <= num; i++) {
//   if (i % 2 === 0) {
//     console.log(`The number ${i} given is even`);
//   } else {
//     console.log(`The number ${i} given is odd`);
//   }
// }

// Q9. Count how many numbers between 1 to 100 are divisible by 3 and 5.

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(i);
//   }
// }

// Break and Continue Questions

// Q1. Stop at first Multiple of 7
// Write a loop from 1 to 100 that:
// > Prints each number
// > Stops completely when it finds the first number divisible by 7

// for (let i = 1; i <= 100; i++) {
//   console.log(i);
//   if (i % 7 === 0) {
//     break;
//   }
// }

// Q2. Skip Multiples of 3

// Write a loop from 1 to 20 that:
// > Skips numbers divisible by 3.
// > Prints all others

// Use continue

// Expected output:
// 1 2 4 5 7 8 10 11 ... (3,6,9,etc.)

// for (let i = 1; i <= 20; i++) {
//   if (i % 3 === 0) continue;
//   console.log(i);
// }

// Q3. Print fist 5 odd Numbers Only

// Write a loop from 1 to 100 that:
// > Prints only 5 odd numbers
// > Then stops the loop

// Use both if, continue, and a counter + break

// Expected Output:
// 1 3 5 7 9
// let count = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 1) {
//     count++;
//     console.log(i);
//   }
//   if (count === 5) {
//     break;
//   }
// }

