/** Higher Order Functions */

// map()

const inputs = [2, 4, 6, 8, 7];

// const sqaredArray = inputs.map(function (currentElelment) {
//   return currentElelment * currentElelment;
// });

const squaredArray = inputs.map((num) => num * num);

console.log(squaredArray);


