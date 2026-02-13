// console.log("My First JavaScript File");

// var a = 45;
// let b = "Harry";
// var c = null;
// var d = undefined;

// {
//   let b = "this";
//   console.log(b);
// }
// console.log(b);

// Practice Set
// Q1

// let str = "five";
// let num = 5;
// console.log(str + num);

// // Q2

// console.log(typeof(str+num));

// // Q3

// const a = {
//   name: "Akhil",
//   section: 1,
//   isPrincipal: false
// }
// a['friend'] = "Shubham"
// console.log(a);

// const dict = {
//   appreciate: "recognize the full worth of.",
//   worth: "value of the thing or person",
//   great: "something which is good",
//   parallel: "which is very straight",
//   mouse: "living being",
// }

// // Accessing the object
// console.log(dict['mouse']);
// console.log(dict.mouse);

// let a = 10;
// let b = 4;

/*
console.log("a + b = ", a + b); // 14
console.log("a - b = ", a - b); // 6
console.log("a / b = ", a / b); // 2.5
console.log("a ** b = ", a ** b); //10000
console.log("a % b = ", a % b); // 2
console.log("++a = ", ++a); // 11
console.log("a++ = ", a++); // 11
console.log("--a = ", --a); // 11
console.log("a-- = ", a--); // 11
console.log("a = ", a); // 10
console.log("a-- = ", a--); // 10

*/

/*
// Switch Statement
let fruit = prompt("Enter the name of the fruit");
switch (fruit) {
  case "Orange":
    console.log("Oranges are fine");
    break;
  case "Mangoes":
    console.log("Mangoes are yellow");
    break;
  case "Apple":
    console.log("Apples are ripe and red");
    break;
  default:
    console.log(`Sorry, we are out of ${fruit}.`);
}

// let age = prompt("Enter your Age.");
// if (age < 18) {
//   console.log("You are not eligible to drive");
// } else if (age > 18) {
//   console.log("You are eligible to drive");
// }
// console.log("You can", age < 18 ? "not drive" : "drive");

// if (age > 10 && age < 20) {
//   console.log("Your age lies between 10 and 20");
// } else {
//   console.log("Your age doesn't lies between 10 and 20");
// }

// Switch Statement
// let fruit = prompt("Enter the name of the fruit");

let age = prompt("What is your age?");
switch (age) {
  case '12':
    console.log("Your age is 12");
    break;
  case '13':
    console.log("Your age is 13");
    break;
  case '14':
    console.log("Your age is 14");
    break;
  case '15':
    console.log("You age is 15");
  default:
    console.log("Your age is not special");
}



let num = prompt("What is your num?");
num = Number.parseInt(num);
if(num % 2 == 0 && num % 3 == 0){
  console.log("Your number is divisible by 2 and 3");
} else {
  console.log("Your number is not divisible by 2 and 3");
}


let age = 100;
let a = age>18? "You can drive" : "You cannot drive";
console.log(a);



let number = prompt("Enter a number");
number = Number.parseInt(number);
let factorial = 1;
let steps = "";

for (let counter = 1; counter <= number; counter++) {
  factorial = factorial *= counter;

  steps += counter;
  if (counter < number) {
    steps += " x ";
  }
}

console.log(`${steps} = ${factorial}`);
*/

// let obj = {
//   Akhil: 90,
//   harry: 45,
//   shivika: 56,
//   ritika: 57,
//   shiv: 23,
// };
// for (let a in obj) {
//   console.log("Marks of " + a + " are " + obj[a]);
// }

// While Loop

// let n = prompt("Enter the value of n");
// n = Number.parseInt(n);

// let i = 0;
// while (i < n) {
//   console.log(i);
//   i++;
// }

// Do While Loop

// let n = prompt("Enter the value of n");
// n = Number.parseInt(n);

// let i = 10;
// do {
//   console.log(i);
//   i++;
// } while (i < n);
// {
//   console.log(i);
// }

// let number = prompt("Enter Your number");
// number = Number.parseInt(number);

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < number);
// {
//   console.log(i);
// }

// Functions

// function add(a, b) {
//   return a + b;
// }

// // Arrow function
// const sum = (p, q) => {
//   return p + q;
// };

// console.log(sum(9, 7));
// console.log(add(10, 20));

// const hello = () => {
//   console.log("Hey how are you. I am toh fine yaar");
//   return "hi";
// };

// let v = hello();

// console.log(v);

// let marks = {
//   harry: 90,
//   shubham: 9,
//   lovish: 56,
//   monika: 4,
// };
// for (let i = 0; i < Object.keys(marks).length; i++) {
//   console.log(
//     "The marks of " +
//       Object.keys(marks)[i] +
//       " are " +
//       marks[Object.keys(marks)[i]]
//   );
// }

// for (let key in marks) {
// console.log(
//   "The marks of " +
//     Object.keys(marks)[i] +
//     " are " +
//     marks[Object.keys(marks)[i]]
// );
// console.log("The marks of " + key + " are " + marks[key]);
// }

// let cn = 43;
// // cn = Number.parseInt(cn);
// let i = 0;
// while (i != cn) {
//   console.log("Try Again");
//   i = Number.parseInt(prompt("Enter a number"));
// }
// console.log("you have entered a correct number");

// Mean of a number

// const mean = (a, b, c, d) => {
//   return (a+b+c+d)/4;
// };

// console.log(mean(4,5,8,10));

