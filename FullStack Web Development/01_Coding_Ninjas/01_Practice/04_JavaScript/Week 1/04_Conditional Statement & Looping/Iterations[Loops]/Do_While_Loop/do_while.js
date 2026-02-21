// Do While Loop

// Guess the number

let randomNum = Math.round(Math.random() * 100);

console.log(randomNum);

let gussedNum;

do {
  gussedNum = prompt("Guess the number: ");
  if (gussedNum == randomNum) {
    console.log("Guessed Correctly!!");
  } else {
    console.log("Take another guess");
  }
} while (gussedNum != randomNum);
