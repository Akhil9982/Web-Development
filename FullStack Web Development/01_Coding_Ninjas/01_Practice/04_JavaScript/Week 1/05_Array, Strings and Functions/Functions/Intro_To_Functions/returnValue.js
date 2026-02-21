/* Return Value of a function */

// function squared(number) {
//   return number * number;
// }

// const squared5 = squared(5);
// console.log(squared5);


// function lastDigit(num1, num2) {
//   let lastDigit1 = Math.abs(num1) % 10;
//   let lastDigit2 = Math.abs(num2) % 10;

//   return lastDigit1 === lastDigit2;
// }

// const lastDigit3 = lastDigit(31,21);
// console.log(lastDigit3);


function commonDigits(num1, num2) {
  let answer;

  // Convert numbers to strings and compare lengths
  if (num1.toString().length === num2.toString().length) {
    answer = true;
  } else {
    answer = false;
  }

  return answer;
}