// let name = "harry";
// // console.log(name.length);
// console.log(name[1]);

// let friend = "Prakash";

// console.log(friend);
// let myfriend = "Akhil";
// console.log(myfriend);

// // Template Literals

// let boy1 = "Pramod";
// let boy2 = "Nikil";

// let sentence = `${boy2} is a friend of ${boy1}`;
// console.log(sentence);

// // Escape Sequence Characters

// // let fruit = "Bana'na";

// // prettier-ignore
// // let fruit = 'Akhil\'s';
// let fruit = 'Akhil\'s';
// console.log(fruit.length);

// let str = "Akhil";
// let result = "";

// for (let i = 0; i < str.length; i++) {
//   result = result + str[i] + " ";
// }
// console.log(result);

// // Array

// let marks_class_12 = [91, 82, 63, 84, null, false, "Not Present"];

// console.log(marks_class_12[0]);
// console.log(marks_class_12[1]);
// console.log(marks_class_12[2]);
// console.log(marks_class_12[3]);
// console.log(marks_class_12[4]);
// console.log(marks_class_12[5]);
// console.log(marks_class_12[6]);
// console.log(marks_class_12[7]); // Will be undefined because value doesn't exist
// console.log("The length of marks_class_12 is ", marks_class_12.length);

// marks_class_12[6] = 89;
// marks_class_12[0] = 90;
// console.log(typeof marks_class_12);

// let arr = [30, 40, 65, 90, "Akhil"];
// let output = "";

// for (let i = 0; i < arr.length; i++) {
//   output = output + arr[i] + " ";
// }
// console.log(output);

// // Array Methods

// let num = [1, 2, 3, 4, 34];
// let b = num.toString();
// console.log(b);

// let c = num.join(" and ");
// console.log(c, typeof c);
// // let r = num.pop();
// // console.log(num, r);
// let r = num.push(56);
// console.log(num, r);

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19];
// let num_even_more = [211, 212, 213, 214, 215, 216, 217, 218, 219];
// // console.log(num.length);
// // delete num[0];
// // console.log(num.length);

// let newArray = num.concat(num_more, num_even_more);
// console.log(num, num_more);

//  Sort Method
// let compare = (a, b) => {
//   return a - b;
// };
// let num = [551, 22, 43, 24, 45, 56, 67, 78, 39];
// num.sort(compare);
// num.reverse();
// console.log(num);

// let num = [551, 22, 43, 24, 45, 56, 67, 78, 39];
// // let deletedVals = num.splice(2, 4, 1021, 1022, 1023);
// // console.log(typeof deletedVals);

// let newnum = num.slice(3, 5);
// console.log(newnum);

// let num = [3, 5, 1, 2, 4];

// for (let i = 0; i < num.length; i++) {
//   console.log(num[i]);
// }

// let num = [3, 5, 1, 2, 4];
// num.forEach((element) => {
//   console.log(element * element);
// });

// let arr = [45, 23, 21];
// let a = arr.map((value) => {
//   console.log(value);
//   return value + 1;
// });
// console.log(a);

// let arr = [1, 2, 4, 5, 6, 7, 8];
// console.log(arr.length);
// let input = Number.parseInt(prompt("Enter the number to add"));
// // input = Number.parseInt(input);
// arr.push(input);
// console.log(arr);

// let arr = [1, 2, 4, 5, 6, 7, 8];
// console.log(arr.length);
// let input;
// do {
//   input = Number.parseInt(prompt("Enter the number to add"));
//   // input = Number.parseInt(input);
//   arr.push(input);
// } while (input != 0);
// console.log(arr);

// let arr = [1, 2, 3, 4, 60, 50];
// let n = arr.filter((x) => {
//   return x % 10 == 0;
// });
// console.log(n);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let newarr = arr.map((value) => {
//   console.log(value);
//   return value * value;
// });
// console.log(newarr);

// let arr = [1, 2, 3, 4, 5];
// let newarr = arr.reduce((value1, value2) => {
//   return value1 * value2;
// });
// console.log(newarr);

// Number Guessing Game

/*

Write a JavaScript program to generate a random number and store it in a variable. The program then takes an input from the user to tell them whether the guess was correct, greater or lesser than the original number.

100 - (no of guesses) is the score of the user. The program is expected to terminate once the number is guessed. Number should be between 1 - 100.

*/

while (true) {
  // Generate a random number 1-100
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log("Random number (for testing):", randomNumber);

  let guesses = 0;
  let maxGuesses = 100;
  let userInput;

  // guessing loop
  while (guesses < maxGuesses) {
    userInput = Number.parseInt(prompt("Enter the Number (1-100):"));
    guesses++;

    if (userInput === randomNumber) {
      alert("🎉 Correct! You guessed it in " + guesses + " tries.");
      break;
    } else if (userInput > randomNumber) {
      alert("Too high! Try again.");
    } else {
      alert("Too low! Try again.");
    }
  }

  // check if player lost
  if (guesses === maxGuesses && userInput !== randomNumber) {
    alert(
      "❌ Game Over! You used all 100 attempts. The correct number was " +
        randomNumber
    );
  }

  // final score
  let score = userInput === randomNumber ? 100 - guesses : 0;
  alert("Your score is: " + score);

  // ask if they want to play again
  let playAgain = prompt("Do you want to play again? (yes/no)").toLowerCase();
  if (playAgain !== "yes") {
    alert("👋 Thanks for playing!");
    break; // exit main loop
  }
}
