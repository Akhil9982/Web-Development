// Reduce

// reduce(redFn, initial value);

// Function redFun(accumulator, currentValue, currentIndex, arr)

// const inputs = [2, 3, 4, 5, 6];

// const sum = inputs.reduce((total, num, index) => {
//   console.log(total, index);
//   return total + num;
// });

// console.log(sum);

// const numbers = [];
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue,5);

// console.log(sum);

// Define the array of student scores
const scores = [85, 90, 78, 88, 76, 95, 89];

function findHighestScore(scores) {
  // The goal is to find the highest score among the students.
  // Implement your logic below and return the highest score.

  return scores.reduce(
    (largest, current) => (current > largest ? current : largest),
    scores[0]
  );
}

console.log(findHighestScore(scores));
