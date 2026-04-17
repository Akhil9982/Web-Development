// if else else-if
// switch case
// early return pattern

// IF Else else-if
// let a = 455;

// if (a >= 10) {
//   console.log("Large");
// } else if (a <= 10) {
//   console.log("Small");
// } else {
//   console.log("This is not a number");
// }

// Switch case

// let a = 30;

// switch (3) {
//   case 1:
//     console.log("Hello");
//     break;
//   case 2:
//     console.log("Akhil");
//     break;
//   case 3:
//     console.log("Javascript");
//     break;
//   default:
//     console.log("Hey");
// }

// Early return pattern
// function getValue(val) {
//   if (val <= 25) return "A";
//   else if (val >= 50) return "B";
//   else return "C";
// }

// console.log(getValue(20));

// Problem Questions

/*
Q1. Write a•function getGrade(score) that:
• Takes a student's marks (0 to 100)
• Returns the grade based on this logic:
 90-100 A+
 80-89 A
 70-79 B
 60-69 C
 33-59 D
 0-32 Fail
Anything else
Invalid marks X */

// function getGrade(score) {
//   if (score <= 100 && score >= 90) return "A+";
//   if (score <= 89 && score >= 80) return "A";
//   if (score <= 79 && score >= 70) return "B";
//   if (score <= 69 && score >= 60) return "C";
//   if (score <= 59 && score >= 33) return "D";
//   if (score <= 32 && score >= 0) return "Fail";
//   else return "Invalid Marks";
// }
// console.log(getGrade(79));

// const getGrade = (score) => {
//   if (score > 100 || score < 0) return "Invalid Marks";
//   if (score >= 90) return "A+";
//   if (score >= 80) return "A";
//   if (score >= 70) return "B";
//   if (score >= 60) return "C";
//   if (score >= 33) return "D";
//   return "Fail";
// };
// console.log(getGrade(85.43));

// Q2.Rock-Paper-scissors

// function rps(user, comp) {
//   if (user === comp) return "draw";
//   if (user === "rock" && comp === "scissor") return "user";
//   if (user === "scissor" && comp === "paper") return "user";
//   if (user === "paper" && comp === "rock") return "user";
//   return "comp";
// }
// const result = rps("scissor", "paper");
// console.log(`The winner is: ${result}`);
