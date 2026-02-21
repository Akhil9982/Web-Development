// Iterations - For Loop

//  Print a message 10 times

// let i = 1;
// for (i; i <= 10; i++) {
//   console.log("Akhil");
// }

// let i;
// for (i = 1; i <= 20; i++) {
//   console.log(i);
// }

// Print all the even numbers from 1 to 50

// let i;
// for (i = 1; i <= 50; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// for (let i = 2; i <= 50; i += 2){
//     console.log(i);
// }

// Prime or not

let num = Number(prompt("Enter the number"));
let isPrime = true;
for (let i = 2; i < num; i++) {
  if (num % i == 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log("Prime");
} else {
  console.log("not prime");
}
